import https from 'https';
import http from 'http';
import { URL } from 'url';

const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 50, freeSocketTimeout: 30000 });
const httpAgent = new http.Agent({ keepAlive: true, maxSockets: 50, freeSocketTimeout: 30000 });

export default function handler(req, res) {
  const reqOrigin = req.headers.origin || '';
  const allowedOrigin = (reqOrigin.endsWith('rustyn.me') || reqOrigin.includes('localhost') || reqOrigin.includes('127.0.0.1'))
    ? reqOrigin
    : 'https://aac.rustyn.me';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `https://${req.headers.host || 'aac.rustyn.me'}`);

  if (reqUrl.searchParams.get('health') === '1' || req.url === '/health') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok', domain: 'https://aac.rustyn.me' }));
    return;
  }

  const targetUrl = reqUrl.searchParams.get('url');

  if (!targetUrl) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Missing url parameter' }));
    return;
  }

  const fetchUrl = (currentUrl, redirectCount = 0) => {
    if (redirectCount > 5) {
      res.statusCode = 508;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Too many redirects' }));
      return;
    }

    const isHttps = currentUrl.startsWith('https');
    const client = isHttps ? https : http;
    const agent = isHttps ? httpsAgent : httpAgent;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
    };

    if (req.headers.range) {
      headers['Range'] = req.headers.range;
    }

    client.get(currentUrl, { headers, agent }, (targetRes) => {
      if (targetRes.statusCode >= 300 && targetRes.statusCode < 400 && targetRes.headers.location) {
        fetchUrl(targetRes.headers.location, redirectCount + 1);
        return;
      }

      const reqOrigin = req.headers.origin || '';
      const allowedOrigin = (reqOrigin.endsWith('rustyn.me') || reqOrigin.includes('localhost'))
        ? reqOrigin
        : 'https://aac.rustyn.me';

      res.statusCode = targetRes.statusCode || 200;

      // Force PDF MIME type and inline disposition to prevent Chrome PDF viewer errors
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
      res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');

      if (targetRes.headers['content-range']) {
        res.setHeader('Content-Range', targetRes.headers['content-range']);
      }
      if (targetRes.headers['content-length']) {
        res.setHeader('Content-Length', targetRes.headers['content-length']);
      }

      targetRes.pipe(res);
    }).on('error', (err) => {
      console.error("PDF Proxy Error:", err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Failed to proxy PDF');
      }
    });
  };

  fetchUrl(targetUrl);
}

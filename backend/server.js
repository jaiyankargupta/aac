import http from 'http';
import https from 'https';
import { URL } from 'url';

const PORT = process.env.PORT || 3000;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

function handlePdfProxy(req, res) {
  // Set CORS Headers
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, `https://${req.headers.host || 'aac.rustyn.me'}`);
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

    const client = currentUrl.startsWith('https') ? https : http;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
    };

    if (req.headers.range) {
      headers['Range'] = req.headers.range;
    }

    client.get(currentUrl, { headers }, (targetRes) => {
      if (targetRes.statusCode >= 300 && targetRes.statusCode < 400 && targetRes.headers.location) {
        fetchUrl(targetRes.headers.location, redirectCount + 1);
        return;
      }

      res.statusCode = targetRes.statusCode || 200;
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Cache-Control', 'public, max-age=3600');

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
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Failed to proxy PDF stream' }));
      }
    });
  };

  fetchUrl(targetUrl);
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/pdf-proxy') || req.url.startsWith('/pdf-proxy')) {
    handlePdfProxy(req, res);
  } else if (req.url === '/health' || req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: 'ok', domain: 'https://aac.rustyn.me', service: 'AAC PDF Proxy Backend' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`AAC Backend Proxy running on port ${PORT} (https://aac.rustyn.me)`);
});

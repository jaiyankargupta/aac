import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Download, FileText, ArrowLeft, Loader2 } from 'lucide-react';

export default function PdfViewerModal({ file, paperColor, onClose }) {
  if (!file) return null;

  const [isWarmingUp, setIsWarmingUp] = useState(true);
  const pdfUrl = file.downloadUrl;
  const proxyViewerUrl = `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}`;

  useEffect(() => {
    let active = true;
    // Quick health ping to warm up server if Render is sleeping
    fetch('/api/pdf-proxy?health=1')
      .then(res => res.json())
      .then(() => {
        if (active) setIsWarmingUp(false);
      })
      .catch(() => {
        // Continue even if health check fails
        if (active) setIsWarmingUp(false);
      });

    return () => { active = false; };
  }, []);

  const modalJSX = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        background: '#090d16',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.2s ease',
        overflow: 'hidden'
      }}
    >
      {/* Fullscreen Header Bar */}
      <div
        style={{
          height: '64px',
          background: '#0f172a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'white',
          gap: '1rem',
          flexShrink: 0
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', overflow: 'hidden' }}>
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.12)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Website</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
            <FileText size={22} color={paperColor || '#818cf8'} style={{ flexShrink: 0 }} />
            <div style={{ overflow: 'hidden' }}>
              <h2
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'white',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  margin: 0
                }}
              >
                {file.name}
              </h2>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                {file.size || 'In-App Document Reader'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={file.name}
            className="btn-primary-drive"
            style={{
              backgroundColor: paperColor || '#4f46e5',
              padding: '0.5rem 1.25rem',
              fontSize: '0.88rem',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
            title="Close Reader"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Fullscreen Viewer Section - Native Inline PDF Reader */}
      <div style={{ flex: 1, width: '100%', height: 'calc(100vh - 64px)', background: '#000000', position: 'relative' }}>
        {isWarmingUp ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#fff' }}>
            <Loader2 size={36} style={{ animation: 'spin 1s linear infinite', marginBottom: '1rem', color: paperColor || '#818cf8' }} />
            <p style={{ fontSize: '0.95rem', fontWeight: 600 }}>⚡ Connecting to High-Speed PDF Server...</p>
          </div>
        ) : (
          <iframe
            src={proxyViewerUrl}
            title={file.name}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
          />
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}

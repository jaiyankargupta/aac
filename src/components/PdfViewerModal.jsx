import React from 'react';
import ReactDOM from 'react-dom';
import { X, Download, FileText, ArrowLeft } from 'lucide-react';

export default function PdfViewerModal({ file, paperColor, onClose }) {
  if (!file) return null;

  const isFolder = file.type === 'folder';
  const previewUrl = isFolder ? file.viewUrl : `https://drive.google.com/file/d/${file.id}/preview`;

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                {file.size || 'In-App Fullscreen Reader'}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={handleDownload}
            className="btn-primary-drive"
            style={{
              backgroundColor: paperColor || '#4f46e5',
              padding: '0.5rem 1.25rem',
              fontSize: '0.88rem',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)'
            }}
          >
            <Download size={16} />
            <span>Download PDF</span>
          </button>

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

      {/* 100% Fullscreen Iframe Previewer */}
      <div style={{ flex: 1, width: '100%', height: 'calc(100vh - 64px)', background: '#000000' }}>
        <iframe
          src={previewUrl}
          title={file.name}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block'
          }}
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalJSX, document.body);
}

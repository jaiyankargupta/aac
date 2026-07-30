import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Download, FileText, ArrowLeft, ExternalLink, RefreshCw, AlertTriangle } from 'lucide-react';

export default function PdfViewerModal({ file, paperColor, onClose }) {
  if (!file) return null;

  const [viewerMode, setViewerMode] = useState('embed'); // 'embed' | 'stream'
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const isFolder = file.type === 'folder';
  const previewUrl = isFolder ? file.viewUrl : `https://drive.google.com/file/d/${file.id}/preview`;
  const driveViewUrl = file.viewUrl || `https://drive.google.com/file/d/${file.id}/view`;

  const triggerAutoDownload = () => {
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadTriggered(true);
  };

  // Automatically trigger download if Drive embedded preview is not allowed or for large files
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAutoDownload();
    }, 400);
    return () => clearTimeout(timer);
  }, [file.id]);

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
                {file.size || 'In-App Reader'} {downloadTriggered ? '• Download Started Automatically' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls & Mode Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          <button
            onClick={triggerAutoDownload}
            className="btn-primary-drive"
            style={{
              backgroundColor: paperColor || '#4f46e5',
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Download size={15} />
            <span>Auto-Download & View</span>
          </button>

          <a
            href={driveViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-outline"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.25)',
              color: '#e2e8f0',
              padding: '0.5rem 0.9rem',
              fontSize: '0.83rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <ExternalLink size={14} />
            <span>Open in Google Drive</span>
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

      {/* Helpful Auto-Download & Drive Fallback Banner */}
      <div
        style={{
          background: 'linear-gradient(90deg, #1e293b 0%, #0f172a 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0.45rem 1.25rem',
          fontSize: '0.8rem',
          color: '#e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
          <span>
            If Google Drive says <strong>"This file is too large to preview"</strong>, the browser auto-download was triggered above. Click <strong>"Auto-Download & View"</strong> or <strong>"Open in Google Drive"</strong> anytime!
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            onClick={() => setViewerMode(viewerMode === 'embed' ? 'stream' : 'embed')}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            Switch View Mode ({viewerMode === 'embed' ? 'Drive Embed' : 'Direct Stream'})
          </button>
        </div>
      </div>

      {/* Main Fullscreen Viewer Section */}
      <div style={{ flex: 1, width: '100%', height: 'calc(100vh - 104px)', background: '#000000', position: 'relative' }}>
        {viewerMode === 'embed' ? (
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
        ) : (
          <iframe
            src={file.downloadUrl}
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

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Download, FileText, ArrowLeft, Loader2, Folder } from 'lucide-react';

const BACKEND_URL = "https://aac-ue14.onrender.com";

export default function PdfViewerModal({ file, paperColor, onClose }) {
  if (!file) return null;

  const pdfUrl = file.downloadUrl;
  const proxyViewerUrl = `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}`;

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden', flex: 1, minWidth: 0 }}>
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
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden', flex: 1, minWidth: 0 }}>
            <FileText size={20} color={paperColor || '#818cf8'} style={{ flexShrink: 0 }} />
            <div style={{ overflow: 'hidden', flex: 1, minWidth: 0 }}>
              <h2
                style={{
                  fontSize: '0.95rem',
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
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {file.size || (file.type === 'folder' ? 'Folder Collection' : 'In-App PDF Reader')}
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
            download={file.type === 'folder' ? undefined : file.name}
            className="btn-primary-drive"
            style={{
              backgroundColor: paperColor || '#4f46e5',
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            {file.type === 'folder' ? <Folder size={16} /> : <Download size={16} />}
            <span>{file.type === 'folder' ? 'Open Folder' : 'Download PDF'}</span>
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

      {/* Main Fullscreen Viewer Section */}
      <div style={{ flex: 1, width: '100%', height: 'calc(100vh - 64px)', background: '#090d16', position: 'relative' }}>
        {file.type === 'folder' ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '2rem' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '16px',
              padding: '3rem 2.5rem',
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <FileText size={32} color={paperColor || '#818cf8'} />
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                {file.name}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Folder collection hosted on GitHub Releases. Click below to browse and access all folder resources.
              </p>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-drive"
                style={{
                  backgroundColor: paperColor || '#4f46e5',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  width: '100%',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Folder size={18} style={{ marginRight: '0.5rem' }} />
                <span>Open Folder Resources</span>
              </a>
            </div>
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

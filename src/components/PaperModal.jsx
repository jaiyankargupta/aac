import React, { useState } from 'react';
import { X, ExternalLink, Download, FileText, Folder, Eye } from 'lucide-react';
import PdfViewerModal from './PdfViewerModal';

export default function PaperModal({ paper, onClose }) {
  const [activePreviewFile, setActivePreviewFile] = useState(null);

  if (!paper) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="paper-num-badge" style={{ backgroundColor: paper.color }}>
                {paper.paperNumber}
              </span>
              <span className="card-category">{paper.category}</span>
            </div>
            <h2 className="paper-title" style={{ fontSize: '1.4rem', margin: 0 }}>
              {paper.title}
            </h2>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p className="paper-description" style={{ fontSize: '0.98rem', marginBottom: '1.5rem' }}>
            {paper.description}
          </p>

          <h4 style={{ fontSize: '1rem', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Download size={18} color={paper.color} />
            <span>Files Available for Direct 1-Click Download ({paper.files.length})</span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
            {paper.files.map((file) => (
              <div
                key={file.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '0.85rem 1.1rem',
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', flex: 1, minWidth: '220px' }}>
                  {file.type === 'pdf' ? (
                    <FileText size={22} color={paper.color} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                  ) : (
                    <Folder size={22} color={paper.color} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                  )}
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', wordBreak: 'break-word' }}>
                      {file.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                      {file.size}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  <button
                    onClick={() => {
                      if (file.type === 'folder') {
                        window.open(file.downloadUrl, '_blank');
                      } else {
                        setActivePreviewFile(file);
                      }
                    }}
                    className="btn-card-outline"
                    style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
                  >
                    {file.type === 'folder' ? <Folder size={15} /> : <Eye size={15} />}
                    <span>{file.type === 'folder' ? 'Open' : 'View'}</span>
                  </button>

                  <a
                    href={file.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-primary"
                    style={{
                      backgroundColor: paper.color,
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    {file.type === 'folder' ? <Folder size={15} /> : <Download size={15} />}
                    <span>{file.type === 'folder' ? 'Open Folder' : 'Download'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button className="btn-card-outline" onClick={onClose} style={{ padding: '0.6rem 1.5rem' }}>
              Close Window
            </button>
          </div>
        </div>
      </div>

      {activePreviewFile && (
        <PdfViewerModal
          file={activePreviewFile}
          paperColor={paper.color}
          onClose={() => setActivePreviewFile(null)}
        />
      )}
    </div>
  );
}

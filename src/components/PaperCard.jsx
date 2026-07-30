import React, { useState } from 'react';
import { Download, ExternalLink, FileText, Folder, Star, Eye, Scale, Calculator, Receipt, PieChart, Boxes, FileCheck, TrendingUp, Briefcase } from 'lucide-react';
import PdfViewerModal from './PdfViewerModal';

const ICON_MAP = {
  Scale,
  Calculator,
  Receipt,
  PieChart,
  Boxes,
  FileCheck,
  TrendingUp,
  Briefcase
};

export default function PaperCard({ paper, onSelectPaper, isFavorite, onToggleFavorite }) {
  const [activePreviewFile, setActivePreviewFile] = useState(null);

  const triggerDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const PaperIcon = ICON_MAP[paper.iconName] || Scale;

  return (
    <div className="paper-card glass-panel" style={{ background: paper.bgGradient }}>
      <div className="card-accent-bar" style={{ backgroundColor: paper.color }} />

      <div className="card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span className="paper-num-badge" style={{ backgroundColor: paper.color }}>
            {paper.paperNumber}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-muted)'
            }}
          >
            {paper.group}
          </span>
          <span className="card-category">{paper.category}</span>
        </div>

        <button
          onClick={() => onToggleFavorite(paper.id)}
          style={{ color: isFavorite ? '#f59e0b' : 'var(--text-muted)', flexShrink: 0 }}
          title={isFavorite ? "Remove Bookmark" : "Bookmark Paper"}
        >
          <Star size={20} fill={isFavorite ? "#f59e0b" : "none"} />
        </button>
      </div>

      <div className="card-body">
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', marginBottom: '0.65rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-md)',
              background: paper.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0,
              marginTop: '0.15rem'
            }}
          >
            <PaperIcon size={20} />
          </div>
          <h3 className="paper-title" style={{ margin: 0, fontSize: '1.25rem', lineHeight: '1.3' }}>
            {paper.title}
          </h3>
        </div>

        <p className="paper-description">{paper.description}</p>

        <div className="section-mini-title">
          <Download size={13} style={{ color: paper.color }} />
          <span>1-Click Files & Materials ({paper.files.length})</span>
        </div>

        <div className="file-list-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
          {paper.files.map((file) => (
            <div
              key={file.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '0.75rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                {file.type === 'pdf' ? (
                  <FileText size={18} color={paper.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                ) : (
                  <Folder size={18} color={paper.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                )}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: '1.35',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal'
                    }}
                  >
                    {file.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {file.size}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', paddingTop: '0.35rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <button
                  onClick={() => setActivePreviewFile(file)}
                  className="btn-card-outline"
                  style={{
                    padding: '0.4rem 0.5rem',
                    fontSize: '0.8rem',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-sm)'
                  }}
                  title="View PDF Fullscreen"
                >
                  <Eye size={14} />
                  <span>View</span>
                </button>

                <button
                  onClick={() => triggerDownload(file.downloadUrl)}
                  className="btn-card-primary"
                  style={{
                    backgroundColor: paper.color,
                    padding: '0.4rem 0.5rem',
                    fontSize: '0.8rem',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-sm)'
                  }}
                  title="Instant Direct Download"
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="card-actions">
          <a
            href="https://github.com/jaiyankargupta/aac/releases/tag/v1.0.0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-primary"
            style={{ backgroundColor: paper.color }}
          >
            <ExternalLink size={16} />
            <span>GitHub Release CDN</span>
          </a>

          <button
            onClick={() => onSelectPaper(paper)}
            className="btn-card-outline"
          >
            <span>Full Overview</span>
          </button>
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

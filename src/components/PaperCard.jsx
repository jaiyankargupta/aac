import React, { useState } from 'react';
import { Star, Scale, Calculator, Receipt, PieChart, Boxes, FileCheck, TrendingUp, Briefcase } from 'lucide-react';
import PdfViewerModal from './PdfViewerModal';
import PdfFileBlock from './PdfFileBlock';

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
  const [preview, setPreview] = useState(null);

  const triggerDownload = (file) => {
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const PaperIcon = ICON_MAP[paper.iconName] || Scale;
  const chapterTotal = paper.files.reduce((sum, file) => sum + (file.chapters?.length || 0), 0);

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
          <span>PDFs in this paper ({paper.files.length}) · {chapterTotal} chapters</span>
        </div>

        <div className="file-list-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
          {paper.files.map((file) => (
            <PdfFileBlock
              key={file.uid}
              file={file}
              paperColor={paper.color}
              compact
              onView={(picked, page) => setPreview({ file: picked, page })}
              onDownload={triggerDownload}
            />
          ))}
        </div>

        <div className="card-actions">
          <button
            onClick={() => onSelectPaper(paper)}
            className="btn-card-outline"
            style={{ width: '100%', justifyContent: 'center', gridColumn: '1 / -1' }}
          >
            <span>Open all PDFs & chapters</span>
          </button>
        </div>
      </div>

      {preview && (
        <PdfViewerModal
          file={preview.file}
          startPage={preview.page}
          paperColor={paper.color}
          onClose={() => setPreview(null)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';
import PdfViewerModal from './PdfViewerModal';
import PdfFileBlock from './PdfFileBlock';

export default function PaperModal({ paper, onClose }) {
  const [preview, setPreview] = useState(null);

  if (!paper) return null;

  const triggerDownload = (file) => {
    const link = document.createElement('a');
    link.href = file.downloadUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const chapterTotal = paper.files.reduce((sum, file) => sum + (file.chapters?.length || 0), 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content modal-content-wide" onClick={(e) => e.stopPropagation()}>
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
            <FileText size={18} color={paper.color} />
            <span>
              {paper.files.length} PDFs · {chapterTotal} chapters inside
            </span>
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
            {paper.files.map((file) => (
              <PdfFileBlock
                key={file.uid}
                file={file}
                paperColor={paper.color}
                defaultOpen
                onView={(picked, page) => setPreview({ file: picked, page })}
                onDownload={triggerDownload}
              />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button className="btn-card-outline" onClick={onClose} style={{ padding: '0.6rem 1.5rem' }}>
              Close Window
            </button>
          </div>
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

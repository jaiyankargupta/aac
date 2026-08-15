import React, { useState } from 'react';
import { Download, FileText, Eye, ChevronDown, BookMarked } from 'lucide-react';

export default function PdfFileBlock({
  file,
  paperColor,
  onView,
  onDownload,
  defaultOpen = false,
  compact = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  const chapters = file.chapters || [];
  const chapterCount = chapters.length;

  return (
    <div className="pdf-file-block">
      <div className="pdf-file-head">
        <FileText size={compact ? 18 : 22} color={paperColor} className="pdf-file-icon" />
        <div className="pdf-file-meta">
          <div className="pdf-file-name">{file.name}</div>
          <div className="pdf-file-sub">
            {file.size}
            {file.pages ? ` · ${file.pages} pages` : ''}
            {chapterCount ? ` · ${chapterCount} chapters` : ''}
          </div>
        </div>
      </div>

      <div className="pdf-file-actions">
        <button
          onClick={() => onView(file)}
          className="btn-card-outline"
          title="View full PDF"
        >
          <Eye size={14} />
          <span>View PDF</span>
        </button>
        <button
          onClick={() => onDownload(file)}
          className="btn-card-primary"
          style={{ backgroundColor: paperColor }}
          title="Download this PDF"
        >
          <Download size={14} />
          <span>Download</span>
        </button>
      </div>

      {chapterCount > 0 && (
        <div className="pdf-chapter-wrap">
          <button
            className="pdf-chapter-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            <BookMarked size={14} color={paperColor} />
            <span>Chapters inside this PDF ({chapterCount})</span>
            <ChevronDown
              size={16}
              className={`pdf-chevron ${open ? 'open' : ''}`}
            />
          </button>

          {open && (
            <ol className="pdf-chapter-list">
              {chapters.map((chapter, index) => (
                <li key={`${file.uid}-ch-${index}`}>
                  <button
                    className="pdf-chapter-item"
                    onClick={() => onView(file, chapter.page)}
                    title={chapter.page ? `Open at page ${chapter.page}` : 'Open this PDF'}
                  >
                    <span className="pdf-chapter-num">{index + 1}</span>
                    <span className="pdf-chapter-title">{chapter.title}</span>
                    {chapter.page ? (
                      <span className="pdf-chapter-page">p.{chapter.page}</span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}

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

  const chapterAsFile = (chapter) => ({
    id: chapter.fileName,
    uid: chapter.fileName,
    name: `${chapter.title}.pdf`,
    type: "pdf",
    downloadUrl: chapter.downloadUrl,
    viewUrl: chapter.viewUrl,
    size: "Chapter PDF only"
  });

  return (
    <div className="pdf-file-block">
      <div className="pdf-file-head">
        <FileText size={compact ? 18 : 22} color={paperColor} className="pdf-file-icon" />
        <div className="pdf-file-meta">
          <div className="pdf-file-name">{file.name}</div>
          <div className="pdf-file-sub">
            {file.size}
            {file.pages ? ` · ${file.pages} pages` : ''}
            {chapterCount ? ` · ${chapterCount} separate chapter PDFs` : ''}
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
          <span>View full book</span>
        </button>
        <button
          onClick={() => onDownload(file)}
          className="btn-card-primary"
          style={{ backgroundColor: paperColor }}
          title="Download full PDF"
        >
          <Download size={14} />
          <span>Full book</span>
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
            <span>Open a chapter PDF ({chapterCount})</span>
            <ChevronDown
              size={16}
              className={`pdf-chevron ${open ? 'open' : ''}`}
            />
          </button>

          {open && (
            <ol className="pdf-chapter-list">
              {chapters.map((chapter, index) => {
                const chapterFile = chapterAsFile(chapter);
                return (
                  <li key={`${file.uid}-ch-${index}`}>
                    <div className="pdf-chapter-row">
                      <button
                        className="pdf-chapter-item"
                        onClick={() => onView(chapterFile)}
                        title={`Open only: ${chapter.title}`}
                      >
                        <span className="pdf-chapter-num">{index + 1}</span>
                        <span className="pdf-chapter-title">{chapter.title}</span>
                      </button>
                      <div className="pdf-chapter-btns">
                        <button
                          className="pdf-chapter-mini"
                          onClick={() => onView(chapterFile)}
                          title="View this chapter only"
                        >
                          <Eye size={13} />
                        </button>
                        <button
                          className="pdf-chapter-mini"
                          onClick={() => onDownload(chapterFile)}
                          title="Download this chapter only"
                        >
                          <Download size={13} />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      )}
    </div>
  );
}

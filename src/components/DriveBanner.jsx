import React from 'react';
import { ExternalLink, FolderGit2, Sparkles, FolderDown } from 'lucide-react';
import { MAIN_DRIVE_LINK_G1, MAIN_DRIVE_LINK_G2 } from '../data/papers';

export default function DriveBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>CMA Inter Group 1 & Group 2 Cloud Hub</span>
        </div>
        <h1 className="hero-title">
          All Study Materials & Past Papers (Papers 5 to 12)
        </h1>
        <p className="hero-description">
          Access high-yield exam question papers, main books, chart books, and practice problem sheets for Paper 5 to Paper 12 with direct 1-click download & full-screen reader.
        </p>

        <div className="hero-actions">
          <a
            href={MAIN_DRIVE_LINK_G1}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-drive-large"
          >
            <FolderGit2 size={22} color="#4f46e5" />
            <span>Group 1 Drive Folder</span>
            <ExternalLink size={18} style={{ marginLeft: '4px', opacity: 0.7 }} />
          </a>

          <a
            href={MAIN_DRIVE_LINK_G2}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-drive-large"
            style={{ color: '#8b5cf6' }}
          >
            <FolderGit2 size={22} color="#8b5cf6" />
            <span>Group 2 Drive Folder</span>
            <ExternalLink size={18} style={{ marginLeft: '4px', opacity: 0.7 }} />
          </a>

          <a
            href="#subject-papers"
            className="btn-outline-white"
          >
            <FolderDown size={18} />
            <span>Browse All 8 Papers</span>
          </a>
        </div>
      </div>
    </section>
  );
}

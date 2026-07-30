import React from 'react';
import { BookOpen, Search, ExternalLink, Moon, Sun } from 'lucide-react';
import { MAIN_DRIVE_LINK } from '../data/papers';

export default function Header({ searchQuery, setSearchQuery, isDark, setIsDark }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="brand-logo">
          <div className="brand-icon-wrapper">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="brand-title">AAC STUDY MATERIALS</div>
            <div className="brand-subtitle">CMA Inter Papers Hub</div>
          </div>
        </a>

        <div className="search-bar-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search papers, topics (e.g. Taxation, Law, Accounting, Costing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={() => setIsDark(!isDark)}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href={MAIN_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-drive"
          >
            <ExternalLink size={18} />
            <span>Open Google Drive</span>
          </a>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { BookOpen, Search, Moon, Sun } from 'lucide-react';

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
            placeholder="Search PDFs or chapters (e.g. GST, Partnership, Capital Budgeting)..."
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
        </div>
      </div>
    </header>
  );
}

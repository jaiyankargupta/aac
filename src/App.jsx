import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PaperCard from './components/PaperCard';
import PaperModal from './components/PaperModal';
import Footer from './components/Footer';
import { PAPERS_DATA, MAIN_DRIVE_LINK_G1, MAIN_DRIVE_LINK_G2 } from './data/papers';
import { ExternalLink, BookOpen } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('paper_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('app_theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('app_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('paper_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (paperId) => {
    setFavorites(prev =>
      prev.includes(paperId)
        ? prev.filter(id => id !== paperId)
        : [...prev, paperId]
    );
  };

  // Filter papers logic
  const filteredPapers = PAPERS_DATA.filter(paper => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.paperNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.files.some(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeCategory === 'ALL') return matchesSearch;
    if (activeCategory === 'GROUP_1') return matchesSearch && paper.group === 'GROUP 1';
    if (activeCategory === 'GROUP_2') return matchesSearch && paper.group === 'GROUP 2';
    if (activeCategory === 'BOOKMARKS') return matchesSearch && favorites.includes(paper.id);
    return matchesSearch && paper.id === activeCategory;
  });

  return (
    <div className="app-layout">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className="main-content" style={{ paddingTop: '1.5rem' }}>
        {/* Category & Filter Bar */}
        <section id="subject-papers" className="filter-bar">
          <div>
            <h2 className="filter-title">AAC Study Materials Catalog</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Select any paper card to view or click "Download" to save files directly to your device.
            </p>
          </div>

          <div className="filter-pills">
            <button
              className={`filter-pill ${activeCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ALL')}
            >
              All Subjects (8)
            </button>
            <button
              className={`filter-pill ${activeCategory === 'GROUP_1' ? 'active' : ''}`}
              onClick={() => setActiveCategory('GROUP_1')}
            >
              Group 1 (Papers 5-8)
            </button>
            <button
              className={`filter-pill ${activeCategory === 'GROUP_2' ? 'active' : ''}`}
              onClick={() => setActiveCategory('GROUP_2')}
            >
              Group 2 (Papers 9-12)
            </button>
            <button
              className={`filter-pill ${activeCategory === 'BOOKMARKS' ? 'active' : ''}`}
              onClick={() => setActiveCategory('BOOKMARKS')}
            >
              ★ Bookmarked ({favorites.length})
            </button>
          </div>
        </section>

        {/* Papers Cards Grid */}
        {filteredPapers.length > 0 ? (
          <div className="subject-grid">
            {filteredPapers.map(paper => (
              <PaperCard
                key={paper.id}
                paper={paper}
                onSelectPaper={setSelectedPaper}
                isFavorite={favorites.includes(paper.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
            <BookOpen size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
            <h3>No matching subjects found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try adjusting your search terms or filter selection.
            </p>
            <button
              className="btn-card-outline"
              style={{ margin: '0 auto' }}
              onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Quick Launch Callout for G1 and G2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
              borderColor: 'rgba(37, 99, 235, 0.2)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>
              Group 1 High-Speed CDN Catalog
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Direct 1-click access to Paper 5 (Laws), Paper 6 (Acc), Paper 7 (Taxation), and Paper 8 (Costing).
            </p>
            <a
              href={MAIN_DRIVE_LINK_G1}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-drive"
              style={{ backgroundColor: '#2563eb', width: '100%', justifyContent: 'center' }}
            >
              <ExternalLink size={18} />
              <span>Launch Group 1 CDN Assets</span>
            </a>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%)',
              borderColor: 'rgba(139, 92, 246, 0.2)'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>
              Group 2 High-Speed CDN Catalog
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Direct 1-click access to Paper 9 (OM SM), Paper 10 (Co Acc Audit), Paper 11 (FM DA), and Paper 12 (MA).
            </p>
            <a
              href={MAIN_DRIVE_LINK_G2}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-drive"
              style={{ backgroundColor: '#8b5cf6', width: '100%', justifyContent: 'center' }}
            >
              <ExternalLink size={18} />
              <span>Launch Group 2 CDN Assets</span>
            </a>
          </div>
        </div>
      </main>

      <PaperModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />

      <Footer />
    </div>
  );
}

import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <BookOpen size={20} color="#818cf8" />
          <span>Academic Excellence Drive Portal</span>
        </div>

        <ul className="footer-links">
          <li><a href="#subject-papers">Paper 5 (Laws)</a></li>
          <li><a href="#subject-papers">Paper 6 (Financial Acc)</a></li>
          <li><a href="#subject-papers">Paper 7 (Taxation)</a></li>
          <li><a href="#subject-papers">Paper 8 (Costing)</a></li>
        </ul>

        <div style={{ fontSize: '0.85rem' }}>
          Crafted with <Heart size={14} color="#f43f5e" style={{ display: 'inline', margin: '0 3px', verticalAlign: 'middle' }} /> for CA & CMA Aspirants
        </div>
      </div>
    </footer>
  );
}

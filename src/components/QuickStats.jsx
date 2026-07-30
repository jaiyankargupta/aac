import React from 'react';
import { Files, FolderCheck, Users, Clock } from 'lucide-react';

export default function QuickStats() {
  const stats = [
    {
      id: 1,
      icon: <Files size={24} color="#2563eb" />,
      number: "350+ PDFs",
      label: "Question Papers & Books",
      bg: "rgba(37, 99, 235, 0.1)"
    },
    {
      id: 2,
      icon: <FolderCheck size={24} color="#10b981" />,
      number: "8 Subjects",
      label: "Group 1 & Group 2 Complete",
      bg: "rgba(16, 185, 129, 0.1)"
    },
    {
      id: 3,
      icon: <Users size={24} color="#f59e0b" />,
      number: "12,400+",
      label: "Active Student Access",
      bg: "rgba(245, 158, 11, 0.1)"
    },
    {
      id: 4,
      icon: <Clock size={24} color="#f43f5e" />,
      number: "July 2026",
      label: "Latest Syllabus Sync",
      bg: "rgba(244, 63, 94, 0.1)"
    }
  ];

  return (
    <div className="quick-stats-grid">
      {stats.map((item) => (
        <div key={item.id} className="stat-card glass-panel">
          <div className="stat-icon" style={{ background: item.bg }}>
            {item.icon}
          </div>
          <div>
            <div className="stat-number">{item.number}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

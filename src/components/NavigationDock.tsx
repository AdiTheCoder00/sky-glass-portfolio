'use client';

import { useState, useEffect } from 'react';
import Dock from './Dock';
import './Dock.css';

const navItems = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'expertise', icon: 'auto_awesome', label: 'Expertise' },
  { id: 'skills', icon: 'code', label: 'Skills' },
  { id: 'projects', icon: 'rocket_launch', label: 'Projects' },
  { id: 'contact', icon: 'mail', label: 'Contact' },
];

const dockItems = navItems.map((item) => ({
  icon: <span className="material-symbols-outlined text-xl">{item.icon}</span>,
  label: item.label,
  onClick: () =>
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }),
}));

function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() =>
            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default function NavigationDock() {
  return (
    <>
      {/* Desktop: magnification dock */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      {/* Mobile: simple bottom nav */}
      <MobileBottomNav />
    </>
  );
}

import React, { useState } from 'react';
import { BookOpen, Menu, X, ArrowDown } from 'lucide-react';

export const Navbar = ({ onScrollToSubjects, onScrollToAbout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubjectsClick = (e) => {
    e.preventDefault();
    onScrollToSubjects();
    setMobileMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    onScrollToAbout();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full transition-all duration-200 border-b backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(11, 15, 23, 0.88)',
        borderColor: 'var(--card-border)'
      }}
    >
      <div className="max-w-[1200px] mx-auto h-16 sm:h-18 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Brand: Exampass + Gold Crest */}
        <a
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 text-lg sm:text-xl font-extrabold tracking-tight shrink-0 focus-visible:outline-none"
        >
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-black font-bold shadow-md"
            style={{ backgroundColor: 'var(--primary-gold)' }}
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </div>
          <span className="text-white font-bold tracking-tight">
            LearnHub
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#home"
            onClick={handleHomeClick}
            className="text-white hover:text-amber-400 transition-colors py-1"
          >
            Home
          </a>
          <a
            href="#subjects"
            onClick={handleSubjectsClick}
            className="text-slate-400 hover:text-amber-400 transition-colors py-1"
          >
            Question Banks
          </a>
          <a
            href="#about"
            onClick={handleAboutClick}
            className="text-slate-400 hover:text-amber-400 transition-colors py-1"
          >
            About
          </a>
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onScrollToSubjects}
            className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-lg text-black transition-all duration-150 hover:bg-amber-400 active:scale-98 shadow-sm"
            style={{
              backgroundColor: 'var(--primary-gold)',
              borderRadius: 'var(--border-radius)'
            }}
          >
            <span>Explore Subjects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b px-4 py-3 shadow-2xl flex flex-col gap-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <a
            href="/LearnHub/"
            onClick={handleHomeClick}
            className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-slate-800"
          >
            Home
          </a>
          <a
            href="#subjects"
            onClick={handleSubjectsClick}
            className="px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-800"
          >
            Question Banks
          </a>
          <a
            href="#about"
            onClick={handleAboutClick}
            className="px-3 py-2 text-sm font-medium rounded-md text-slate-300 hover:bg-slate-800"
          >
            About
          </a>
          <button
            onClick={handleSubjectsClick}
            className="w-full text-center text-xs font-bold px-4 py-2.5 rounded-lg text-black mt-2"
            style={{ backgroundColor: 'var(--primary-gold)' }}
          >
            Explore Subjects
          </button>
        </div>
      )}
    </header>
  );
};

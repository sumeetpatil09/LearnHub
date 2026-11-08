
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SUBJECTS_DATA } from '../data/questionBankData.js';

export const Footer = ({ onScrollToTop, onScrollToSubjects, onScrollToAbout }) => {
  return (
    <footer
      className="border-t transition-colors"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        color: 'var(--text-main)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          
          {/* Column 1: Eagle Logo Placeholder & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* ===================================================================
                  EAGLE LOGO PLACEHOLDER
                  To use your actual eagle logo image file:
                  1. Place eagle.png in your /public/ folder.
                  2. Replace this SVG with: <img src="/eagle.png" alt="Eagle Logo" className="w-10 h-10 object-contain" />
                  =================================================================== */}
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderColor: 'var(--primary-gold)',
                  width: '62px',
                  height: '60px'
                }}
                title="Eagle Logo Placeholder"
              >
                {/* Stylized Majestic Eagle SVG Icon */}
                <img src="\ACELogo.png" alt="Eagle Logo" className="w-20 h-20 object-contain" />
                  <path
                    d="M32 4L37 16L48 10L42 22L56 22L44 32L54 44L40 40L38 58L32 46L26 58L24 40L10 44L20 32L8 22L22 22L16 10L27 16L32 4Z"
                    fill="currentColor"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="32" cy="24" r="3" fill="#000" />
              </div>

              <div>
                <div className="font-extrabold text-base sm:text-lg text-white">
                  LearnHub
                </div>
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                  Powered by team ACE
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Inspired by the eagle and the Ace, Because The eagle represents our vision; ACE defines our values.<br/>
              <span className="text-amber-400">Fly High. Stand Above.</span>
            </p>

            <div className="text-[15px] p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 font-mono">
              Under tha Guideance of <span className="text-amber-300 font-bold">Vijaylaxmi Patil</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToTop();
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#subjects"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToSubjects();
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Question Banks (5 Subjects)
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onScrollToAbout();
                  }}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  About LaernHub
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onScrollToTop}
                  className="text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 3rd Sem Subjects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-white">
              Third Sem Subjects
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SUBJECTS_DATA.map((sub) => (
                <li key={sub.id} className="flex items-center justify-between">
                  <span className="truncate pr-2">{sub.name}</span>
                  <span className="font-mono text-[11px] text-amber-400/80 shrink-0">{sub.code}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <div>
            © {new Date().getFullYear()} LearnHub. All study materials provided via PDF.
          </div>

          <button
            type="button"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-900 text-xs text-slate-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

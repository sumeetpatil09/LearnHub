import React from 'react';
import { ArrowDown, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { APP_METADATA } from '../data/questionBankData.js';

export const Hero = ({ onScrollToSubjects, totalDocuments }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b"
      style={{
        backgroundColor: 'var(--bg-color)',
        borderColor: 'var(--card-border)'
      }}
    >
      {/* Ambient dark gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-20 blur-3xl rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--primary-gold) 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Academic Edition Tag */}
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-5 px-3 py-1 rounded-full border"
          style={{
            backgroundColor: 'var(--gold-tint)',
            color: 'var(--primary-gold)',
            borderColor: 'var(--gold-border)'
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Undergraduate Engineering · Semester 03</span>
        </div>

        {/* Hero Heading: Third Semester Question Bank */}
        <h1 className="text-2xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-5 max-w-5xl mx-auto leading-tight text-white">
          {APP_METADATA.semesterTitle}
        </h1>

        {/* Short Slogan */}
        <p className="text-sm sm:text-lg max-w-4xl mx-auto mb-9 leading-relaxed font-normal text-slate-300">
          {APP_METADATA.slogan}
        </p>

        {/* Scroll CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            onClick={onScrollToSubjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-black rounded-lg transition-all duration-150 hover:bg-amber-400 active:scale-98 shadow-md"
            style={{
              backgroundColor: 'var(--primary-gold)',
              borderRadius: 'var(--border-radius)'
            }}
          >
            <span>Explore Subjects</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Highlights Strip in dark & gold */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 sm:p-5 rounded-xl border text-left max-w-2xl mx-auto"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: 'var(--gold-tint)',
                borderColor: 'var(--gold-border)',
                color: 'var(--primary-gold)'
              }}
            >
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">5 Subjects</div>
              <div className="text-[11px] text-slate-400">Core Engineering</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: 'var(--gold-tint)',
                borderColor: 'var(--gold-border)',
                color: 'var(--primary-gold)'
              }}
            >
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-white tabular-nums">{totalDocuments}+ PDFs</div>
              <div className="text-[11px] text-slate-400">Ready to Download</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: 'var(--gold-tint)',
                borderColor: 'var(--gold-border)',
                color: 'var(--primary-gold)'
              }}
            >
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">3 Categories</div>
              <div className="text-[11px] text-slate-400">Per Subject</div>
            </div>
          </div>

          {/* <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                color: '#34d399'
              }}
            >
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">100% Free</div>
              <div className="text-[11px] text-slate-400">Direct PDF Access</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

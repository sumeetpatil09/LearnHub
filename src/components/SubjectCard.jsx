
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export const SubjectCard = ({ subject, onExplore }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onExplore(subject)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onExplore(subject);
        }
      }}
      className="group relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-200 cursor-pointer text-left hover:-translate-y-1 hover:border-amber-500/50 shadow-lg"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        borderRadius: 'var(--border-radius)'
      }}
    >
      <div>
        {/* Top Header: Code & Doc Count */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="text-xs font-mono font-bold px-2.5 py-1 rounded-md border"
            style={{
              backgroundColor: 'var(--gold-tint)',
              color: 'var(--primary-gold)',
              borderColor: 'var(--gold-border)'
            }}
          >
            {subject.code}
          </span>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white tabular-nums">
              {subject.documentCount}
            </span>
            <span>PDF Files</span>
          </div>
        </div>

        {/* Subject Name */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2.5 text-white transition-colors group-hover:text-amber-400 leading-snug">
          {subject.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm line-clamp-2 mb-5 leading-relaxed text-slate-400">
          {subject.description}
        </p>

        {/* Categories preview */}
        <div
          className="pt-3 border-t flex items-center justify-between text-[11px] text-slate-400"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <span>Question Bank</span>
          <span>·</span>
          <span>IA</span>
          <span>·</span>
          <span>Assignments</span>
        </div>
      </div>

      {/* Explore Button */}
      <div className="mt-5 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExplore(subject);
          }}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 group-hover:bg-amber-500 group-hover:text-black border border-slate-700/60"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: 'var(--text-main)',
            borderRadius: 'var(--border-radius)'
          }}
        >
          <span>Explore PDFs</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

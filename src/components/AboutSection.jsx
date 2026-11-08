import React from 'react';
import { FileText, Download, Sparkles } from 'lucide-react';
import { APP_METADATA } from '../data/questionBankData.js';

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-15 border-b "
      style={{
        backgroundColor: 'var(--bg-color)',
        borderColor: 'var(--card-border)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xl font-bold tracking-wider mb-2 text-amber-400">
            About LearnHub
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
            {APP_METADATA.about.title}
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
            {APP_METADATA.about.mission}
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {APP_METADATA.about.features.map((feature, idx) => {
            const icons = [
              <FileText key={0} className="w-5 h-5 text-amber-400" />,
              <Sparkles key={1} className="w-5 h-5 text-amber-400" />,
              <Download key={3} className="w-5 h-5 text-amber-400" />
            ];

            return (
              <div
                key={idx}
                className="p-5 rounded-xl border flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--card-border)',
                  borderRadius: 'var(--border-radius)'
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3.5 border"
                    style={{
                      backgroundColor: 'var(--gol-tint)',
                      borderColor: 'var(--gold-border)'
                    }}
                  >
                    {icons[idx]}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1.5 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

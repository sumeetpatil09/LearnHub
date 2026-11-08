
import React, { useState } from 'react';
import { SubjectCard } from './SubjectCard.jsx';
import { Search, FileText } from 'lucide-react';

export const SubjectsSection = ({ subjects, onSelectSubject }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = subjects.filter((s) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="subjects"
      className="py-16 md:py-20 border-b scroll-mt-16"
      style={{
        backgroundColor: 'var(--bg-color)',
        borderColor: 'var(--card-border)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider mb-2 text-amber-400">
              Third Semester Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white">
              SUBJECTS & RESOURCES
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any subject to open the PDF resource popup: Question Bank, IA Papers, and Assignments.
            </p>
          </div>
        </div>
        {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onExplore={onSelectSubject}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

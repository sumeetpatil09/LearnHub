

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { SubjectsSection } from './components/SubjectsSection.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { Footer } from './components/Footer.jsx';
import { SubjectModal } from './components/SubjectModal.jsx';
import { SUBJECTS_DATA } from './data/questionBankData.js';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const totalDocuments = SUBJECTS_DATA.reduce(
    (acc, curr) => acc + curr.documentCount,
    0
  );

  const scrollToSubjects = () => {
    const el = document.getElementById('subjects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-amber-400 selection:text-black">
      {/* Sticky Navbar */}
      <Navbar
        onScrollToSubjects={scrollToSubjects}
        onScrollToAbout={scrollToAbout}
      />

      {/* Main Content Areas */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          onScrollToSubjects={scrollToSubjects}
          totalDocuments={totalDocuments}
        />

        {/* 6 Subjects Responsive Grid Section */}
        <SubjectsSection
          subjects={SUBJECTS_DATA}
          onSelectSubject={(subj) => setSelectedSubject(subj)}
        />

        {/* Minimal About Section */}
        <AboutSection />
      </main>

      {/* Footer with Eagle Logo Placeholder */}
      <Footer
        onScrollToTop={scrollToTop}
        onScrollToSubjects={scrollToSubjects}
        onScrollToAbout={scrollToAbout}
      />

      {/* Centered Modal Popup with blurred backdrop */}
      <SubjectModal
        subject={selectedSubject}
        onClose={() => setSelectedSubject(null)}
      />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import {
  X,
  FileText,
  Eye,
  Download,
  Check
} from 'lucide-react';

const CATEGORIES = [
  { key: 'questionBank', label: 'Question Bank' },
  { key: 'ciQuestions', label: 'IA Questions' },
  { key: 'assignmentQuestions', label: 'Assignment Questions' }
];

export const SubjectModal = ({ subject, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('questionBank');
  const [downloadSuccessId, setDownloadSuccessId] = useState(null);

  // Reset category when switching subjects
  useEffect(() => {
    if (subject) {
      setActiveCategory('questionBank');
      setDownloadSuccessId(null);
    }
  }, [subject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (subject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [subject]);

  if (!subject) return null;

  const currentFiles = (subject.categories && subject.categories[activeCategory]) || [];

  // Download PDF handler ensuring correct file and filename
  const handleDownload = (pdf) => {
    setDownloadSuccessId(pdf.id);
    setTimeout(() => setDownloadSuccessId(null), 2500);

    const link = document.createElement('a');
    link.href = encodeURI(pdf.filePath);
    link.download = pdf.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(5, 8, 15, 0.78)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Compact, Clean Modal Box */}
      <div
        className="relative w-full h-1/2 max-w-lg sm:max-w-xl rounded-xl border shadow-2xl overflow-hidden flex flex-col"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--card-border)',
          borderRadius: 'var(--border-radius)',
          color: 'var(--text-main)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          className="flex items-center justify-between px-5 py-3.5 border-b shrink-0"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className="text-xs font-mono font-bold px-2 py-0.5 rounded border"
              style={{
                backgroundColor: 'var(--gold-tint)',
                color: 'var(--primary-gold)',
                borderColor: 'var(--gold-border)'
              }}
            >
              {subject.code}
            </span>
            <h3 className="text-sm sm:text-base font-bold truncate">
              {subject.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5 PDF Category Tabs */}
        <div
          className="border-b px-4 py-2 overflow-x-auto custom-scrollbar shrink-0"
          style={{
            backgroundColor: 'rgba(11, 15, 23, 0.6)',
            borderColor: 'var(--card-border)'
          }}
        >
          <div className="flex items-center gap-1.5 min-w-max">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap border ${
                    isActive
                      ? 'shadow-sm font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--primary-gold)' : 'transparent',
                    color: isActive ? '#0b0f17' : undefined,
                    borderColor: isActive ? 'var(--primary-gold)' : 'transparent'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Body: List of PDF files */}
        <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {currentFiles.length === 0 ? (
            <div className="py-10 text-center text-slate-400 text-xs">
              <FileText className="w-8 h-8 mx-auto mb-2 opacity-40 text-amber-500" />
              <span>No PDF files added to this category yet.</span>
            </div>
          ) : (
            <div className="space-y-2.5">
              {currentFiles.map((pdf) => {
                const isDownloaded = downloadSuccessId === pdf.id;
                const encodedPath = encodeURI(pdf.filePath);

                return (
                  <div
                    key={pdf.id}
                    className="p-3 sm:p-3.5 rounded-lg border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:border-amber-500/40"
                    style={{
                      backgroundColor: 'rgba(26, 34, 52, 0.45)',
                      borderColor: 'var(--card-border)'
                    }}
                  >
                    {/* PDF Icon & Filename */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: 'rgba(239, 68, 68, 0.12)',
                          borderColor: 'rgba(239, 68, 68, 0.3)',
                          color: '#f87171'
                        }}
                      >
                        <FileText className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-semibold truncate text-white">
                          {pdf.fileName}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <span>{pdf.fileSize || 'PDF Document'}</span>
                          <span>·</span>
                          <span className="truncate text-slate-500">{pdf.title}</span>
                        </div>
                      </div>
                    </div>

                    {/* View PDF & Download PDF Buttons */}
                    <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                      {/* View PDF: Opens actual PDF in a new browser tab */}
                      <a
                        href={encodedPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-colors hover:bg-slate-800 text-slate-200"
                        style={{ borderColor: 'var(--card-border)' }}
                        title={`View ${pdf.fileName} in new tab`}
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>View PDF</span>
                      </a>

                      {/* Download PDF: Downloads the actual PDF file */}
                      <button
                        type="button"
                        onClick={() => handleDownload(pdf)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all active:scale-95"
                        style={{
                          backgroundColor: isDownloaded ? '#059669' : 'var(--primary-gold)',
                          color: isDownloaded ? '#ffffff' : '#0b0f17'
                        }}
                        title={`Download ${pdf.fileName}`}
                      >
                        {isDownloaded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Downloaded</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Bottom Status */}
        <div
          className=" mt-10 px-5 py-2.5 border-t text-[11px] flex items-center justify-between text-slate-400"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <span>
            {currentFiles.length} file{currentFiles.length === 1 ? '' : 's'} available
          </span>
          <button
            type="button"
            onClick={onClose}
            className="hover:text-amber-400 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

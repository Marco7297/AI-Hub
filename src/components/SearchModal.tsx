import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTools } from '../context/ToolsContext';
import { ToolBadge } from './ToolBadge';
import { RatingStars } from './RatingStars';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { tools } = useTools();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? tools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.tagline.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase()) ||
          t.pros.some((p) => p.toLowerCase().includes(query.toLowerCase()))
      )
    : tools.slice(0, 5);

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/tool/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="relative border-b border-slate-800 p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search AI tools (e.g. 'coding', 'paraphrasing', 'video', 'free')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {query.trim() === '' && (
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1.5">
              Popular AI Tools
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-sm">
              No AI tools found for "{query}". Try another keyword or browse all tools.
            </div>
          ) : (
            filtered.map((tool) => (
              <div
                key={tool.id}
                onClick={() => handleSelect(tool.slug)}
                className="p-3 rounded-xl hover:bg-slate-800/80 cursor-pointer flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-10 h-10 rounded-lg object-cover ring-1 ring-white/10 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                        {tool.name}
                      </span>
                      {tool.featured && <ToolBadge type="featured" />}
                      <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
                    </div>
                    <p className="text-xs text-slate-400 truncate max-w-md">
                      {tool.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <RatingStars rating={tool.rating} showScore={true} />
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-t border-slate-800/80 bg-slate-950/50 flex items-center justify-between text-xs text-slate-400">
          <span>Tip: Press ESC to close</span>
          <button
            onClick={() => {
              onClose();
              navigate('/tools');
            }}
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            View all directory tools &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

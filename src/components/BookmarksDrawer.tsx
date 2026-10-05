import React from 'react';
import { X, ExternalLink, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../context/BookmarkContext';
import { useTools } from '../context/ToolsContext';
import { useCurrency } from '../context/CurrencyContext';
import { ToolBadge } from './ToolBadge';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({ isOpen, onClose }) => {
  const { bookmarkedIds, toggleBookmark } = useBookmarks();
  const { tools } = useTools();
  const { formatPrice } = useCurrency();

  if (!isOpen) return null;

  const savedTools = tools.filter((t) => bookmarkedIds.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl">
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <h2 className="text-lg font-bold text-white">Your Saved AI Stack</h2>
            <p className="text-xs text-slate-400">
              {savedTools.length} {savedTools.length === 1 ? 'tool' : 'tools'} bookmarked
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedTools.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <p className="text-slate-300 text-sm">No saved tools yet.</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Bookmark tools by clicking the bookmark icon on any tool card while browsing.
              </p>
            </div>
          ) : (
            savedTools.map((tool) => (
              <div
                key={tool.id}
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/40 hover:border-slate-700 space-y-2.5 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <Link
                        to={`/tool/${tool.slug}`}
                        onClick={onClose}
                        className="font-bold text-white text-sm hover:text-indigo-400 transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
                        <span className="text-[11px] text-emerald-400 font-medium">
                          {formatPrice(tool.startingPrice, tool.inrPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleBookmark(tool.id)}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-slate-400 line-clamp-1">{tool.tagline}</p>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to={`/tool/${tool.slug}`}
                    onClick={onClose}
                    className="py-1.5 px-2 text-center text-xs font-medium rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200"
                  >
                    Full Review
                  </Link>
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="py-1.5 px-2 text-center text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-1"
                  >
                    Visit Site
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {savedTools.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/60">
            <Link
              to="/tools"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center gap-2"
            >
              Browse more tools to add
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

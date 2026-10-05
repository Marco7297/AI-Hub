import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Bookmark, Check, ArrowRight, ArrowLeftRight } from 'lucide-react';
import type { Tool } from '../types';
import { ToolBadge } from './ToolBadge';
import { RatingStars } from './RatingStars';
import { useCurrency } from '../context/CurrencyContext';
import { useBookmarks } from '../context/BookmarkContext';

interface ToolCardProps {
  tool: Tool;
  layout?: 'grid' | 'list';
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, layout = 'grid' }) => {
  const { formatPrice } = useCurrency();
  const { isBookmarked, toggleBookmark, isCompared, toggleCompare } = useBookmarks();

  const bookmarked = isBookmarked(tool.id);
  const compared = isCompared(tool.id);

  if (layout === 'list') {
    return (
      <div className="glass-card rounded-xl p-5 border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group">
        <div className="flex items-start gap-4 flex-1">
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-14 h-14 rounded-xl object-cover ring-1 ring-white/10 shrink-0 group-hover:scale-105 transition-transform"
            loading="lazy"
          />
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={`/tool/${tool.slug}`}
                className="text-lg font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {tool.name}
              </Link>
              {tool.sponsored && <ToolBadge type="sponsored" />}
              {tool.featured && <ToolBadge type="featured" />}
              <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
              {tool.indiaPaymentSupport.includes('UPI') && <ToolBadge type="upi" />}
            </div>

            <p className="text-sm text-slate-300 line-clamp-1">{tool.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} />
              <span>•</span>
              <span className="text-indigo-400 font-medium">{tool.category}</span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">
                {formatPrice(tool.startingPrice, tool.inrPrice)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
          <button
            onClick={() => toggleBookmark(tool.id)}
            aria-label={bookmarked ? 'Remove from saved' : 'Save tool'}
            title={bookmarked ? 'Saved to bookmarks' : 'Save tool'}
            className={`p-2.5 rounded-lg border text-sm transition-all ${
              bookmarked
                ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500/50'
                : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-indigo-400' : ''}`} />
          </button>

          <button
            onClick={() => toggleCompare(tool.id)}
            aria-label="Compare tool"
            title={compared ? 'In comparison' : 'Compare tool'}
            className={`p-2.5 rounded-lg border text-sm transition-all ${
              compared
                ? 'bg-purple-600/20 text-purple-400 border-purple-500/50'
                : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
            }`}
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>

          <Link
            to={`/tool/${tool.slug}`}
            className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            Review
          </Link>

          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-sm flex items-center gap-1.5 transition-all"
          >
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/40 flex flex-col justify-between h-full group relative transition-all">
      {/* Top row: Badges and Actions */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {tool.sponsored && <ToolBadge type="sponsored" />}
            {tool.featured && <ToolBadge type="featured" />}
            <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleCompare(tool.id)}
              title={compared ? 'In comparison' : 'Compare tool'}
              className={`p-1.5 rounded-md transition-colors ${
                compared ? 'bg-purple-500/20 text-purple-300' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => toggleBookmark(tool.id)}
              title={bookmarked ? 'Saved to bookmarks' : 'Save tool'}
              className={`p-1.5 rounded-md transition-colors ${
                bookmarked ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-indigo-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Header: Logo, Name, Category */}
        <div className="flex items-start gap-3.5 mb-3">
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10 shrink-0 group-hover:scale-105 transition-transform"
            loading="lazy"
          />
          <div className="min-w-0">
            <Link
              to={`/tool/${tool.slug}`}
              className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors block truncate"
            >
              {tool.name}
            </Link>
            <span className="text-xs text-indigo-400/90 font-medium block">
              {tool.category}
            </span>
            <div className="mt-1">
              <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-slate-300 line-clamp-2 mb-3.5 leading-relaxed">
          {tool.tagline}
        </p>

        {/* Key Pros highlight snippet */}
        <div className="space-y-1 mb-4 pt-2 border-t border-slate-800/80">
          {tool.pros.slice(0, 2).map((pro, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
              <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
              <span className="truncate">{pro}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Pricing & CTAs */}
      <div className="pt-3 border-t border-slate-800/80 mt-auto">
        <div className="flex items-center justify-between text-xs mb-3">
          <span className="text-slate-400">Pricing:</span>
          <span className="font-semibold text-emerald-400">
            {formatPrice(tool.startingPrice, tool.inrPrice)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/tool/${tool.slug}`}
            className="w-full py-2 px-3 text-xs font-semibold text-center rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 transition-colors flex items-center justify-center gap-1"
          >
            Review
            <ArrowRight className="w-3 h-3" />
          </Link>

          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="w-full py-2 px-3 text-xs font-semibold text-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all shadow-sm flex items-center justify-center gap-1"
          >
            Visit Site
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

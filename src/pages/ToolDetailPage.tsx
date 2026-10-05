import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ExternalLink,
  Bookmark,
  Share2,
  ThumbsUp,
  CheckCircle,
  XCircle,
  Calendar,
  CreditCard,
  Tag,
  Copy,
  Check,
  Star,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useTools } from '../context/ToolsContext';
import { useCurrency } from '../context/CurrencyContext';
import { useBookmarks } from '../context/BookmarkContext';
import { ToolCard } from '../components/ToolCard';
import { ToolBadge } from '../components/ToolBadge';
import { RatingStars } from '../components/RatingStars';
import { SeoMeta } from '../components/SeoMeta';

export const ToolDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getToolBySlug, tools, upvoteTool } = useTools();
  const { formatPrice, currency } = useCurrency();
  const { isBookmarked, toggleBookmark, isCompared, toggleCompare } = useBookmarks();
  const [copiedCode, setCopiedCode] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const tool = slug ? getToolBySlug(slug) : undefined;

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Tool Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested AI tool could not be found or has been moved.
        </p>
        <Link
          to="/tools"
          className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors"
        >
          Browse All Tools
        </Link>
      </div>
    );
  }

  const bookmarked = isBookmarked(tool.id);
  const compared = isCompared(tool.id);

  // Similar tools from same category, excluding current tool
  const similarTools = tools
    .filter((t) => t.categorySlug === tool.categorySlug && t.id !== tool.id)
    .slice(0, 3);

  const handleCopyPromo = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 2000);
  };

  const handleUpvote = () => {
    if (!hasUpvoted) {
      upvoteTool(tool.id);
      setHasUpvoted(true);
    }
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    operatingSystem: 'All',
    applicationCategory: tool.category,
    description: tool.description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: tool.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      '@type': 'Offer',
      price: tool.pricingModel === 'Free' ? '0' : tool.startingPrice.replace(/[^0-9.]/g, '') || '10',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SeoMeta
        title={`${tool.name} Review, Pricing & Free Tier (${tool.lastUpdated})`}
        description={tool.tagline}
        canonicalPath={`/tool/${tool.slug}`}
        type="product"
        schemaData={schemaData}
      />

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/tools" className="hover:text-white transition-colors">
          Tools
        </Link>
        <span>/</span>
        <Link
          to={`/category/${tool.categorySlug}`}
          className="hover:text-white transition-colors text-indigo-400"
        >
          {tool.category}
        </Link>
        <span>/</span>
        <span className="text-slate-200 font-medium truncate">{tool.name}</span>
      </nav>

      {/* Tool Header Showcase Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <img
              src={tool.logo}
              alt={`${tool.name} official logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg shrink-0"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {tool.name}
                </h1>
                {tool.sponsored && <ToolBadge type="sponsored" />}
                {tool.featured && <ToolBadge type="featured" />}
                <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} size="md" />
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Updated {tool.lastUpdated}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">
                  {formatPrice(tool.startingPrice, tool.inrPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {/* Upvote Button */}
            <button
              onClick={handleUpvote}
              className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                hasUpvoted
                  ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/50'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${hasUpvoted ? 'fill-emerald-400' : ''}`} />
              <span>{tool.upvotes || 1}</span>
            </button>

            {/* Compare Toggle */}
            <button
              onClick={() => toggleCompare(tool.id)}
              className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                compared
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/50'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title="Add to compare list"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>{compared ? 'Comparing' : 'Compare'}</span>
            </button>

            {/* Bookmark Toggle */}
            <button
              onClick={() => toggleBookmark(tool.id)}
              className={`px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                bookmarked
                  ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/50'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title="Save tool"
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-indigo-400' : ''}`} />
              <span>{bookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Share Link */}
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white transition-colors"
              title="Copy share link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Primary Affiliate CTA Button */}
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all flex-1 md:flex-initial"
            >
              Visit {tool.name} Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {sharedToast && (
          <div className="p-2 text-center text-xs bg-indigo-500/20 text-indigo-300 rounded-lg border border-indigo-500/40 animate-fadeIn">
            ✓ Link copied to clipboard!
          </div>
        )}

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
          {tool.tagline}
        </p>

        {/* Exclusive Deal / Promo Banner if available */}
        {tool.dealText && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Zap className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Exclusive Reader Offer
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {tool.dealText}
                </span>
              </div>
            </div>

            {tool.promoCode && (
              <button
                onClick={() => handleCopyPromo(tool.promoCode!)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs font-mono text-emerald-300 hover:bg-slate-800 transition-colors shrink-0"
              >
                <span>Code: {tool.promoCode}</span>
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Grid: Content & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Review, Features, Pros & Cons */}
        <div className="lg:col-span-8 space-y-8">
          {/* Detailed Review Section */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              In-Depth Editorial Review
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {tool.description}
            </p>
            {tool.fullReview && (
              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {tool.fullReview}
              </p>
            )}
          </section>

          {/* Pros & Cons Side-by-Side */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Pros & Cons Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="space-y-3 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  What We Like (Pros)
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {tool.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-3 p-4 rounded-xl bg-rose-950/20 border border-rose-500/20">
                <h3 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Watch Outs (Cons)
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {tool.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✗</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features Checklist */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Key Capabilities & Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tool.features.map((feat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Target Audience */}
          <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Who Should Use {tool.name}?
            </h2>
            <div className="flex flex-wrap gap-2">
              {tool.targetAudience.map((audience, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-xs font-semibold text-indigo-300 border border-slate-700"
                >
                  👤 {audience}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Pricing Summary & Affiliate Box */}
        <div className="lg:col-span-4 space-y-6">
          {/* Pricing Box */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5 sticky top-24">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pricing Overview
              </span>
              <div className="text-2xl font-black text-white">
                {formatPrice(tool.startingPrice, tool.inrPrice)}
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                Model: {tool.pricingModel}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3 text-xs">
              <div>
                <strong className="text-slate-300 block mb-1">Free Tier Availability:</strong>
                <p className="text-slate-400 leading-relaxed">{tool.freeTierDetails}</p>
              </div>

              <div>
                <strong className="text-slate-300 block mb-1">India Payment Methods:</strong>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{tool.indiaPaymentSupport}</span>
                </div>
              </div>
            </div>

            {/* Visit Site Button */}
            <div className="pt-2">
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all"
              >
                Go to {tool.name}
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                🔒 Official site via verified referral link
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Tools Section */}
      {similarTools.length > 0 && (
        <section className="space-y-6 pt-8 border-t border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Similar {tool.category} AI Tools
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Compare alternatives to {tool.name} in the same workflow category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarTools.map((simTool) => (
              <ToolCard key={simTool.id} tool={simTool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

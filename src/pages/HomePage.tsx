import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Zap,
  CheckCircle,
  FolderOpen,
  Filter,
  Star,
  ExternalLink,
} from 'lucide-react';
import { useTools } from '../context/ToolsContext';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { ToolCard } from '../components/ToolCard';
import { NewsletterBox } from '../components/NewsletterBox';
import { SeoMeta } from '../components/SeoMeta';
import type { PricingModel } from '../types';

export const HomePage: React.FC<{ onOpenSearch: () => void }> = ({ onOpenSearch }) => {
  const { tools, featuredTools, sponsoredTools } = useTools();
  const [activePricingFilter, setActivePricingFilter] = useState<string>('All');
  const [heroSearchInput, setHeroSearchInput] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      navigate(`/tools?q=${encodeURIComponent(heroSearchInput.trim())}`);
    } else {
      navigate('/tools');
    }
  };

  const filteredLatestTools = tools.filter((tool) => {
    if (activePricingFilter === 'All') return true;
    return tool.pricingModel === activePricingFilter;
  });

  return (
    <div className="space-y-20 pb-16">
      <SeoMeta
        title="Best Free & Freemium AI Tools Directory (2026)"
        description="Discover top curated AI tools for students, freelancers, and digital creators worldwide with India UPI pricing and tested free tiers."
        canonicalPath="/"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'AI Tools Directory & Review Hub',
          url: 'https://aitoolshub.io',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://aitoolshub.io/tools?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Target Audience Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The #1 AI Tools Hub for Students, Freelancers & Creators</span>
            <span className="hidden sm:inline text-indigo-400/50">•</span>
            <span className="hidden sm:inline text-amber-400">🇮🇳 UPI & Free Tiers Tested</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Find the <span className="gradient-text">Best Free & Freemium</span> AI Tools to Supercharge Your Work
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unbiased reviews, transparent pricing, student discounts, and side-by-side comparisons. Cut through the AI noise and pick the tools that actually save hours.
          </p>

          {/* Hero Search Box */}
          <form
            onSubmit={handleHeroSearch}
            className="pt-2 max-w-2xl mx-auto"
          >
            <div className="relative flex items-center glass-panel rounded-2xl p-2 border border-slate-700/80 shadow-2xl focus-within:border-indigo-500/80 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={heroSearchInput}
                onChange={(e) => setHeroSearchInput(e.target.value)}
                placeholder="Search by task (e.g. 'coding assistant', 'voice clone', 'paraphrase', 'free reels')..."
                className="w-full bg-transparent px-3 py-2.5 text-white placeholder-slate-400 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md shadow-indigo-500/25 shrink-0 transition-all"
              >
                Search Directory
              </button>
            </div>
          </form>

          {/* Quick Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">Popular:</span>
            <Link
              to="/category/ai-coding-tech"
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors"
            >
              💻 Coding Assistants
            </Link>
            <Link
              to="/category/ai-writing-content"
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors"
            >
              ✍️ Paraphrasing & Essays
            </Link>
            <Link
              to="/category/ai-video-image"
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-colors"
            >
              🎬 Video & Reels AI
            </Link>
            <Link
              to="/tools?pricing=Free"
              className="px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 transition-colors"
            >
              ✨ 100% Free Only
            </Link>
          </div>

          {/* Social Proof / Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto border-t border-slate-800/80">
            <div className="text-left sm:text-center">
              <div className="text-xl sm:text-2xl font-black text-white">100% Curated</div>
              <div className="text-xs text-slate-400">Tested hands-on</div>
            </div>
            <div className="text-left sm:text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">Generous Free Tiers</div>
              <div className="text-xs text-slate-400">Zero-cost options first</div>
            </div>
            <div className="text-left sm:text-center">
              <div className="text-xl sm:text-2xl font-black text-indigo-400">🇮🇳 UPI Verified</div>
              <div className="text-xs text-slate-400">Easy student payments</div>
            </div>
            <div className="text-left sm:text-center">
              <div className="text-xl sm:text-2xl font-black text-purple-400">Weekly Updates</div>
              <div className="text-xs text-slate-400">Fresh tools & discounts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured & Sponsored Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-500/20 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </span>
              <h2 className="text-2xl font-black text-white tracking-tight">
                Featured & Sponsored AI Tools
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Top hand-picked power tools with high ratings, verified track records, and generous deals.
            </p>
          </div>

          <Link
            to="/tools?featured=true"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 shrink-0"
          >
            View all featured tools &rarr;
          </Link>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Categories Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Browse AI Tools by Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Find the perfect AI workflow suited for your specific task, studies, or client project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const count = tools.filter((t) => t.categorySlug === cat.slug).length;
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                      <FolderOpen className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                      {count} Tools
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 truncate max-w-[200px]">
                    {cat.popularFor}
                  </span>
                  <span className="text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest & Trending Tools with Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              Latest & Reviewed AI Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Explore recently reviewed tools, new updates, and community favorites.
            </p>
          </div>

          {/* Pricing Model Filter Chips */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto text-xs">
            {['All', 'Free', 'Freemium', 'Paid'].map((type) => (
              <button
                key={type}
                onClick={() => setActivePricingFilter(type)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activePricingFilter === type
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLatestTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white shadow-md transition-all group"
          >
            Explore all {tools.length}+ tools with deep filters
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Best-of Articles & Guides Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Editorial Reviews & Matchups
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              Curated "Best AI Tools" Guides
            </h2>
          </div>

          <Link
            to="/blog"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 shrink-0"
          >
            Read all guides & comparisons &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-white/10">
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-bold text-white text-base group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>{article.date}</span>
                  <span className="text-indigo-400 font-semibold flex items-center gap-1">
                    {article.readTime} &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* High-Converting Newsletter Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox variant="banner" />
      </section>
    </div>
  );
};

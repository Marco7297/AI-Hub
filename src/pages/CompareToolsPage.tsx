import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftRight,
  ExternalLink,
  Check,
  X,
  Star,
  Sparkles,
  Zap,
  RotateCcw,
} from 'lucide-react';
import { useTools } from '../context/ToolsContext';
import { useCurrency } from '../context/CurrencyContext';
import { RatingStars } from '../components/RatingStars';
import { ToolBadge } from '../components/ToolBadge';
import { SeoMeta } from '../components/SeoMeta';

export const CompareToolsPage: React.FC = () => {
  const { tools } = useTools();
  const { formatPrice } = useCurrency();

  // Pre-select two premier tools by default (e.g. Cursor AI and v0 by Vercel)
  const defaultTool1 = tools.find((t) => t.slug === 'cursor-ai') || tools[0];
  const defaultTool2 = tools.find((t) => t.slug === 'v0-vercel') || tools[1] || tools[0];

  const [tool1Slug, setTool1Slug] = useState(defaultTool1.slug);
  const [tool2Slug, setTool2Slug] = useState(defaultTool2.slug);

  const tool1 = tools.find((t) => t.slug === tool1Slug) || defaultTool1;
  const tool2 = tools.find((t) => t.slug === tool2Slug) || defaultTool2;

  // Preset quick comparisons
  const presets = [
    { name: 'Cursor AI vs v0', t1: 'cursor-ai', t2: 'v0-vercel' },
    { name: 'Claude 3.5 vs Perplexity', t1: 'claude-ai', t2: 'perplexity-ai' },
    { name: 'Canva vs Midjourney', t1: 'canva-magic-studio', t2: 'midjourney-v6' },
    { name: 'QuillBot vs Notion AI', t1: 'quillbot', t2: 'notion-ai' },
    { name: 'ElevenLabs vs Descript', t1: 'elevenlabs', t2: 'descript' },
  ];

  const handleSwap = () => {
    setTool1Slug(tool2Slug);
    setTool2Slug(tool1Slug);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoMeta
        title={`Compare ${tool1.name} vs ${tool2.name} | Side-by-Side AI Tool Comparison`}
        description={`Direct side-by-side comparison of ${tool1.name} vs ${tool2.name}. Compare pricing, free plans, best use cases, pros, cons, and ratings.`}
        canonicalPath="/compare"
      />

      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <ArrowLeftRight className="w-3.5 h-3.5 text-indigo-400" />
          Head-to-Head Evaluation
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Compare AI Tools Side-by-Side
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Select any two AI applications to evaluate their pricing, free plan limits, pros, cons, and customer ratings before making a choice.
        </p>
      </div>

      {/* Quick Comparison Preset Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
        <span className="text-slate-400 font-medium">Popular Matchups:</span>
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => {
              setTool1Slug(preset.t1);
              setTool2Slug(preset.t2);
            }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              tool1Slug === preset.t1 && tool2Slug === preset.t2
                ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Tool Selector Controls Bar */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Tool 1 Selector */}
          <div className="md:col-span-5 space-y-1.5">
            <label className="block text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Tool #1
            </label>
            <select
              value={tool1Slug}
              onChange={(e) => setTool1Slug(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {tools.map((t) => (
                <option key={t.id} value={t.slug} disabled={t.slug === tool2Slug}>
                  {t.name} ({t.category})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="md:col-span-1 flex justify-center">
            <button
              onClick={handleSwap}
              title="Swap tools"
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all cursor-pointer shadow-md"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tool 2 Selector */}
          <div className="md:col-span-5 space-y-1.5">
            <label className="block text-xs font-bold text-purple-400 uppercase tracking-wider">
              Tool #2
            </label>
            <select
              value={tool2Slug}
              onChange={(e) => setTool2Slug(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              {tools.map((t) => (
                <option key={t.id} value={t.slug} disabled={t.slug === tool1Slug}>
                  {t.name} ({t.category})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table Layout */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="py-5 px-6 w-1/4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Specification
                </th>
                {/* Column 1 Header */}
                <th className="py-5 px-6 w-[37.5%] align-top border-l border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <img
                      src={tool1.logo}
                      alt={tool1.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-indigo-500/30 shadow-md shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-black text-white">{tool1.name}</h2>
                        {tool1.featured && <ToolBadge type="featured" />}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{tool1.tagline}</p>
                      <span className="text-[11px] font-semibold text-indigo-400 block">
                        {tool1.category}
                      </span>
                    </div>
                  </div>
                </th>

                {/* Column 2 Header */}
                <th className="py-5 px-6 w-[37.5%] align-top border-l border-slate-800/80">
                  <div className="flex items-start gap-4">
                    <img
                      src={tool2.logo}
                      alt={tool2.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-purple-500/30 shadow-md shrink-0"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-black text-white">{tool2.name}</h2>
                        {tool2.featured && <ToolBadge type="featured" />}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{tool2.tagline}</p>
                      <span className="text-[11px] font-semibold text-purple-400 block">
                        {tool2.category}
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/80 text-sm">
              {/* 1. Rating */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400">Rating</td>
                <td className="py-4 px-6 border-l border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={tool1.rating} reviewCount={tool1.reviewCount} size="md" />
                    <span className="text-xs font-semibold text-amber-400">
                      ★ {tool1.rating.toFixed(1)} / 5.0
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <RatingStars rating={tool2.rating} reviewCount={tool2.reviewCount} size="md" />
                    <span className="text-xs font-semibold text-amber-400">
                      ★ {tool2.rating.toFixed(1)} / 5.0
                    </span>
                  </div>
                </td>
              </tr>

              {/* 2. Pricing */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400">Pricing</td>
                <td className="py-4 px-6 border-l border-slate-800/80 space-y-1">
                  <div className="text-base font-bold text-emerald-400">
                    {formatPrice(tool1.startingPrice, tool1.inrPrice)}
                  </div>
                  <ToolBadge type="pricing" pricingModel={tool1.pricingModel} />
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80 space-y-1">
                  <div className="text-base font-bold text-emerald-400">
                    {formatPrice(tool2.startingPrice, tool2.inrPrice)}
                  </div>
                  <ToolBadge type="pricing" pricingModel={tool2.pricingModel} />
                </td>
              </tr>

              {/* 3. Free Plan */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400">Free Plan</td>
                <td className="py-4 px-6 border-l border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  {tool1.freeTierDetails}
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  {tool2.freeTierDetails}
                </td>
              </tr>

              {/* 4. Best For */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400">Best For</td>
                <td className="py-4 px-6 border-l border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {tool1.targetAudience.map((audience, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-medium"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {tool2.targetAudience.map((audience, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>

              {/* 5. Pros */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400 align-top">Pros</td>
                <td className="py-4 px-6 border-l border-slate-800/80 align-top">
                  <ul className="space-y-2 text-xs text-slate-300">
                    {tool1.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80 align-top">
                  <ul className="space-y-2 text-xs text-slate-300">
                    {tool2.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* 6. Cons */}
              <tr className="hover:bg-slate-900/30 transition-colors">
                <td className="py-4 px-6 text-xs font-bold text-slate-400 align-top">Cons</td>
                <td className="py-4 px-6 border-l border-slate-800/80 align-top">
                  <ul className="space-y-2 text-xs text-slate-400">
                    {tool1.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-6 border-l border-slate-800/80 align-top">
                  <ul className="space-y-2 text-xs text-slate-400">
                    {tool2.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>

              {/* 7. "Visit Site" CTA Button under each column */}
              <tr className="bg-slate-950/90">
                <td className="py-5 px-6 text-xs font-bold text-slate-400">Official Link</td>
                {/* Tool 1 Visit Button */}
                <td className="py-5 px-6 border-l border-slate-800/80">
                  <div className="space-y-2">
                    <a
                      href={tool1.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      Visit {tool1.name} Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to={`/tool/${tool1.slug}`}
                      className="block text-center text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      Read our in-depth review &rarr;
                    </Link>
                  </div>
                </td>

                {/* Tool 2 Visit Button */}
                <td className="py-5 px-6 border-l border-slate-800/80">
                  <div className="space-y-2">
                    <a
                      href={tool2.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      Visit {tool2.name} Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to={`/tool/${tool2.slug}`}
                      className="block text-center text-xs text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Read our in-depth review &rarr;
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

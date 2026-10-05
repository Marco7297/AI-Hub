import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FolderOpen, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { categories } from '../data/categories';
import { useTools } from '../context/ToolsContext';
import { ToolCard } from '../components/ToolCard';
import { SeoMeta } from '../components/SeoMeta';
import { articles } from '../data/articles';

export const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tools } = useTools();
  const [pricingFilter, setPricingFilter] = useState('All');

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Category Not Found</h1>
        <p className="text-slate-400 text-sm">The category you are looking for does not exist.</p>
        <Link
          to="/tools"
          className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
        >
          Browse All Tools
        </Link>
      </div>
    );
  }

  // Filter tools belonging to this category
  const categoryTools = tools.filter(
    (t) =>
      t.categorySlug === category.slug &&
      (pricingFilter === 'All' || t.pricingModel === pricingFilter)
  );

  // Relevant articles
  const relatedArticles = articles.filter(
    (a) => a.category.toLowerCase().includes(category.name.toLowerCase().split(' ')[0])
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoMeta
        title={`Best ${category.name} AI Tools (${new Date().getFullYear()})`}
        description={category.description}
        canonicalPath={`/category/${category.slug}`}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/tools" className="hover:text-white transition-colors">
          Categories
        </Link>
        <span>/</span>
        <span className="text-slate-200 font-medium">{category.name}</span>
      </nav>

      {/* Category Hero Banner */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {category.name}
                </h1>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  {categoryTools.length} {categoryTools.length === 1 ? 'Tool' : 'Tools'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {category.description}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs text-slate-500 font-medium block">Popular For:</span>
            <span className="text-xs font-semibold text-indigo-300">
              {category.popularFor}
            </span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Pricing:</span>
            {['All', 'Free', 'Freemium', 'Paid'].map((model) => (
              <button
                key={model}
                onClick={() => setPricingFilter(model)}
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  pricingFilter === model
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {model}
              </button>
            ))}
          </div>

          <Link
            to="/tools"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            All Categories &rarr;
          </Link>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Hand-Tested {category.name} Tools
        </h2>

        {categoryTools.length === 0 ? (
          <div className="py-16 text-center glass-panel rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-300 font-semibold text-sm">
              No tools match the selected pricing filter in this category.
            </p>
            <button
              onClick={() => setPricingFilter('All')}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </div>

      {/* Related Best-of Guides */}
      {relatedArticles.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-slate-800">
          <h2 className="text-lg font-bold text-white">Recommended Guides in this Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map((art) => (
              <Link
                key={art.id}
                to={`/blog/${art.slug}`}
                className="glass-card p-4 rounded-xl border border-slate-800 hover:border-indigo-500/40 flex items-center gap-4 group"
              >
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="w-20 h-16 rounded-lg object-cover ring-1 ring-white/10 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">{art.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

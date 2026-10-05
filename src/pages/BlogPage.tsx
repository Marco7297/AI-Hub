import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { articles } from '../data/articles';
import { SeoMeta } from '../components/SeoMeta';
import { NewsletterBox } from '../components/NewsletterBox';

export const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredArticles = selectedTag === 'All'
    ? articles
    : articles.filter((a) => a.category.includes(selectedTag));

  const leadArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SeoMeta
        title="Best AI Tools Guides, Comparisons & Reviews (2026)"
        description="Comprehensive guides comparing the best free and freemium AI tools for college students, freelancers, and content creators."
        canonicalPath="/blog"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <BookOpen className="w-3.5 h-3.5" />
          Editorial Hub & Tool Comparisons
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          "Best Of" AI Tool Matchups & Guides
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Deep, hands-on tests of the latest artificial intelligence software. We compare pricing, examine free tiers, test Indian payment methods, and reveal which tool delivers maximum output.
        </p>
      </div>

      {/* Hero Featured Article */}
      {leadArticle && (
        <Link
          to={`/blog/${leadArticle.slug}`}
          className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 group block"
        >
          <div className="lg:col-span-7 relative aspect-video lg:aspect-auto">
            <img
              src={leadArticle.coverImage}
              alt={leadArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
              ⭐ Editor's Pick
            </span>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                {leadArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors leading-tight">
                {leadArticle.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <img
                  src={leadArticle.author.avatar}
                  alt={leadArticle.author.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span>{leadArticle.author.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>{leadArticle.date}</span>
                <span>•</span>
                <span className="text-indigo-400 font-semibold">{leadArticle.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Other Guides Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white tracking-tight">
          All Comparison Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col group"
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

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
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
      </div>

      {/* Newsletter */}
      <NewsletterBox variant="banner" />
    </div>
  );
};

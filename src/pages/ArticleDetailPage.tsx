import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ExternalLink, ArrowRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { articles } from '../data/articles';
import { useTools } from '../context/ToolsContext';
import { useCurrency } from '../context/CurrencyContext';
import { ToolBadge } from '../components/ToolBadge';
import { RatingStars } from '../components/RatingStars';
import { SeoMeta } from '../components/SeoMeta';
import { NewsletterBox } from '../components/NewsletterBox';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tools } = useTools();
  const { formatPrice } = useCurrency();

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Guide Not Found</h1>
        <p className="text-slate-400 text-sm">The article you are looking for does not exist.</p>
        <Link
          to="/blog"
          className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold"
        >
          View All Guides
        </Link>
      </div>
    );
  }

  // Fetch tools featured in this article
  const featuredTools = tools.filter((t) => article.featuredToolSlugs.includes(t.slug));

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: '2026-10-01',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Tools Directory & Review Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aitoolshub.io/logo.png',
      },
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoMeta
        title={article.title}
        description={article.excerpt}
        canonicalPath={`/blog/${article.slug}`}
        type="article"
        schemaData={schemaData}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-white transition-colors">
          Guides & Matchups
        </Link>
        <span>/</span>
        <span className="text-slate-200 truncate">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase tracking-wider inline-block">
          {article.category}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/30"
            />
            <div>
              <span className="font-bold text-white block">{article.author.name}</span>
              <span className="text-slate-500">{article.author.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="rounded-3xl overflow-hidden aspect-video border border-slate-800 shadow-2xl">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Affiliate Disclosure callout */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
        <span>
          <strong>Reader Note:</strong> Some of the links below are affiliate links. If you purchase through them, we may receive a commission at no extra cost to you. We only recommend tools we have tested personally.
        </span>
      </div>

      {/* Key Takeaways Box */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/20 to-slate-900 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          ⚡ Quick Key Takeaways
        </h2>
        <ul className="space-y-2.5 text-sm text-slate-300">
          {article.keyTakeaways.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Tools Review Callouts */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white tracking-tight border-b border-slate-800 pb-3">
          Top Recommended Tools Evaluated
        </h2>

        <div className="space-y-6">
          {featuredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-indigo-500/40 space-y-5 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-indigo-600/30 text-indigo-300 text-xs font-bold flex items-center justify-center border border-indigo-500/40 shrink-0">
                    #{index + 1}
                  </span>
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/tool/${tool.slug}`}
                        className="text-lg font-bold text-white hover:text-indigo-400 transition-colors"
                      >
                        {tool.name}
                      </Link>
                      <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
                      {tool.featured && <ToolBadge type="featured" />}
                    </div>
                    <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} />
                  </div>
                </div>

                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white flex items-center justify-center gap-1.5 transition-all shrink-0"
                >
                  Try {tool.name} Free
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {tool.description}
              </p>

              {/* Pricing & Free Tier Highlights */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Starting Pricing:</span>
                  <span className="text-emerald-400 font-semibold">
                    {formatPrice(tool.startingPrice, tool.inrPrice)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Payment & UPI:</span>
                  <span className="text-slate-200">{tool.indiaPaymentSupport}</span>
                </div>
              </div>

              {/* Pros snippet */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Why it made the cut:
                </span>
                {tool.pros.slice(0, 3).map((pro, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>{pro}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-end">
                <Link
                  to={`/tool/${tool.slug}`}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                >
                  Read our full dedicated review for {tool.name} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Side-by-Side Comparison Matrix
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                <th className="py-3.5 px-4 font-semibold">AI Tool</th>
                <th className="py-3.5 px-4 font-semibold">Model</th>
                <th className="py-3.5 px-4 font-semibold">Rating</th>
                <th className="py-3.5 px-4 font-semibold">Price (USD / INR)</th>
                <th className="py-3.5 px-4 font-semibold">UPI Support</th>
                <th className="py-3.5 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 bg-slate-950/40">
              {featuredTools.map((tool) => (
                <tr key={tool.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                    <img src={tool.logo} alt="" className="w-6 h-6 rounded object-cover" />
                    <span>{tool.name}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-amber-400">
                    ★ {tool.rating.toFixed(1)}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-emerald-400">
                    {formatPrice(tool.startingPrice, tool.inrPrice)}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    {tool.indiaPaymentSupport.includes('UPI') ? '✅ Yes' : '💳 Card'}
                  </td>
                  <td className="py-3.5 px-4">
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBox variant="banner" />
    </article>
  );
};

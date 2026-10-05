import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, Clock, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { articles } from '../data/articles';
import { SeoMeta } from '../components/SeoMeta';
import { NewsletterBox } from '../components/NewsletterBox';

export interface GuideCard {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  coverImage: string;
  badge?: string;
  highlights: string[];
}

export const guidesData: GuideCard[] = [
  {
    id: 'guide-1',
    title: 'Best Free AI Tools for Students (2026 Ultimate Guide)',
    slug: 'best-free-ai-tools-indian-students-freelancers',
    excerpt: 'A tested breakdown of the highest-rated 100% free and freemium AI tools for thesis research, essay paraphrasing, lecture summarization, and exam preparation with zero upfront cost.',
    readTime: '6 min read',
    date: 'October 3, 2026',
    category: 'Student Hub',
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    badge: 'STUDENT FAVORITE',
    highlights: [
      'Perplexity AI for cited academic sources and footnotes',
      'QuillBot for academic paraphrasing and citation generation',
      'Notion AI student tier for connected lecture notes',
    ],
  },
  {
    id: 'guide-2',
    title: 'Best AI Tools for Freelancers & Solo Digital Creators',
    slug: 'best-ai-tools-for-freelancers',
    excerpt: 'High-ROI AI workflows to deliver client work twice as fast. Discover client proposal generators, automated video editors, contract scanners, and regional invoicing automations.',
    readTime: '7 min read',
    date: 'October 2, 2026',
    category: 'Freelancer Playbook',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    badge: 'HIGH ROI',
    highlights: [
      'Make.com for automated lead capture & email follow-ups',
      'Descript for one-click podcast & client video editing',
      'Claude 3.5 Sonnet for persuasive client proposals',
    ],
  },
  {
    id: 'guide-3',
    title: 'Best AI Writing Tools for Content, SEO & Copywriting',
    slug: 'best-ai-writing-tools',
    excerpt: 'Compare the leading generative writing assistants. Benchmarked for natural tone of voice, factual accuracy, SEO keyword integration, and human-like flow without robotic clichés.',
    readTime: '8 min read',
    date: 'September 29, 2026',
    category: 'Writing & Copy',
    coverImage: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800&auto=format&fit=crop&q=80',
    badge: 'EDITORIAL BENCHMARK',
    highlights: [
      'Claude 3.5 Sonnet Artifacts for nuanced essays & storytelling',
      'QuillBot for fast tone adjustments and vocabulary freeze',
      'Copy.ai for bulk social media hooks and email cadences',
    ],
  },
  {
    id: 'guide-4',
    title: 'Cursor AI vs GitHub Copilot vs v0: The Ultimate Coding Showdown',
    slug: 'cursor-vs-copilot-vs-v0-showdown',
    excerpt: 'We benchmarked the three biggest AI development tools across 5 real-world production codebases. Here is which tool actually speeds up your workflow and delivers the highest engineering ROI.',
    readTime: '9 min read',
    date: 'September 28, 2026',
    category: 'Developer Comparisons',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    badge: 'TECH MATCHUP',
    highlights: [
      'Cursor AI wins for full repository indexing and multi-file edits',
      'v0 by Vercel dominates for rapid Tailwind + React component generation',
      'Detailed comparison of subscription pricing vs time saved',
    ],
  },
  {
    id: 'guide-5',
    title: 'Best AI Video & Reels Generators to Scale Faceless Channels',
    slug: 'best-ai-tools-for-youtube-creators-reels',
    excerpt: 'Step-by-step tech stack for solo creators producing high-retention shorts, voiceovers, automated video editing, and viral thumbnails on a bootstrapped budget.',
    readTime: '7 min read',
    date: 'September 22, 2026',
    category: 'Creator Playbook',
    coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    badge: 'CREATOR GUIDE',
    highlights: [
      'ElevenLabs for emotional voice cloning and Hindi/multilingual dubbing',
      'Canva Magic Studio for automated Reels reformatting and banners',
      'Suno AI for royalty-free background soundtracks in seconds',
    ],
  },
];

export const BestAiToolsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <SeoMeta
        title="Best AI Tools (2026 Guides Hub) | Curated Comparisons & Matchups"
        description="Comprehensive curated guides on the Best AI Tools for students, freelancers, copywriters, and developers. Tested hands-on with transparent benchmarks."
        canonicalPath="/best-ai-tools"
      />

      {/* Intro Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          Editorial Guides & Comparisons Hub
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Best AI Tools: In-Depth Curated Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Welcome to the <strong>AiHunt Editorial Hub</strong>. We test hundreds of generative AI software products to compile definitive "Best Of" roundups tailored for specific roles. Whether you are a college student looking for generous free tiers, a freelancer needing client-ready output, or a creator building faceless media channels, our guides give you clear, honest verdicts without marketing hype.
        </p>

        {/* Editorial Standards Pill Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Tested Hands-On
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            Free Tiers Audited
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Independent & Unbiased
          </span>
        </div>
      </div>

      {/* Featured Lead Guide */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 group">
        <div className="lg:col-span-7 relative aspect-video lg:aspect-auto overflow-hidden">
          <img
            src={guidesData[0].coverImage}
            alt={guidesData[0].title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
            ⭐ {guidesData[0].badge}
          </span>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              {guidesData[0].category}
            </span>
            <Link to={`/blog/${guidesData[0].slug}`}>
              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-400 transition-colors leading-tight">
                {guidesData[0].title}
              </h2>
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {guidesData[0].excerpt}
            </p>

            {/* Quick bullets */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
              {guidesData[0].highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span>{guidesData[0].date}</span>
              <span>•</span>
              <span className="text-indigo-400 font-semibold">{guidesData[0].readTime}</span>
            </div>
            <Link
              to={`/blog/${guidesData[0].slug}`}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              Read Full Guide &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white tracking-tight">
          Role-Based & Comparative AI Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guidesData.slice(1).map((guide) => (
            <div
              key={guide.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={guide.coverImage}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {guide.badge && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-indigo-300 border border-white/10 uppercase tracking-wider">
                      {guide.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <Link to={`/blog/${guide.slug}`}>
                    <h3 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
                      {guide.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {guide.excerpt}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {guide.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{guide.date}</span>
                </div>

                <Link
                  to={`/blog/${guide.slug}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-500/30 transition-all flex items-center gap-1.5"
                >
                  Read Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox variant="banner" />
    </div>
  );
};

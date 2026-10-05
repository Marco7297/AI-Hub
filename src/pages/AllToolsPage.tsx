import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Star, RotateCcw, Filter, Sparkles } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export interface PlaceholderTool {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  category: string;
  pricingModel: 'Free' | 'Freemium' | 'Paid';
  startingPrice: string;
  rating: number;
  logo: string;
  affiliateUrl: string;
  featured?: boolean;
}

// Exactly 9 curated placeholder tool cards ready for CMS connection
export const initialPlaceholderTools: PlaceholderTool[] = [
  {
    id: 'placeholder-1',
    name: 'Cursor AI',
    slug: 'cursor-ai',
    tagline: 'AI-first code editor with deep repository indexing and Claude 3.5 Sonnet support.',
    category: 'Coding & Tech',
    pricingModel: 'Freemium',
    startingPrice: '$0 / Pro $20/mo',
    rating: 4.9,
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://www.cursor.com/?via=reviewhub',
    featured: true,
  },
  {
    id: 'placeholder-2',
    name: 'Perplexity AI',
    slug: 'perplexity-ai',
    tagline: 'Conversational search engine delivering cited, real-time answers with academic sources.',
    category: 'Productivity & Research',
    pricingModel: 'Freemium',
    startingPrice: '$0 / Pro $20/mo',
    rating: 4.8,
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://www.perplexity.ai/pro?referral_code=AITOOLSHUB',
    featured: true,
  },
  {
    id: 'placeholder-3',
    name: 'QuillBot',
    slug: 'quillbot',
    tagline: 'Industry-standard paraphraser, grammar corrector, and citation generator with UPI.',
    category: 'Writing & Content',
    pricingModel: 'Freemium',
    startingPrice: '$0 / ₹349/mo',
    rating: 4.7,
    logo: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://quillbot.com/?partner=reviewhub',
    featured: true,
  },
  {
    id: 'placeholder-4',
    name: 'v0 by Vercel',
    slug: 'v0-vercel',
    tagline: 'Generative AI platform converting natural prompts into clean React + Tailwind UI.',
    category: 'Coding & Tech',
    pricingModel: 'Freemium',
    startingPrice: '$0 / $20/mo',
    rating: 4.8,
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://v0.dev/?utm_campaign=reviewhub_featured',
    featured: false,
  },
  {
    id: 'placeholder-5',
    name: 'Canva Magic Studio',
    slug: 'canva-magic-studio',
    tagline: 'All-in-one AI visual design suite for presentations, Reels, and marketing assets.',
    category: 'Video & Image',
    pricingModel: 'Freemium',
    startingPrice: '$0 / ₹399/mo',
    rating: 4.9,
    logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://partner.canva.com/c/reviewhub/magic-studio',
    featured: true,
  },
  {
    id: 'placeholder-6',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Hyper-realistic AI voice cloning, multilingual dubbing, and emotional text-to-speech.',
    category: 'Audio & Voice',
    pricingModel: 'Freemium',
    startingPrice: '$0 / $5/mo',
    rating: 4.8,
    logo: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://elevenlabs.io/?from=partner_reviewhub',
    featured: true,
  },
  {
    id: 'placeholder-7',
    name: 'Midjourney v6',
    slug: 'midjourney-v6',
    tagline: 'Cinematic, ultra-photorealistic generative art and commercial asset generator.',
    category: 'Video & Image',
    pricingModel: 'Paid',
    startingPrice: '$10/mo',
    rating: 4.9,
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://www.midjourney.com/?ref=reviewhub_guide',
    featured: true,
  },
  {
    id: 'placeholder-8',
    name: 'Descript',
    slug: 'descript',
    tagline: 'Edit audio and video podcasts as simply as editing text in a Google Doc.',
    category: 'Video & Image',
    pricingModel: 'Freemium',
    startingPrice: '$0 / $12/mo',
    rating: 4.7,
    logo: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://get.descript.com/reviewhub_exclusive',
    featured: false,
  },
  {
    id: 'placeholder-9',
    name: 'Claude 3.5 Sonnet',
    slug: 'claude-ai',
    tagline: 'Anthropic\'s top model for coding, nuanced essay writing, and live interactive Artifacts.',
    category: 'Writing & Content',
    pricingModel: 'Free',
    startingPrice: '100% Free Tier',
    rating: 4.9,
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    affiliateUrl: 'https://claude.ai/?via=reviewhub_featured',
    featured: true,
  },
];

export const AllToolsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPricing, setSelectedPricing] = useState<string>('All');
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const categories = [
    'All',
    'Writing & Content',
    'Coding & Tech',
    'Video & Image',
    'Productivity & Research',
    'Audio & Voice',
  ];

  const pricingModels: ('All' | 'Free' | 'Freemium' | 'Paid')[] = [
    'All',
    'Free',
    'Freemium',
    'Paid',
  ];

  const ratings = [
    { label: 'All Ratings', value: 0 },
    { label: '⭐ 4.8+', value: 4.8 },
    { label: '⭐ 4.5+', value: 4.5 },
  ];

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPricing('All');
    setSelectedRating(0);
  };

  const filteredTools = useMemo(() => {
    return initialPlaceholderTools.filter((tool) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = tool.name.toLowerCase().includes(q);
        const matchTagline = tool.tagline.toLowerCase().includes(q);
        const matchCategory = tool.category.toLowerCase().includes(q);
        if (!matchName && !matchTagline && !matchCategory) return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && tool.category !== selectedCategory) {
        return false;
      }

      // Pricing filter
      if (selectedPricing !== 'All' && tool.pricingModel !== selectedPricing) {
        return false;
      }

      // Rating filter
      if (selectedRating > 0 && tool.rating < selectedRating) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedPricing, selectedRating]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SeoMeta
        title="All AI Tools Directory | Search & Filter AI Software"
        description="Browse our curated directory of AI tools. Filter by category, free vs paid pricing, and rating. Discover software for students, freelancers, and creators."
        canonicalPath="/tools"
      />

      {/* Page Title & Intro */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Curated Directory • 9 Featured Tools
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          All AI Tools Directory
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Search and discover the best AI software vetted by our editorial team. Filter by category, pricing model, and ratings to find the right tool for your workflow.
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-5">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search AI tools by name, task, or keyword (e.g., 'coding', 'voice', 'research')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
          />
        </div>

        {/* Filter Buttons Sections */}
        <div className="space-y-4 pt-2 border-t border-slate-800/80">
          {/* Category Filter Buttons */}
          <div className="space-y-2">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
              Category
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Model & Rating Filter Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-800/60">
            {/* Pricing Model Filter Buttons */}
            <div className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pricing Model
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {pricingModels.map((pricing) => (
                  <button
                    key={pricing}
                    onClick={() => setSelectedPricing(pricing)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      selectedPricing === pricing
                        ? 'bg-purple-600 text-white font-semibold'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {pricing === 'All' ? 'All Models' : pricing}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating Filter Buttons */}
            <div className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                Rating
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {ratings.map((rate) => (
                  <button
                    key={rate.label}
                    onClick={() => setSelectedRating(rate.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      selectedRating === rate.value
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {rate.label}
                  </button>
                ))}

                {(searchQuery || selectedCategory !== 'All' || selectedPricing !== 'All' || selectedRating > 0) && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 transition-colors ml-2 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>
          Showing <strong className="text-white">{filteredTools.length}</strong> of{' '}
          {initialPlaceholderTools.length} curated tool cards
        </span>
        <span className="text-indigo-400 font-medium">
          Ready for CMS Collection Binding
        </span>
      </div>

      {/* Grid of 9 Placeholder Tool Cards */}
      {filteredTools.length === 0 ? (
        <div className="py-20 text-center glass-panel rounded-2xl border border-slate-800 space-y-4">
          <p className="text-base text-slate-300 font-semibold">No AI tools matched your filters</p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or clearing the category and pricing filters.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/40 flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Card Top: Badges & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    {/* Pricing Badge: Free / Freemium / Paid */}
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                        tool.pricingModel === 'Free'
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                          : tool.pricingModel === 'Freemium'
                          ? 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                          : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {tool.pricingModel}
                    </span>
                    {tool.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{tool.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Logo & Name */}
                <div className="flex items-start gap-3.5 mb-3">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10 shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-indigo-400/90 font-medium block truncate">
                      {tool.category}
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {tool.tagline}
                </p>
              </div>

              {/* Card Footer: Starting Price & "Visit Site" Button */}
              <div className="pt-3 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Starting Price:</span>
                  <span className="font-semibold text-emerald-400">
                    {tool.startingPrice}
                  </span>
                </div>

                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md shadow-indigo-500/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  Visit Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

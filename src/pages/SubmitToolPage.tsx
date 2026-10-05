import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Upload,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  HelpCircle,
  Image as ImageIcon,
} from 'lucide-react';
import { categories } from '../data/categories';
import { useTools } from '../context/ToolsContext';
import { SeoMeta } from '../components/SeoMeta';
import type { PricingModel } from '../types';

export const SubmitToolPage: React.FC = () => {
  const { addToolSubmission } = useTools();

  const [toolName, setToolName] = useState('');
  const [website, setWebsite] = useState('');
  const [category, setCategory] = useState(categories[0].name);
  const [pricingModel, setPricingModel] = useState<PricingModel>('Freemium');
  const [shortDescription, setShortDescription] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [contactEmail, setContactEmail] = useState('');
  const [listingType, setListingType] = useState<'standard' | 'fast-track' | 'sponsored'>('standard');
  const [submittedSlug, setSubmittedSlug] = useState<string | null>(null);

  // Logo file handling
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!toolName || !website || !shortDescription || !contactEmail) {
      alert('Please fill out all required fields.');
      return;
    }

    const createdTool = addToolSubmission({
      name: toolName,
      tagline: shortDescription.slice(0, 100),
      description: shortDescription,
      websiteUrl: website,
      affiliateUrl: website,
      pricingModel: pricingModel,
      startingPrice: pricingModel === 'Free' ? '$0/mo' : '$10/mo',
      category: category,
      pros: 'Modern responsive interface\nInstant AI generation\nActive product updates',
      cons: 'Advanced analytics requires pro plan',
      contactEmail: contactEmail,
      plan: listingType === 'standard' ? 'free' : listingType,
    });

    setSubmittedSlug(createdTool.slug);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoMeta
        title="Submit Your AI Tool | Directory Listing & Review Submission"
        description="Submit your software to AiHunt Hub. Reach thousands of students, freelancers, and early tech adopters with free and sponsored listing options."
        canonicalPath="/submit"
      />

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Rocket className="w-3.5 h-3.5 text-indigo-400" />
          Founder & Product Listing Portal
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Submit Your AI Tool
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          List your product in the <strong>AiHunt Hub Directory</strong>. Connect directly with students, freelance creators, and agency builders looking for generative AI tools.
        </p>
      </div>

      {submittedSlug ? (
        /* Confirmation Card */
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-emerald-500/40 bg-emerald-950/20 text-center space-y-6 max-w-xl mx-auto animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Tool Submitted Successfully!</h2>
            <p className="text-sm text-slate-300">
              <strong>{toolName}</strong> has been received and indexed into our directory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-left space-y-1 text-slate-300">
            <div>• <strong>Category:</strong> {category}</div>
            <div>• <strong>Pricing:</strong> {pricingModel}</div>
            <div>• <strong>Listing Tier:</strong> {listingType.toUpperCase()}</div>
            <div>• <strong>Contact:</strong> {contactEmail}</div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link
              to={`/tool/${submittedSlug}`}
              className="px-6 py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              View Live Tool Page &rarr;
            </Link>
            <button
              onClick={() => {
                setSubmittedSlug(null);
                setToolName('');
                setWebsite('');
                setShortDescription('');
                setContactEmail('');
                setLogoPreview('');
              }}
              className="px-5 py-3 rounded-xl text-xs font-semibold border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
            >
              Submit Another
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Note About Featured & Sponsored Listings */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-slate-900 to-purple-950/20 space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Note About Featured & Sponsored Listings</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We offer both <strong>Free Community Listings</strong> and <strong>Premium Promotion Packages</strong> to help makers gain instant traction:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div
                onClick={() => setListingType('standard')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  listingType === 'standard'
                    ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Free Listing</span>
                  <span className="text-xs text-slate-400">$0</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Queued for standard review (7–14 business days).
                </p>
              </div>

              <div
                onClick={() => setListingType('fast-track')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  listingType === 'fast-track'
                    ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-300">Fast-Track</span>
                  <span className="text-xs text-emerald-400 font-semibold">$49 / ₹3,999</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Reviewed & published in &lt;24 hours with DoFollow link.
                </p>
              </div>

              <div
                onClick={() => setListingType('sponsored')}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  listingType === 'sponsored'
                    ? 'bg-slate-900 border-purple-500 ring-2 ring-purple-500/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-300">Sponsored Spotlight</span>
                  <span className="text-xs text-purple-400 font-semibold">$149 / ₹11,999</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Sticky homepage feature for 30 days + newsletter blast.
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              * Note: Sponsored tools are clearly tagged with our purple "Sponsored" badge to uphold full transparency for readers.
            </p>
          </div>

          {/* Submission Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6"
          >
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
              Tool Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Tool Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tool Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. PromptCraft Studio"
                  value={toolName}
                  onChange={(e) => setToolName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Website URL */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Website URL <span className="text-rose-400">*</span>
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://yourtool.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Category <span className="text-rose-400">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing Model */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Pricing Model <span className="text-rose-400">*</span>
                </label>
                <select
                  value={pricingModel}
                  onChange={(e) => setPricingModel(e.target.value as PricingModel)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="Free">Free (100% Free to use)</option>
                  <option value="Freemium">Freemium (Free tier available)</option>
                  <option value="Paid">Paid Only (Free trial or paid subscriptions)</option>
                </select>
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Short Description & Superpower <span className="text-rose-400">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe what your tool does, key use cases, and how it helps students, freelancers, or creators..."
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">Recommended: 1–3 concise sentences.</p>
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Logo Upload
              </label>
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60">
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-14 h-14 rounded-xl object-cover ring-1 ring-white/10"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center text-slate-500">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                )}
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Choose PNG/SVG file</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Square PNG, JPG, or SVG (minimum 120x120px recommended).
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Contact Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="founder@yourcompany.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                We will email you with your listing confirmation and status updates.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Submit Tool to Directory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

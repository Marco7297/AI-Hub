import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Heart } from 'lucide-react';
import { categories } from '../data/categories';
import { NewsletterBox } from './NewsletterBox';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm mt-20">
      {/* Footer Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 border-b border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Stay ahead of the AI revolution
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Get the Free Weekly AI Stack & Prompt Pack
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg">
              Every Friday, we send the top 5 hand-tested free AI tools, student/freelance discounts, and high-ROI workflows. Zero spam.
            </p>
          </div>
          <div className="lg:col-span-6">
            <NewsletterBox variant="minimal" />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">
                Ai<span className="gradient-text">Hunt</span> Hub
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The premier AI Tools Directory & Review Hub for students, freelancers, and digital creators worldwide. Hand-tested reviews, generous free tiers, and verified regional payment compatibility.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                🇮🇳 Strong India & Global Freelance Focus
              </span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/category/${c.slug}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial Hub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Directory & Guides</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/tools" className="hover:text-indigo-400 transition-colors">
                  All AI Tools Directory
                </Link>
              </li>
              <li>
                <Link to="/best-ai-tools" className="hover:text-indigo-400 transition-colors">
                  Best AI Tools Guides
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-indigo-400 transition-colors">
                  Compare Tools Side-by-Side
                </Link>
              </li>
              <li>
                <Link to="/submit" className="hover:text-indigo-400 transition-colors font-semibold text-indigo-400">
                  Submit Your Tool (+ Fast Track)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal & Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                  About Our Team & Review Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact & Sponsorships
                </Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="hover:text-indigo-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Notice Box */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] leading-relaxed text-slate-400 flex items-start gap-3">
          <Shield className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Affiliate & Editorial Disclosure:</strong> AiHunt Hub is an independent software review publication. When you purchase tools through our curated referral links, we may earn an affiliate commission at no extra cost to you. This supports our lab testing and maintains our 100% free directory access. All reviews reflect rigorous independent evaluation. Read our full{' '}
            <Link to="/affiliate-disclosure" className="text-indigo-400 underline hover:text-indigo-300">
              Affiliate Disclosure
            </Link>
            .
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AiHunt Hub. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/affiliate-disclosure" className="hover:text-slate-400">Affiliate Disclosure</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-slate-400">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-400">Terms of Use</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-400">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

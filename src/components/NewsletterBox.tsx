import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface NewsletterBoxProps {
  variant?: 'banner' | 'card' | 'minimal';
  className?: string;
}

export const NewsletterBox: React.FC<NewsletterBoxProps> = ({ variant = 'banner', className = '' }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Freelancer / Creator');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      const existing = JSON.parse(localStorage.getItem('aihub_subscribers') || '[]');
      existing.push({ email, role, date: new Date().toISOString() });
      localStorage.setItem('aihub_subscribers', JSON.stringify(existing));
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`glass-card p-6 md:p-8 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 text-center ${className}`}>
        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">You're on the VIP AI List! 🚀</h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          We’ve dispatched the <strong>"2026 Student & Freelancer AI Arsenal"</strong> (50+ curated free prompts and tool discounts) to <span className="text-emerald-400">{email}</span>.
        </p>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 flex-1"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0 flex items-center justify-center gap-1.5"
        >
          Subscribe Free
        </button>
      </form>
    );
  }

  return (
    <div
      className={`glass-panel rounded-3xl p-8 md:p-12 border border-indigo-500/30 relative overflow-hidden bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-purple-950/30 ${className}`}
    >
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          The Weekly AI Stack • 22,000+ Readers
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Never Miss a Free AI Tool, Discount, or High-Paying AI Workflow
        </h2>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed">
          Curated weekly for Indian and global freelancers, college students, and content creators. No spam, only hand-tested tools, prompt packs, and exclusive affiliate discounts.
        </p>

        <form onSubmit={handleSubmit} className="pt-2 max-w-xl mx-auto space-y-3">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your best email address..."
              className="px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-400 flex-1 shadow-inner"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0"
            >
              Get Free Prompt Pack
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>✓ 100% Free forever</span>
            <span>✓ Unsubscribe anytime</span>
            <span>✓ Includes UPI & Free-tier deals</span>
          </div>
        </form>
      </div>
    </div>
  );
};

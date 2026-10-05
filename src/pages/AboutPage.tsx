import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Target, Award, Users, CheckCircle2, Search, Zap } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoMeta
        title="About Us | Who We Are, How We Review Tools & Why Trust Us"
        description="Learn about AiHunt Hub: our independent testing methodology, editorial standards, and commitment to student and freelancer AI accessibility."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Editorial Independence & Transparency
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          About AiHunt Hub
        </h1>
        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The definitive review directory helping students, freelance professionals, and content creators find generative AI tools that actually deliver.
        </p>
      </div>

      {/* 1. Who We Are */}
      <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">Section 1</span>
            <h2 className="text-2xl font-black text-white">Who We Are</h2>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>AiHunt Hub</strong> was created in 2026 by an independent collective of software engineers, freelance creators, and university educators based across India and global remote hubs.
          </p>
          <p>
            As artificial intelligence exploded into the mainstream, we observed a frustrating problem: the internet was flooded with low-quality, AI-generated "review" sites that praised every single tool without testing it. Students looking for genuine free thesis research tools were lured into credit card traps, and freelancers were misled into subscribing to laggy wrappers with zero return on investment.
          </p>
          <p>
            We built AiHunt Hub to fix this. We are real practitioners who use coding assistants (Cursor, v0), research engines (Perplexity), writing assistants (QuillBot, Claude), and generative voice tools (ElevenLabs) in our daily client and academic work.
          </p>
        </div>
      </section>

      {/* 2. How We Review Tools */}
      <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Section 2</span>
            <h2 className="text-2xl font-black text-white">How We Review Tools</h2>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          Every tool featured on AiHunt Hub undergoes our <strong>5-Stage Hands-On Evaluation Protocol</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>01.</span> Real-World Stress Testing
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We test tools on actual production tasks: building full-stack apps, editing multi-track 4K video, or synthesizing 15-page academic papers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>02.</span> Free Tier & Quota Audit
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We verify the genuine utility of the free tier: daily credit refills, watermark rules, export resolution caps, and whether a credit card is required upfront.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>03.</span> Regional & India Payment Support
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We test payment gateways for UPI, RuPay, and international debit cards to guarantee Indian students and freelancers can subscribe without recurring forex failure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>04.</span> Price-to-Value Ratio
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We calculate how many hours the software saves compared to open-source or manual alternatives, ensuring paid plans deliver 10x value.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            <strong>Stage 05 (Ongoing Re-evaluation):</strong> We re-audit tools every 60 days to reflect UI updates, model upgrades, and pricing revisions.
          </span>
        </div>
      </section>

      {/* 3. Why People Can Trust Us */}
      <section className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Section 3</span>
            <h2 className="text-2xl font-black text-white">Why People Can Trust Us</h2>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-xs">Zero Pay-to-Play Ratings</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tool creators cannot buy high ratings. Our review scores are derived strictly from objective benchmarks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-xs">Unfiltered Pros & Cons</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If a tool has slow latency, hidden paywalls, or poor customer support, we document it prominently in the "Cons" section.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-xs">Transparent Badging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sponsored placements are clearly labeled with a purple "Sponsored" tag. No deceptive native advertising.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            Read our complete commitments in our{' '}
            <Link to="/affiliate-disclosure" className="text-indigo-400 underline hover:text-indigo-300">
              Affiliate Disclosure
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy" className="text-indigo-400 underline hover:text-indigo-300">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Have a tool suggestion or partnership question?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          We welcome feedback from students, researchers, and tool founders alike.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
          >
            Contact Our Editorial Team
          </Link>
          <Link
            to="/submit"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors cursor-pointer"
          >
            Submit Your Tool
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, AlertCircle, HelpCircle, Lock } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export const AffiliateDisclosurePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <SeoMeta
        title="Affiliate Disclosure & Transparency Policy | AiHunt Hub"
        description="Our FTC and ASCI compliant affiliate disclosure. Learn how AiHunt Hub earns revenue through referral links while upholding 100% editorial integrity."
        canonicalPath="/affiliate-disclosure"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Full Transparency Guarantee
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Affiliate Disclosure
        </h1>
        <p className="text-xs text-slate-400">
          Last Updated: October 2026 • In Compliance with FTC (USA) & ASCI (India) Advertising Standards
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
        {/* Core Guarantee Callout Box */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
          <h2 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            Our Three Uncompromising Principles
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">1.</span>
              <span><strong>Some Links Are Affiliate Links:</strong> When you click certain links on this website to visit or purchase an AI tool, we may earn an affiliate commission.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">2.</span>
              <span><strong>Zero Extra Cost to You:</strong> Clicking our links never costs you an extra cent. In fact, our negotiated reader partner links frequently include exclusive coupon codes or extended free trials.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold shrink-0">3.</span>
              <span><strong>This NEVER Changes Our Ratings:</strong> Software companies cannot purchase positive reviews, higher star scores, or editorial rank. If a tool has drawbacks or weak free limits, we state it plainly.</span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why We Use Affiliate Links */}
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-white">1. Why We Use Affiliate Links</h3>
          <p>
            Operating <strong>AiHunt Hub</strong> requires substantial resources: subscription costs to test paid software tiers, cloud server hosting, benchmark pipelines, and compensation for our editorial researchers and software engineers.
          </p>
          <p>
            Rather than placing intrusive pop-up ads, paywalling our directory, or demanding monthly membership fees from students and freelancers, we sustain our platform through affiliate partnerships. When you discover a tool through our research and choose to upgrade, the software provider compensates us with a small percentage fee.
          </p>
        </section>

        {/* Section 2: How Ratings & Editorial Rankings Are Determined */}
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h3 className="text-lg font-bold text-white">2. How Ratings & Editorial Rankings Are Determined</h3>
          <p>
            Our review scores (1.0 to 5.0 stars) are strictly determined by our hands-on 5-stage benchmark protocol:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">• Output Quality & Speed:</strong>
              <span className="text-slate-400">Accuracy of generated code, nuance of text, or rendering realism of image/video.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">• Free Plan Practicality:</strong>
              <span className="text-slate-400">Can a student or solo freelancer get meaningful work done without paying immediately?</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">• Regional Payment & UPI:</strong>
              <span className="text-slate-400">Accessibility of checkout in India and emerging markets without unexpected foreign transaction declines.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <strong className="text-white block mb-1">• Price-to-Value Ratio:</strong>
              <span className="text-slate-400">Is the software worth the recurring expense compared to free and open-source models?</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            Whether a tool has an affiliate program or not has zero bearing on whether we recommend it. For example, several tools listed in our directory have no affiliate program whatsoever; we feature them solely because they are exceptional.
          </p>
        </section>

        {/* Section 3: Sponsored Listings Policy */}
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h3 className="text-lg font-bold text-white">3. Sponsored Listings Policy</h3>
          <p>
            Software vendors may purchase promotional placement, such as homepage spotlight banners or fast-tracked review queues. However:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc text-slate-300 text-xs">
            <li>Sponsored placements are always identified with our purple <span className="text-purple-300 font-semibold">"Sponsored"</span> badge.</li>
            <li>Sponsors cannot alter our objective "Pros and Cons" bullet points.</li>
            <li>We decline sponsorships from software products that fail basic safety, security, or usability audits.</li>
          </ul>
        </section>

        {/* Section 4: Technical Link Tagging */}
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h3 className="text-lg font-bold text-white">4. Technical Link Compliance (Google Webmaster Standards)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            All outbound commercial and affiliate links on AiHunt Hub adhere strictly to Google Search guidelines:
          </p>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-indigo-300">
            rel="sponsored nofollow noopener"
          </div>
          <p className="text-xs text-slate-400">
            This prevents unauthorized link manipulation and guarantees clean, secure redirects for readers.
          </p>
        </section>

        {/* Section 5: Contact */}
        <section className="space-y-2 pt-4 border-t border-slate-800/80">
          <h3 className="text-lg font-bold text-white">5. Reader Feedback</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            If you have questions about any affiliate relationship on this site, or if you believe an affiliate link is malfunctioning or inaccurate, please reach out to our team at{' '}
            <a href="mailto:editorial@aihunthub.com" className="text-indigo-400 underline">
              editorial@aihunthub.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

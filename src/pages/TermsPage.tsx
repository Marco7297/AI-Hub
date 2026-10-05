import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertCircle, CheckCircle2 } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <SeoMeta
        title="Terms of Use | AiHunt Directory & Review Hub"
        description="Review the terms and conditions for using AiHunt Hub. Understand user responsibilities, intellectual property, and software disclaimers."
        canonicalPath="/terms"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <FileText className="w-3.5 h-3.5" />
          Legal Agreement
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Terms of Use
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: October 2026 • Last updated: October 2026
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or using <strong>AiHunt Hub</strong> (the "Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue using the website immediately.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">2. Informational & Directory Purpose</h2>
          <p>
            AiHunt Hub operates exclusively as an independent directory, comparative evaluation, and review resource for artificial intelligence software applications. We do not manufacture, host, or execute the underlying third-party software tools listed in our directory.
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
            <p>
              • <strong>Pricing Accuracy:</strong> While we continually monitor subscription fees, tool tiers, and discount codes, software companies frequently adjust their pricing and credit quotas without prior notice. Always verify final billing details directly on the vendor's checkout page.
            </p>
            <p>
              • <strong>Software Uptime & Stability:</strong> We assume no responsibility or legal liability for downtime, loss of data, service cancellations, or algorithmic changes instituted by third-party AI software vendors.
            </p>
          </div>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">3. Affiliate Links & Sponsored Content</h2>
          <p>
            In accordance with Federal Trade Commission (FTC) guidelines and Advertising Standards Council of India (ASCI) standards, we disclose that certain external links are affiliate tracking links. Clicking these links or subscribing through them may generate an affiliate commission for AiHunt Hub at no additional cost to you.
          </p>
          <p>
            Sponsored tool listings and fast-track submissions are labeled with distinct "Sponsored" badges to maintain absolute transparency for our readers.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">4. User Submissions & Maker Listings</h2>
          <p>
            Tool creators and marketing representatives submitting tools to AiHunt Hub warrant that:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-slate-400 text-xs">
            <li>All submitted specifications, pricing models, and functional descriptions are truthful, accurate, and non-deceptive.</li>
            <li>The tool does not infringe on intellectual property, trademark, or copyright rights of third parties.</li>
            <li>The tool adheres to safe AI ethical guidelines and does not distribute malicious malware, unconsented biometric cloning, or unlawful harassment utilities.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">5. Intellectual Property Rights</h2>
          <p>
            All original editorial reviews, comparison matrix designs, benchmark analyses, guides, graphics, and code frameworks on AiHunt Hub are the proprietary intellectual property of AiHunt Hub. All third-party software names, logos, trademarks, and registered trademarks displayed are the property of their respective owners.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">6. Limitation of Liability</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            In no event shall AiHunt Hub, its editors, founders, or affiliates be liable for any indirect, incidental, consequential, or punitive damages arising out of your access to, reliance upon, or use of any software tool discovered through our directory.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white">7. Governing Law & Contact</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            These terms shall be governed by and interpreted in accordance with applicable laws. If you have any inquiries regarding these Terms of Use, please reach out via our{' '}
            <Link to="/contact" className="text-indigo-400 underline">
              Contact Page
            </Link>{' '}
            or by emailing{' '}
            <a href="mailto:legal@aihunthub.com" className="text-indigo-400 underline">
              legal@aihunthub.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

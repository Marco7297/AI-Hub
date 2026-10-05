import React from 'react';
import { Shield, Lock, Eye, Cookie, FileCheck } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <SeoMeta
        title="Privacy Policy | Data Protection & Cookies | AiHunt Hub"
        description="Our comprehensive privacy policy. Learn how AiHunt Hub protects user privacy, newsletter subscriptions, cookies, and local storage data in compliance with GDPR and Indian DPDP."
        canonicalPath="/privacy-policy"
      />

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Lock className="w-3.5 h-3.5 text-indigo-400" />
          Data Protection & Privacy
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400">
          Effective Date: October 2026 • Compliant with GDPR, CCPA, and India Digital Personal Data Protection Act (DPDP)
        </p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-indigo-400" />
            1. Information We Collect
          </h2>
          <p>
            At <strong>AiHunt Hub</strong>, we respect user privacy and operate under strict data minimization standards. You can browse our entire AI tools directory anonymously without creating an account or providing personal details. We only process:
          </p>
          <ul className="space-y-2 pl-4 list-disc text-slate-400 text-xs">
            <li>
              <strong>Email Information:</strong> When you voluntarily subscribe to our weekly newsletter or submit an AI tool via our product listing form, we store your email address on secure encrypted servers.
            </li>
            <li>
              <strong>Local Browser Storage:</strong> We utilize client-side LocalStorage exclusively to retain your personalized preferences: currency toggle (USD vs INR), saved tools bookmarks, and side-by-side comparison queues. This data resides solely within your browser and is never sold to third-party ad networks.
            </li>
            <li>
              <strong>Server Logs & Analytics:</strong> Standard non-personally identifiable telemetry such as browser family, referring domain, and page hits to maintain server performance and block bot abuse.
            </li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Cookie className="w-4 h-4 text-indigo-400" />
            2. Cookies & Tracking Technologies
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            We do not use invasive third-party ad retargeting cookies. We use essential session cookies strictly for website performance and fraud prevention. When you click outbound affiliate links to third-party AI software vendors, a partner tracking parameter is passed so the vendor knows you originated from AiHunt Hub.
          </p>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-4 h-4 text-indigo-400" />
            3. How We Use Collected Information
          </h2>
          <p>We process collected information solely for legitimate operational purposes:</p>
          <ul className="space-y-1.5 pl-4 list-disc text-slate-400 text-xs">
            <li>Dispatching the Friday "Weekly AI Stack" digest featuring hand-tested tools and free prompt packs.</li>
            <li>Confirming publication and providing review receipts to tool founders who submit software listings.</li>
            <li>Detecting system anomalies, verifying link integrity, and preventing spam.</li>
          </ul>
        </section>

        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-indigo-400" />
            4. Your Rights & Data Erasure
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            In accordance with GDPR (Articles 15-20) and the Indian Digital Personal Data Protection Act (DPDP), you possess the right to access, rectify, or request complete deletion of any personal data stored with us.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            You can instantly unsubscribe from our newsletter at any time via the one-click unsubscribe link located in every email footer, or by contacting our Data Protection Officer at{' '}
            <a href="mailto:privacy@aihunthub.com" className="text-indigo-400 underline">
              privacy@aihunthub.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

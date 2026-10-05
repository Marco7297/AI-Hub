import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, Globe, Shield } from 'lucide-react';
import { SeoMeta } from '../components/SeoMeta';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SeoMeta
        title="Contact Us | AiHunt Directory Support & Editorial Inquiries"
        description="Get in touch with the AiHunt Hub team. Send us your feedback, sponsorship inquiries, or tool correction requests."
        canonicalPath="/contact"
      />

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
          Get In Touch
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Have a question about a tool, an inquiry regarding sponsorship, or editorial feedback? Reach out directly via the form or email below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact info cards */}
        <div className="md:col-span-5 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Direct Email Inquiries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              For general editorial, founder submissions, or corrections:
            </p>
            <a
              href="mailto:contact@aihunthub.com"
              className="text-sm font-bold text-indigo-400 hover:text-indigo-300 block"
            >
              contact@aihunthub.com
            </a>
            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
              For newsletter sponsorships & advertising:
            </p>
            <a
              href="mailto:partnerships@aihunthub.com"
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 block"
            >
              partnerships@aihunthub.com
            </a>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Response Turnaround</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We respond to all verified inquiries within <strong>24 business hours</strong>. Tool founders with Fast-Track packages are reviewed in under 12 hours.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Global Editorial Coverage</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving our community across India (Bengaluru, Delhi, Mumbai) and international hubs (San Francisco, London, Singapore).
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to <strong>AiHunt Hub</strong>. Our team has received your message and will reply to <span className="text-indigo-400 font-semibold">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Question', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                  Send a Message
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="aarav@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject / Topic <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    <option value="General Question">General Inquiry</option>
                    <option value="Sponsored Listing / Ads">Sponsored Listing / Fast-Track Inquiry</option>
                    <option value="Newsletter Sponsorship">Weekly Newsletter Sponsorship</option>
                    <option value="Tool Correction / Pricing Update">Tool Information Update</option>
                    <option value="University / Student Club">Student Club / College Workshop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your inquiry, partnership proposition, or feedback in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

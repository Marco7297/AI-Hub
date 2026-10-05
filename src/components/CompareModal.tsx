import React from 'react';
import { X, ExternalLink, Check, Trash2 } from 'lucide-react';
import { useBookmarks } from '../context/BookmarkContext';
import { useTools } from '../context/ToolsContext';
import { useCurrency } from '../context/CurrencyContext';
import { RatingStars } from './RatingStars';
import { ToolBadge } from './ToolBadge';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose }) => {
  const { comparedIds, removeFromCompare, clearCompare } = useBookmarks();
  const { tools } = useTools();
  const { formatPrice } = useCurrency();

  if (!isOpen) return null;

  const comparedTools = tools.filter((t) => comparedIds.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Side-by-Side Tool Comparison
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {comparedTools.length}/3 Selected
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Compare features, pricing, India payment options, and pros/cons before deciding.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {comparedTools.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-rose-500/20 hover:bg-rose-500/10 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-auto p-6">
          {comparedTools.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <p className="text-base text-slate-300">No tools selected for comparison yet.</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Click the comparison icon on any tool card in the directory to add up to 3 tools for side-by-side evaluation.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="py-4 px-4 w-44 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Feature / Metric
                    </th>
                    {comparedTools.map((tool) => (
                      <th key={tool.id} className="py-4 px-4 min-w-[240px] align-top">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={tool.logo}
                              alt={tool.name}
                              className="w-10 h-10 rounded-lg object-cover ring-1 ring-white/10"
                            />
                            <div>
                              <h3 className="font-bold text-white text-base leading-tight">
                                {tool.name}
                              </h3>
                              <span className="text-[11px] text-indigo-400">{tool.category}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCompare(tool.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                            title="Remove"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-sm">
                  {/* Rating */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Rating</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4">
                        <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} />
                      </td>
                    ))}
                  </tr>

                  {/* Pricing Model */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Pricing Model</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4">
                        <ToolBadge type="pricing" pricingModel={tool.pricingModel} />
                      </td>
                    ))}
                  </tr>

                  {/* Starting Price */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Starting Price</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4 font-semibold text-emerald-400">
                        {formatPrice(tool.startingPrice, tool.inrPrice)}
                      </td>
                    ))}
                  </tr>

                  {/* Free Tier Details */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Free Tier Details</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4 text-xs text-slate-300 leading-relaxed">
                        {tool.freeTierDetails}
                      </td>
                    ))}
                  </tr>

                  {/* India Payment / UPI */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">India Accessibility</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4 text-xs text-slate-300">
                        <span className="inline-block px-2 py-1 rounded bg-slate-800 text-slate-200">
                          {tool.indiaPaymentSupport}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Key Pros */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Top Pros</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4 text-xs space-y-1.5">
                        {tool.pros.slice(0, 3).map((p, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  {/* Key Cons */}
                  <tr>
                    <td className="py-3 px-4 text-xs font-medium text-slate-400">Watch Outs (Cons)</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-3 px-4 text-xs space-y-1.5">
                        {tool.cons.map((c, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-400">
                            <span className="text-rose-400 font-bold shrink-0">•</span>
                            <span>{c}</span>
                          </div>
                        ))}
                      </td>
                    ))}
                  </tr>

                  {/* Visit Site CTA */}
                  <tr>
                    <td className="py-4 px-4 text-xs font-medium text-slate-400">Affiliate Link</td>
                    {comparedTools.map((tool) => (
                      <td key={tool.id} className="py-4 px-4">
                        <a
                          href={tool.affiliateUrl}
                          target="_blank"
                          rel="sponsored nofollow noopener"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                        >
                          Visit {tool.name}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

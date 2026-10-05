import React from 'react';
import { Sparkles, Zap, DollarSign } from 'lucide-react';
import type { PricingModel } from '../types';

interface ToolBadgeProps {
  type: 'featured' | 'sponsored' | 'pricing' | 'deal' | 'upi';
  pricingModel?: PricingModel;
  text?: string;
  className?: string;
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({ type, pricingModel, text, className = '' }) => {
  if (type === 'featured') {
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold badge-featured ${className}`}>
        <Sparkles className="w-3 h-3 text-amber-400" />
        Featured
      </span>
    );
  }

  if (type === 'sponsored') {
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold badge-sponsored ${className}`}>
        <Zap className="w-3 h-3 text-purple-300" />
        Sponsored
      </span>
    );
  }

  if (type === 'deal' && text) {
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 ${className}`}>
        <DollarSign className="w-3 h-3" />
        {text}
      </span>
    );
  }

  if (type === 'upi') {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/25 ${className}`}>
        🇮🇳 UPI Supported
      </span>
    );
  }

  if (type === 'pricing' && pricingModel) {
    const colorStyles = {
      Free: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      Freemium: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      Paid: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    };

    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${colorStyles[pricingModel]} ${className}`}>
        {pricingModel}
      </span>
    );
  }

  return null;
};

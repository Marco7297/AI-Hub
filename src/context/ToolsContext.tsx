import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Tool, ToolSubmission } from '../types';
import { initialTools } from '../data/tools';
import { categories } from '../data/categories';

interface ToolsContextType {
  tools: Tool[];
  addToolSubmission: (submission: ToolSubmission) => Tool;
  upvoteTool: (id: string) => void;
  getToolBySlug: (slug: string) => Tool | undefined;
  getToolsByCategory: (categorySlug: string) => Tool[];
  featuredTools: Tool[];
  sponsoredTools: Tool[];
}

const ToolsContext = createContext<ToolsContextType | undefined>(undefined);

export const ToolsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>(() => {
    try {
      const stored = localStorage.getItem('aihub_custom_tools');
      if (stored) {
        const custom: Tool[] = JSON.parse(stored);
        // Combine initial tools with any user-submitted tools
        return [...custom, ...initialTools.filter(t => !custom.some(c => c.id === t.id))];
      }
    } catch {
      // fallback
    }
    return initialTools;
  });

  const addToolSubmission = (sub: ToolSubmission): Tool => {
    const categoryObj = categories.find(c => c.name === sub.category) || categories[0];
    const newTool: Tool = {
      id: `tool-${Date.now()}`,
      name: sub.name,
      slug: sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      tagline: sub.tagline,
      description: sub.description,
      fullReview: `${sub.name} is a newly reviewed tool submitted directly by its makers. It offers solutions in ${sub.category}.`,
      websiteUrl: sub.websiteUrl,
      affiliateUrl: sub.affiliateUrl || sub.websiteUrl,
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
      pricingModel: sub.pricingModel,
      startingPrice: sub.startingPrice || '$0/mo',
      inrPrice: sub.startingPrice ? `₹${Math.round(parseFloat(sub.startingPrice.replace(/[^0-9.]/g, '') || '10') * 84)}/mo` : '₹0',
      pros: sub.pros.split('\n').filter(p => p.trim().length > 0),
      cons: sub.cons.split('\n').filter(c => c.trim().length > 0),
      rating: 4.8,
      reviewCount: 1,
      featured: sub.plan === 'sponsored' || sub.plan === 'fast-track',
      sponsored: sub.plan === 'sponsored',
      category: categoryObj.name,
      categorySlug: categoryObj.slug,
      lastUpdated: 'Just now',
      targetAudience: ['Creators', 'Freelancers', 'Students', 'Teams'],
      indiaPaymentSupport: 'UPI & Global Cards',
      features: ['Automated workflows', 'Cloud integration', 'Export support'],
      freeTierDetails: sub.pricingModel === 'Free' ? 'Completely free to use.' : 'Free trial available.',
      upvotes: 1
    };

    setTools(prev => {
      const updated = [newTool, ...prev];
      try {
        const customOnly = updated.filter(t => t.id.startsWith('tool-'));
        localStorage.setItem('aihub_custom_tools', JSON.stringify(customOnly));
      } catch {
        // storage error ignore
      }
      return updated;
    });

    return newTool;
  };

  const upvoteTool = (id: string) => {
    setTools(prev =>
      prev.map(t => (t.id === id ? { ...t, upvotes: (t.upvotes || 0) + 1 } : t))
    );
  };

  const getToolBySlug = (slug: string) => {
    return tools.find(t => t.slug === slug);
  };

  const getToolsByCategory = (categorySlug: string) => {
    return tools.filter(t => t.categorySlug === categorySlug);
  };

  const featuredTools = tools.filter(t => t.featured);
  const sponsoredTools = tools.filter(t => t.sponsored);

  return (
    <ToolsContext.Provider
      value={{
        tools,
        addToolSubmission,
        upvoteTool,
        getToolBySlug,
        getToolsByCategory,
        featuredTools,
        sponsoredTools,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export const useTools = () => {
  const context = useContext(ToolsContext);
  if (!context) {
    throw new Error('useTools must be used within a ToolsProvider');
  }
  return context;
};

import type { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'AI Writing & Content',
    slug: 'ai-writing-content',
    description: 'Tools for copywriting, academic paraphrasing, SEO articles, cold emails, and storytelling.',
    iconName: 'PenTool',
    popularFor: 'College essays, SEO blogging, cold outreach, LinkedIn hooks',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'cat-2',
    name: 'AI Coding & Tech',
    slug: 'ai-coding-tech',
    description: 'Autonomous coding agents, full-stack scaffolders, terminal helpers, and code refactorers.',
    iconName: 'Code2',
    popularFor: 'Rapid MVP building, debugging errors, frontend design to code',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'cat-3',
    name: 'AI Video & Image Creation',
    slug: 'ai-video-image',
    description: 'Generative art, photorealistic rendering, automated video editing, faceless shorts and thumbnails.',
    iconName: 'Video',
    popularFor: 'YouTube Shorts, Instagram Reels, ad banners, logo concepts',
    gradient: 'from-fuchsia-500/20 to-purple-500/20'
  },
  {
    id: 'cat-4',
    name: 'Productivity & Research',
    slug: 'productivity-research',
    description: 'Web research agents, document summarizers, meeting note takers, and automated workflows.',
    iconName: 'Sparkles',
    popularFor: 'Literature reviews, client meeting summaries, task automation',
    gradient: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'cat-5',
    name: 'AI Audio & Voice',
    slug: 'ai-audio-voice',
    description: 'Hyper-realistic voice cloning, multilingual dubbing, AI music generation, and podcast cleanup.',
    iconName: 'Mic',
    popularFor: 'Voiceovers in Hindi/English, podcast mastering, video dubbing',
    gradient: 'from-rose-500/20 to-red-500/20'
  }
];

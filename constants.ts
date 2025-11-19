import { Section, Project, Thought } from './types';

export const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'products', label: 'Products' },
  { id: 'mind', label: 'Mind' },
  { id: 'universe', label: 'Universe' },
  { id: 'about', label: 'About' },
];

export const FEATURED_WORKS: Project[] = [
  {
    id: '1',
    title: 'Nebula Core',
    category: 'AI Infrastructure',
    description: 'A distributed inference engine optimizing LLM latency by 40%.',
    year: '2024',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'Lumina Interface',
    category: 'Design System',
    description: 'An adaptive UI kit for generative AI applications.',
    year: '2023',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'Echo Voice',
    category: 'Audio Model',
    description: 'Real-time emotional speech synthesis research.',
    year: '2023',
    image: 'https://picsum.photos/600/400?random=3'
  }
];

export const PRODUCTS: Project[] = [
  {
    id: 'p1',
    title: 'FlowState',
    category: 'Productivity',
    description: 'AI-powered focus management tool for deep work.',
    year: 'Live',
    image: 'https://picsum.photos/600/400?random=4'
  },
  {
    id: 'p2',
    title: 'Vantage',
    category: 'Analytics',
    description: 'Predictive market trends dashboard using Gemini Pro.',
    year: 'Beta',
    image: 'https://picsum.photos/600/400?random=5'
  }
];

export const THOUGHTS: Thought[] = [
  {
    id: 't1',
    title: 'The Silence of Interfaces',
    date: 'Oct 24, 2024',
    readTime: '5 min',
    excerpt: 'Why the best AI interactions are the ones you do not notice.',
    tags: ['Design', 'AI']
  },
  {
    id: 't2',
    title: 'Synthesizing Reality',
    date: 'Sep 12, 2024',
    readTime: '8 min',
    excerpt: 'Exploring the ethical boundaries of generative video.',
    tags: ['Ethics', 'Tech']
  },
  {
    id: 't3',
    title: 'Code as Gardening',
    date: 'Aug 05, 2024',
    readTime: '4 min',
    excerpt: 'Moving from engineering architectures to cultivating ecosystems.',
    tags: ['Philosophy']
  }
];

export const SYSTEM_INSTRUCTION = `You are the digital twin of Qingyang, an AI Engineer and Designer. 
Your name is Qingyang AI.
You are hosted on his personal portal "qingyang.ai".
Tone: Professional, minimalist, insightful, slightly futuristic but warm.
Context:
- Works: Nebula Core (Infra), Lumina Interface (Design), Echo Voice (Audio).
- Products: FlowState (Productivity), Vantage (Analytics).
- Philosophy: "Technology should be felt, not seen."
- Visual Style: Bright, White, Silver, Qingyang Blue.
- Goal: Briefly answer visitors' questions about Qingyang's work and vision. Keep answers under 50 words unless asked for detail.
`;

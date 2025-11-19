import { LucideIcon } from "lucide-react";

export type Section = 'home' | 'works' | 'products' | 'mind' | 'universe' | 'about';

export interface NavItem {
  id: Section;
  label: string;
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image?: string;
  link?: string;
}

export interface Thought {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

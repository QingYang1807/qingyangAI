import { LucideIcon } from "lucide-react";

export type Section = 'home' | 'works' | 'products' | 'mind' | 'universe' | 'about';

export interface NavItem {
  id: Section;
  label: string;
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'coming-soon';
  results?: string[];
  link?: string;
  featured?: boolean;
  image?: string;
}

export interface Advantage {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  details: { label: string; value: string }[];
}

export interface Certificate {
  id: number;
  title: string;
  year: string;
  description: string;
  category: 'ai' | 'professional' | 'academic';
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

import { LucideIcon } from "lucide-react";

export type Section = 'home' | 'works' | 'products' | 'mind' | 'universe' | 'about';
export type Language = 'en' | 'zh';

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
  courseId?: string; // Link to detailed course data
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  period: string;
  description: string;
  modules: CourseModule[];
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

export interface SkillCategory {
  id: string;
  title: string;
  level: number;
  description: string;
  tags: string[];
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
}

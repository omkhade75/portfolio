/**
 * Om Khade — Portfolio Type Definitions
 * 
 * Centralized TypeScript interface definitions for featured projects,
 * hackathons, and academic/leadership milestones.
 */

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI Platform';
  accentColor: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  engineeringHighlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  demoCredentials?: { role: string; email: string; pass?: string }[];
  featured: boolean;
}

export interface HackathonItem {
  title: string;
  year: string;
  organizer: string;
  tier: 'RECOGNITION' | 'NATIONAL' | 'SPECIALIZED';
  award: string;
  badgeColor: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  accent: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  metric?: string;
  description: string;
  tags: string[];
  accent: string;
}

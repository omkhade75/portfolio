/**
 * Om Ajinath Khade — Portfolio Type Definitions
 * 
 * Centralized TypeScript interface definitions for featured projects,
 * hackathons, academic milestones, and certificate credentials.
 */

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'AI / Voice' | 'Full-Stack' | 'Spatial WebGL';
  accentColor: string;
  description: string;
  architecture: string[];
  metrics: ProjectMetric[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface HackathonData {
  title: string;
  year: string;
  organizer: string;
  category: 'INTERNATIONAL' | 'NATIONAL' | 'AI' | 'SOFTWARE ENGINEERING';
  award: string;
  badgeColor: string;
  description: string;
}

export interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  badgeColor: string;
  fileUrl: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  organization: string;
  icon: any;
  accent: string;
  description: string;
  tags: string[];
}

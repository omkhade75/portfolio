// Central source of truth for all portfolio data
// All components import from here to ensure consistency and factual accuracy
// SOURCE OF TRUTH: Om Khade's latest resume (2026)

export const PERSONAL = {
  name: 'Om Khade',
  nameShort: 'OM KHADE',
  title: 'Full Stack Developer | AI & Data Science Student',
  roleSubtitle: 'B.Tech CSE (AI & DS) — Sanjay Ghodawat University',
  headline: 'AI & DATA SCIENCE STUDENT',
  tagline: 'B.Tech CSE (AI & Data Science) student building full-stack applications, backend APIs, database-driven systems and AI-powered applications.',
  email: 'omkhade09@gmail.com',
  phone: '+91 7588021256',
  location: 'Kolhapur, Maharashtra',
  github: 'https://github.com/omkhade75',
  githubHandle: 'omkhade75',
  linkedin: 'https://www.linkedin.com/in/om-khade-596295372/',
  portfolio: 'https://omkhadeportfolio.onrender.com',
  resumePath: '/Om_Khade_Resume.pdf',
  profilePhoto: '/om_khade_profile.jpg',
} as const;

export const EDUCATION = {
  degree: 'B.Tech in Computer Science Engineering (AI & Data Science)',
  university: 'Sanjay Ghodawat University, Kolhapur',
  universityShort: 'SGU — NIAT Upskilling',
  cgpa: '9.40',
  duration: '2025–2029',
  mhtCetPercentile: '95',
  jeePercentile: '91',
} as const;

export const AVAILABILITY = {
  status: 'OPEN TO INTERNSHIP OPPORTUNITIES',
  targetRoles: [
    'Full Stack Intern',
    'Software Development Engineer Intern',
    'Backend Developer Intern',
    'Full-Stack Web Developer',
  ],
  modes: ['Remote', 'Hybrid', 'Relocation (Pune / Mumbai / Bengaluru)'],
} as const;

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

export const PROJECTS: ProjectData[] = [
  {
    id: 'omnimind',
    number: '01',
    title: 'OMNIMIND AI — DECISION INTELLIGENCE OS',
    tagline: 'Modular decision-intelligence platform spanning billing/POS, inventory, CRM, suppliers, finance, operations, forecasting and AI workflows',
    category: 'Full-Stack',
    accentColor: 'bg-neo-yellow text-[#121212]',
    badge: 'FLAGSHIP SYSTEM',
    description: 'Built a modular decision-intelligence platform spanning billing/POS, inventory, CRM, suppliers, finance, operations, forecasting and AI workflows.',
    problem: 'Retail and business operations suffer from fragmented tools for billing, inventory tracking, supplier management, and financial reporting — leading to data silos and poor decision-making.',
    solution: 'Engineered a unified decision-intelligence OS with role-aware dashboards, RBAC, protected routes, audit logging, and AI-assisted decision support across all business functions.',
    architecture: [
      'Normalized PostgreSQL schema with 18+ interconnected models using Prisma ORM.',
      'RBAC implementation with protected routes and audit logging.',
      'Role-aware dashboards for sales, inventory, CRM, finance, and operations.',
      'AI-assisted decision support workflows for business intelligence.'
    ],
    engineeringHighlights: [
      'Designed a normalized PostgreSQL schema with 18+ interconnected models using Prisma ORM.',
      'Implemented RBAC, protected routes, and audit logging for secure multi-role access.',
      'Built role-aware dashboards and business workflows for sales, inventory, CRM, finance, and operations with AI-assisted decision support.'
    ],
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/omkhade75/omni-mind-vue',
    liveUrl: 'https://bizora-owner.onrender.com',
    featured: true
  },
  {
    id: 'medicare',
    number: '02',
    title: 'MEDICARE — HOSPITAL MANAGEMENT SYSTEM',
    tagline: 'Multi-role hospital platform for patient registration, appointments, doctor/nurse workflows, wards/beds and emergency operations',
    category: 'Full-Stack',
    accentColor: 'bg-neo-purple text-white',
    badge: 'HEALTHCARE PLATFORM',
    description: 'Built a multi-role hospital platform for patient registration, appointments, doctor/nurse workflows, wards/beds and emergency operations.',
    problem: 'Hospital administrative workflows face inefficiencies in patient registration, appointment scheduling, ward management, and role-segregated medical records access.',
    solution: 'Created a hospital management system with Supabase Auth, PostgreSQL Row Level Security, server-side functions, responsive role-based dashboards, PDF reports, and AI voice/chat integrations.',
    architecture: [
      'Supabase Auth with PostgreSQL Row Level Security for data confidentiality.',
      'Server-side functions for healthcare operations.',
      'Responsive role-based dashboards for doctors, nurses, patients, and admins.',
      'PDF report generation and AI voice/chat integrations.'
    ],
    engineeringHighlights: [
      'Implemented Supabase Auth and PostgreSQL Row Level Security for secure multi-role access.',
      'Built responsive role-based dashboards and reporting workflows.',
      'Added server-side functions, PDF reports, and AI voice/chat integrations.'
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    githubUrl: 'https://github.com/omkhade75/hospital_man',
    liveUrl: 'https://hospital-man-fronted.onrender.com',
    featured: true
  },
  {
    id: 'agentrix',
    number: '03',
    title: 'AGENTRIX — ENTERPRISE VOICE AGENT PLATFORM',
    tagline: 'Full-stack platform for configuring and managing AI voice agents, including onboarding, settings, phone routing and browser testing',
    category: 'AI Platform',
    accentColor: 'bg-neo-cyan text-[#121212]',
    badge: 'VOICE AI',
    description: 'Built a full-stack platform for configuring and managing AI voice agents, including onboarding, settings, phone routing and browser testing.',
    problem: 'Businesses need a streamlined way to configure, test, and deploy AI voice agents without complex infrastructure setup.',
    solution: 'Developed modular Express APIs with reusable React components, JWT authentication, voice/AI service integrations, and browser-based voice-agent testing.',
    architecture: [
      'Modular Express APIs for voice agent configuration and management.',
      'Reusable React components for onboarding, settings, and phone routing.',
      'JWT authentication for secure API access.',
      'Browser-based voice-agent testing interface.'
    ],
    engineeringHighlights: [
      'Developed modular Express APIs for voice agent management.',
      'Built reusable React components for agent configuration and testing.',
      'Implemented JWT authentication and integrated voice/AI service APIs.',
      'Added browser-based voice-agent testing capabilities.'
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'JWT'],
    githubUrl: 'https://github.com/omkhade75/ai-calling-agent',
    featured: true
  }
];

export interface HackathonItem {
  title: string;
  year: string;
  organizer: string;
  tier: 'RECOGNITION' | 'NATIONAL' | 'SPECIALIZED';
  award: string;
  badgeColor: string;
  description: string;
  certificateUrl?: string;
}

export const HACKATHONS: HackathonItem[] = [
  {
    title: 'NASA International Space Apps Challenge',
    year: '2025',
    organizer: 'NASA',
    tier: 'RECOGNITION',
    award: 'Galactic Problem Solver',
    badgeColor: 'bg-neo-yellow text-[#121212]',
    description: 'Awarded Galactic Problem Solver for technology-driven data solutions addressing Earth and space challenges in NASA\'s global innovation competition.',
    certificateUrl: '/certificates/nasa_space_apps_2025.jpg'
  },
  {
    title: 'Smart India Hackathon (SIH)',
    year: '2025',
    organizer: 'Ministry of Education & AICTE',
    tier: 'NATIONAL',
    award: 'National Participant',
    badgeColor: 'bg-neo-red text-white',
    description: 'Competed in India\'s premier national innovation competition, engineering practical software solutions for societal challenges.',
    certificateUrl: '/certificates/smart_india_hackathon_2025.pdf'
  },
  {
    title: 'OpenAI Academy × NxtWave Buildathon',
    year: '2026',
    organizer: 'OpenAI & NxtWave',
    tier: 'SPECIALIZED',
    award: 'Grand Finale Finalist',
    badgeColor: 'bg-neo-cyan text-[#121212]',
    description: 'Competed as a Finalist in the Grand Finale of India\'s Biggest GenAI Buildathon, building AI-powered solutions exploring LLM API integrations and prompt engineering.',
    certificateUrl: '/certificates/openai_academy_buildathon_2026.jpg'
  },
  {
    title: 'Murf AI Hackathon & Workshop',
    year: '2026',
    organizer: 'Murf AI & NIAT',
    tier: 'SPECIALIZED',
    award: 'Workshop Certificate',
    badgeColor: 'bg-neo-purple text-white',
    description: 'Completed the hands-on Murf.AI application building workshop, exploring speech synthesis APIs, voice agent workflows, and practical AI integrations.',
    certificateUrl: '/certificates/murf_ai_certificate_2026.jpg'
  },
  {
    title: 'Meta × Scaler School of Technology Hackathon',
    year: '2026',
    organizer: 'Meta & Scaler',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-green text-[#121212]',
    description: 'Collaborated on scalable full-stack application development and AI integrations under timed competition constraints.'
  },
  {
    title: 'NIAT TakeOver Hackathon',
    year: '2026',
    organizer: 'NIAT',
    tier: 'SPECIALIZED',
    award: 'Grand Finale Finalist',
    badgeColor: 'bg-[#121212] text-white',
    description: 'Successfully participated in the Takeover Hackathon, building under pressure and presenting end-to-end software prototypes.',
    certificateUrl: '/certificates/takeover_hackathon_2026.jpg'
  }
];

export interface SkillCategory {
  title: string;
  skills: string[];
  accent: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    skills: ['C++', 'JavaScript', 'Python', 'SQL'],
    accent: 'bg-neo-yellow'
  },
  {
    title: 'FRONTEND',
    skills: ['React.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
    accent: 'bg-neo-red text-white'
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Prisma ORM'],
    accent: 'bg-neo-cyan'
  },
  {
    title: 'DATABASES & AUTH',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'JWT', 'RBAC', 'Row Level Security'],
    accent: 'bg-neo-purple text-white'
  },
  {
    title: 'AI TOOLS & INTEGRATIONS',
    skills: ['Gemini API', 'Vapi', 'ElevenLabs', 'AssemblyAI', 'Murf AI', 'Lovable', 'Antigravity'],
    accent: 'bg-neo-green'
  },
  {
    title: 'DEVELOPER TOOLS',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Render'],
    accent: 'bg-neo-yellow'
  }
];

export const CURRENTLY_LEARNING = [
  'Advanced Data Structures & Algorithms in C++',
  'System Design & Backend Architectures',
  'Cloud Infrastructure & CI/CD Pipelines'
];

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  metric?: string;
  description: string;
  tags: string[];
  accent: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    period: '2025 — PRESENT',
    title: 'GENERAL SECRETARY — E-CELL',
    organization: 'Entrepreneurship Cell (E-Cell), Sanjay Ghodawat University',
    metric: 'Leadership',
    description: 'Led entrepreneurship activities, event coordination, and team operations at the university Entrepreneurship Cell.',
    tags: ['E-Cell SGU', 'General Secretary', 'Event Coordination', 'Team Operations'],
    accent: 'bg-neo-yellow'
  },
  {
    period: '2025 — 2029',
    title: 'B.TECH CSE (AI & DATA SCIENCE)',
    organization: 'Sanjay Ghodawat University, Kolhapur — NIAT Upskilling Program',
    metric: 'CGPA: 9.40',
    description: 'Pursuing B.Tech in Computer Science Engineering with specialization in Artificial Intelligence & Data Science. Building full-stack applications, backend APIs, and AI-powered systems.',
    tags: ['B.Tech CSE', 'AI & Data Science', 'CGPA 9.40', 'NIAT'],
    accent: 'bg-neo-cyan'
  },
  {
    period: '2025',
    title: 'HSC (12TH) — SHANTI JUNIOR COLLEGE',
    organization: 'Shanti Junior College',
    metric: '68%',
    description: 'Completed Higher Secondary Certificate examination.',
    tags: ['HSC', '12th Standard', '68%'],
    accent: 'bg-neo-green'
  },
  {
    period: '2023',
    title: 'SSC (10TH) — MODEL PUBLIC SCHOOL',
    organization: 'Model Public School',
    metric: '92%',
    description: 'Completed Secondary School Certificate examination with distinction.',
    tags: ['SSC', '10th Standard', '92%'],
    accent: 'bg-neo-paper text-[#121212]'
  },
  {
    period: 'ENTRANCE EXAMS',
    title: 'JEE MAIN & MHT-CET',
    organization: 'National Entrance Examinations',
    metric: 'JEE 91%ile | MHT-CET 95%ile',
    description: 'Secured 91st percentile in JEE Main and 95th percentile in MHT-CET entrance examinations.',
    tags: ['JEE Main 91%ile', 'MHT-CET 95%ile', 'Merit Entry'],
    accent: 'bg-neo-red text-white'
  }
];

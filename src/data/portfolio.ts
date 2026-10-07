// Central source of truth for all portfolio data
// All components import from here to ensure consistency and factual accuracy

export const PERSONAL = {
  name: 'Om Ajinath Khade',
  nameShort: 'OM KHADE',
  title: 'AI & Data Science Engineer',
  roleSubtitle: 'Full-Stack Developer & Agentic AI Builder',
  headline: 'AI & DATA SCIENCE ENGINEER — CRAFTING INTELLIGENT SYSTEMS & FULL-STACK APPS',
  tagline: 'Computer Science Engineering student (AI & DS) building multi-agent platforms, real-time web applications, and practical AI systems.',
  email: 'omkhade09@gmail.com',
  phone: '+91 7588021256',
  location: 'Kolhapur, Maharashtra, India',
  github: 'https://github.com/omkhade75',
  githubHandle: 'omkhade75',
  linkedin: 'https://www.linkedin.com/in/om-khade-596295372/',
  portfolio: 'https://omkhadeportfolio.onrender.com',
  resumePath: '/Om_Khade_Resume.pdf',
  profilePhoto: '/om_khade_profile.jpg',
} as const;

export const EDUCATION = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  university: 'Next Wave Institute of Advanced Technology (NIAT) × Sanjay Ghodawat University',
  universityShort: 'NIAT × SGU',
  sem1SGPA: '9.5',
  sem2SGPA: '9.32',
  currentSem: '3',
  mhtCetPercentile: '96',
  jeePercentile: '91',
} as const;

export const AVAILABILITY = {
  status: 'OPEN TO INTERNSHIP OPPORTUNITIES',
  targetRoles: [
    'Software Engineering Intern',
    'AI / ML Developer Intern',
    'Full-Stack Web Developer',
    'Backend Engineer (Python / Node.js)',
    'Generative AI / Agentic Systems Intern'
  ],
  modes: ['Remote', 'Hybrid', 'Relocation (Pune / Mumbai / Bengaluru)'],
} as const;

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'AI / Multi-Agent' | 'Full-Stack' | 'Voice AI' | 'Spatial WebGL';
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
    id: 'bizora',
    number: '01',
    title: 'BIZORA AI — AUTONOMOUS RETAIL ERP OS',
    tagline: 'Enterprise multi-tenant autonomous retail operating system and AI-driven ERP connecting shopkeepers, suppliers, and customers',
    category: 'AI / Multi-Agent',
    accentColor: 'bg-neo-yellow text-[#121212]',
    badge: 'FLAGSHIP ERP SYSTEM',
    description: 'An enterprise-grade autonomous retail operating system and multi-store ERP featuring 5 synchronized micro-frontend portals, a dual-database engine (PostgreSQL + MongoDB Atlas), an autonomous 45s AI self-healing daemon, and Vapi AI voice procurement in Hindi & English.',
    problem: 'Traditional retail in developing markets suffers from disconnected supply chains, high inventory shrinkage (up to 18%), manual pen-and-paper ledgers, and devastating cloud cold-start crashes during peak store checkout hours.',
    solution: 'Engineered an autonomous commerce ecosystem with 5 specialized role portals, sub-second POS barcode billing, an 8-playbook AI self-healing background daemon for 99.9% uptime, and autonomous multilingual AI voice calling for supplier replenishment.',
    architecture: [
      '5 Synchronized Micro-Frontends (Owner, Admin, Supplier, Customer, Web) built with React 19, TanStack Start, and Nitro engine.',
      'Centralized NestJS TypeScript REST engine equipped with an Exception Shield and 45s Autonomous AI Self-Healing fleet daemon.',
      'Polyglot persistence pairing Supabase PostgreSQL 17 (Prisma ORM) for ACID financial ledgers with MongoDB Atlas for high-throughput product catalogs.',
      'Conversational Voice AI (Vapi AI) in Hindi/English for hands-free supplier restocking, alongside WhatsApp Business API digital invoices.'
    ],
    engineeringHighlights: [
      'Engineered an Autonomous AI Self-Healing Daemon executing 8 automated playbooks (pool keepalive, memory sweep, auto-reconciliation) ensuring 99.9% uptime.',
      'Architected multi-tenant isolation with Role-Based Access Control (RBAC) and cryptographically signed 1-click administrative tenant impersonation.',
      'Integrated smartphone camera barcode scanning POS with automated WhatsApp receipt dispatch and thermal printing.',
      'Built Vapi AI multilingual voice agents autonomously dialing suppliers to restock critical low-inventory items.'
    ],
    tags: ['React 19', 'TanStack Start', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'MongoDB', 'Vapi AI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/omkhade75/omni-mind-vue',
    liveUrl: 'https://bizora-owner.onrender.com',
    demoCredentials: [
      { role: 'Store Owner', email: 'owner@gmail.com', pass: '123456789' },
      { role: 'Staff Demo', email: 'priya@gmail.com', pass: '123456789' }
    ],
    featured: true
  },
  {
    id: 'saffron',
    number: '02',
    title: 'SAFFRON — RESTAURANT OPERATING SYSTEM',
    tagline: 'Full-stack restaurant POS, Kitchen Display System (KDS) & dynamic UPI QR billing platform',
    category: 'Full-Stack',
    accentColor: 'bg-neo-red text-white',
    badge: 'PRODUCTION SYSTEM',
    description: 'A unified restaurant operating system designed to streamline billing, kitchen workflows, QR ordering, and role-based staff management with real-time order synchronization.',
    problem: 'Communication latency between table waitstaff, kitchen preparation stations, and billing desks causes order errors and table turnaround delays.',
    solution: 'Engineered a unified POS & KDS platform using TanStack Query server-state management, dynamic UPI QR billing, and role-based access control.',
    architecture: [
      'Frontend built with React 19, TypeScript, TanStack Router, and TanStack Query server-state caching.',
      'Node.js & Express.js REST API with JWT authentication and Bcrypt password security.',
      'Relational PostgreSQL schema via Prisma connecting Orders, MenuItems, and Modifiers.',
      'Role-Based Access Control (RBAC) segmenting endpoints for waitstaff, kitchen display, and admin dashboards.'
    ],
    engineeringHighlights: [
      'Implemented optimistic UI updates and server-state caching with TanStack Query for instant order tracking.',
      'Designed relational database schema connecting table sessions, menu modifiers, and bill settlements.',
      'Integrated dynamic UPI QR code generator for direct table-side payment collection.'
    ],
    tags: ['React 19', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'TanStack Query'],
    githubUrl: 'https://github.com/omkhade75/restorant1',
    liveUrl: 'https://restorant1-frontend.onrender.com/login',
    demoCredentials: [
      { role: 'Staff / Admin', email: 'admin@saffron.io', pass: '123456789' }
    ],
    featured: true
  },
  {
    id: 'agentrix',
    number: '03',
    title: 'AGENTRIX — AI VOICE AGENT PLATFORM',
    tagline: 'Conversational voice agent playground with audio streaming and frequency visualization',
    category: 'Voice AI',
    accentColor: 'bg-neo-cyan text-[#121212]',
    badge: 'GEN AI / VOICE',
    description: 'An AI voice orchestration playground allowing users to configure, test, and deploy customized voice assistants with variable system prompts, ElevenLabs TTS, and OpenAI streaming APIs.',
    problem: 'Traditional voice interfaces suffer from high latency when processing audio buffers sequentially through conventional HTTP request cycles.',
    solution: 'Built a streaming audio proxy with Web Audio API frequency analysis to pipe audio chunks seamlessly from TTS engines to frontend visualizers.',
    architecture: [
      'Node.js buffer streaming proxy piping audio chunks directly from ElevenLabs to frontend.',
      'Web Audio API AnalyserNode extracting live voice frequencies to drive dynamic audio waveform visualizers.',
      'Supabase PostgreSQL JSONB columns storing customized system prompts and agent parameters.',
      'Modular GUI voice playground built with React, TypeScript, and Framer Motion.'
    ],
    engineeringHighlights: [
      'Implemented Web Audio API AnalyserNode for real-time frequency spectrum analysis.',
      'Engineered low-latency audio stream buffer proxy in Node.js for smooth text-to-speech output.',
      'Configured customizable prompt parameters and voice selection presets.'
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'ElevenLabs', 'Supabase'],
    githubUrl: 'https://github.com/omkhade75/ai-calling-agent',
    liveUrl: 'https://agentixxai.lovable.app',
    featured: false
  },
  {
    id: 'medicare',
    number: '04',
    title: 'MEDICARE — HOSPITAL MANAGEMENT PLATFORM',
    tagline: 'Cloud-native hospital system with AI patient triage assistance and PostgreSQL RLS security',
    category: 'Full-Stack',
    accentColor: 'bg-neo-purple text-white',
    badge: 'HEALTHCARE CLOUD',
    description: 'A modern hospital management platform integrating AI-powered healthcare workflows, multi-role dashboards (doctor, patient, admin), appointment scheduling, and OpenAI triage assistance.',
    problem: 'Hospital administrative workflows face inefficiencies in patient queueing, appointment scheduling, and role-segregated medical records access.',
    solution: 'Created a serverless hospital OS with PostgreSQL Row Level Security (RLS) policies for patient privacy and automated AI pre-screening.',
    architecture: [
      'Supabase Edge Functions handling serverless compute for high-speed healthcare operations.',
      'PostgreSQL Row Level Security (RLS) ensuring strict doctor/patient data confidentiality.',
      'OpenAI triage assistant guiding patient symptom pre-screening and appointment classification.',
      'Multi-tenant dashboard layouts engineered with React 18, TypeScript, and Tailwind CSS.'
    ],
    engineeringHighlights: [
      'Structured PostgreSQL Row Level Security (RLS) policies for granular multi-role privacy.',
      'Deployed serverless backend functions for appointment bookings and medical history logs.',
      'Integrated AI triage assistant for intelligent initial symptom categorization.'
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Edge Functions', 'OpenAI API'],
    githubUrl: 'https://github.com/omkhade75/hospital_man',
    liveUrl: 'https://hospital-man-fronted.onrender.com/',
    featured: false
  },
  {
    id: 'nexus-os',
    number: '05',
    title: 'NEXUS OS — 3D SPATIAL WEBGL INTERFACE',
    tagline: 'Interactive 3D WebGL spatial environment with real-time parallax rendering and voice control',
    category: 'Spatial WebGL',
    accentColor: 'bg-[#121212] text-white',
    badge: '3D GRAPHICS',
    description: 'An immersive WebGL and React-powered spatial environment featuring 3D mesh rendering, ambient lighting, Web Speech voice command execution, and telemetry visualizers.',
    problem: 'Exploring modern 3D browser capabilities and voice-driven user interface models beyond static 2D web pages.',
    solution: 'Developed an interactive Three.js 3D canvas with dynamic camera controls, voice command integration, and interactive widgets.',
    architecture: [
      'Three.js / React Three Fiber rendering 3D geometric meshes synced with cursor vectors.',
      'Web Speech Recognition API parsing voice commands to execute virtual workspace actions.',
      'Dynamic spatial theme switching and audio-reactive visualization nodes.',
      'Modular client-side state machine managing spatial window states.'
    ],
    engineeringHighlights: [
      'Engineered interactive 3D particle and mesh scenes using Three.js.',
      'Integrated browser Web Speech API for voice command interpretation.',
      'Implemented responsive canvas viewport resizing with optimized frame rates.'
    ],
    tags: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Web Speech API'],
    githubUrl: 'https://github.com/omkhade75/nexus-os',
    liveUrl: 'https://nexus-os-1p1x.onrender.com',
    featured: false
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
}

export const HACKATHONS: HackathonItem[] = [
  {
    title: 'Adobe University Hackathon',
    year: '2026',
    organizer: 'Adobe & Unstop',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-red text-white',
    description: 'Participated in the prestigious Adobe University Hackathon organised by Adobe, developing creative software and algorithmic solutions.'
  },
  {
    title: 'NASA International Space Apps Challenge',
    year: '2025',
    organizer: 'NASA',
    tier: 'RECOGNITION',
    award: 'Galactic Problem Solver',
    badgeColor: 'bg-neo-yellow text-[#121212]',
    description: 'Collaborated on technology-driven data solutions addressing Earth and space challenges in NASA\'s global innovation competition.'
  },
  {
    title: 'Smart India Hackathon (SIH 2025)',
    year: '2025',
    organizer: 'Ministry of Education & AICTE',
    tier: 'NATIONAL',
    award: 'National Participant',
    badgeColor: 'bg-neo-red text-white',
    description: 'Selected to compete in India\'s premier national innovation competition, engineering practical software solutions for societal challenges.'
  },
  {
    title: 'OpenAI Academy × NxtWave Buildathon',
    year: '2026',
    organizer: 'OpenAI & NxtWave',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-cyan text-[#121212]',
    description: 'Built AI-powered solutions exploring Generative AI orchestration, LLM API integrations, and prompt engineering patterns.'
  },
  {
    title: 'Murf AI Hackathon',
    year: '2026',
    organizer: 'Murf AI',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-purple text-white',
    description: 'Engineered creative applications integrating speech synthesis APIs, voice workflows, and automated audio pipelines.'
  },
  {
    title: 'Meta × Scaler Hackathon',
    year: '2026',
    organizer: 'Meta & Scaler',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-green text-[#121212]',
    description: 'Collaborated on scalable full-stack application development and generative AI integrations under timed competition constraints.'
  },
  {
    title: 'Takeover Hackathon',
    year: '2026',
    organizer: 'NIAT',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-[#121212] text-white',
    description: 'Built and presented end-to-end software prototypes demonstrating algorithmic problem solving and rapid execution.'
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
    skills: ['C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL'],
    accent: 'bg-neo-yellow'
  },
  {
    title: 'FULL-STACK & BACKEND',
    skills: ['React JS', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Tailwind CSS'],
    accent: 'bg-neo-red text-white'
  },
  {
    title: 'DATABASES & ORM',
    skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Supabase', 'MySQL'],
    accent: 'bg-neo-cyan'
  },
  {
    title: 'AI & EMERGING TECH',
    skills: ['Multi-Agent AI', 'LLM APIs (OpenAI)', 'RAG Pipelines', 'ElevenLabs Voice', 'n8n Workflows', 'Three.js / WebGL'],
    accent: 'bg-neo-purple text-white'
  },
  {
    title: 'DEVELOPER TOOLS',
    skills: ['Git & GitHub', 'Postman', 'Vite', 'VS Code', 'Render / Vercel', 'Linux / Bash'],
    accent: 'bg-neo-green'
  }
];

export const CURRENTLY_LEARNING = [
  'Advanced Data Structures & Algorithms in C++',
  'System Design & Distributed Backend Architectures',
  'Production LLM Evaluation & Agentic Frameworks',
  'Cloud Infrastructure & CI/CD Pipelines'
];

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  badgeColor: string;
  description: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'adobe-hackathon-2026',
    title: 'Adobe University Hackathon',
    issuer: 'Adobe × Unstop',
    year: '2026',
    category: 'Global Hackathon',
    badgeColor: 'bg-neo-red text-white',
    description: 'Certificate of Participation in the Adobe University Hackathon organised by Adobe on Unstop platform.'
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025',
    issuer: 'Ministry of Education & AICTE',
    year: '2025',
    category: 'National Hackathon',
    badgeColor: 'bg-neo-red text-white',
    description: 'Certificate of National Participation in Smart India Hackathon 2025, organized by the Ministry of Education Innovation Cell.'
  },
  {
    id: 'nasa-spaceapps',
    title: 'NASA International Space Apps Challenge',
    issuer: 'NASA',
    year: '2025',
    category: 'Global Hackathon',
    badgeColor: 'bg-neo-yellow text-[#121212]',
    description: 'Galactic Problem Solver certificate awarded for participating in the NASA International Space Apps Challenge.'
  },
  {
    id: 'openai-academy',
    title: 'Generative AI & LLM Systems',
    issuer: 'OpenAI Academy × NxtWave',
    year: '2026',
    category: 'AI / ML',
    badgeColor: 'bg-neo-cyan text-[#121212]',
    description: 'Certification covering Generative AI fundamentals, Large Language Models, and agent orchestration patterns.'
  },
  {
    id: 'niat-python-dsa',
    title: 'Advanced Programming & Algorithmic Foundations',
    issuer: 'Next Wave Institute of Advanced Technology',
    year: '2024',
    category: 'Core Computer Science',
    badgeColor: 'bg-neo-green text-[#121212]',
    description: 'Certified in Python, Data Structures, and Algorithmic Logic Building with academic distinction.'
  },
  {
    id: 'fullstack-web',
    title: 'Full-Stack Web Development Mastery',
    issuer: 'NIAT Engineering Program',
    year: '2025',
    category: 'Web Engineering',
    badgeColor: 'bg-neo-purple text-white',
    description: 'Hands-on certification covering React, Node.js REST APIs, PostgreSQL schemas, and decoupled application architectures.'
  },
  {
    id: 'competitive-dsa',
    title: 'Data Structures & Problem Solving in C++',
    issuer: 'NIAT Technical Cell',
    year: '2025',
    category: 'Algorithms',
    badgeColor: 'bg-[#121212] text-white',
    description: 'Certification for problem-solving across core DSA concepts: Arrays, Hashing, Two Pointers, Trees, and Recursion.'
  }
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
    title: 'FOUNDING GENERAL SECRETARY — E-CELL',
    organization: 'Entrepreneurship Cell (E-Cell) × Sanjay Ghodawat University',
    metric: 'Executive Leadership',
    description: 'Spearheading the university Entrepreneurship Cell to cultivate startup culture, organize hackathons, innovation summits, founder mentorship sessions, and guide student ventures into incubation.',
    tags: ['E-Cell SGU', 'Founding General Secretary', 'Startup Incubation', 'Hackathons & Summits', 'Ecosystem Building'],
    accent: 'bg-neo-yellow'
  },
  {
    period: '2025 — CURRENT (SEM 3)',
    title: 'ADVANCED BACKEND & AGENTIC AI SYSTEMS',
    organization: 'NIAT × Sanjay Ghodawat University',
    metric: 'Ongoing',
    description: 'Deepening engineering depth across Node.js & Express REST APIs, Advanced Data Structures & Algorithms in C++, and specialized LLM applications.',
    tags: ['Advanced DSA (C++)', 'Node.js', 'Express.js', 'Agentic AI', 'PostgreSQL'],
    accent: 'bg-neo-cyan'
  },
  {
    period: '2025 — SEMESTER 2',
    title: 'CORE COMPUTER SCIENCE & DATABASES',
    organization: 'NIAT × Sanjay Ghodawat University',
    metric: '9.32 SGPA',
    description: 'Mastered Data Structures & Algorithms in C++, React JS, relational databases (SQL, PostgreSQL, Prisma), and full-stack system architecture.',
    tags: ['C++ DSA', 'React JS', 'PostgreSQL', 'Prisma ORM', '9.32 SGPA'],
    accent: 'bg-neo-green'
  },
  {
    period: '2024 — SEMESTER 1',
    title: 'FOUNDATION PROGRAMMING & ACADEMIC EXCELLENCE',
    organization: 'NIAT × Sanjay Ghodawat University',
    metric: '9.5 SGPA',
    description: 'Started B.Tech journey with Python, HTML5, CSS3, Tailwind CSS, algorithmic problem solving, and GenAI automation workflows.',
    tags: ['Python', 'Tailwind CSS', 'React JS', 'Logic Building', '9.5 SGPA'],
    accent: 'bg-neo-paper text-[#121212]'
  },
  {
    period: '2024 — B.TECH ADMISSION',
    title: 'JOINED NIAT & SANJAY GHODAWAT UNIVERSITY',
    organization: 'B.Tech in Artificial Intelligence & Data Science',
    metric: 'MHT-CET 96%ile | JEE 91%ile',
    description: 'Commenced B.Tech in AI & DS after securing 96th percentile in MHT-CET and 91st percentile in JEE Main entrance exams.',
    tags: ['B.Tech AI & DS', 'MHT-CET 96%ile', 'JEE 91%ile', 'Merit Entry'],
    accent: 'bg-neo-red text-white'
  }
];

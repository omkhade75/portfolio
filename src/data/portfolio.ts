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

export interface ProjectMetric {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI Platform';
  accentColor: string;
  badge: string;
  statusBadge?: string;
  description: string;
  problem: string;
  solution: string;
  keyMetrics?: ProjectMetric[];
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
    title: 'BIZORA AI — AUTONOMOUS MULTI-TENANT RETAIL ERP & DECISION OS',
    tagline: 'Enterprise-grade, multi-tenant autonomous retail ERP featuring 5 micro-frontend portals, high-velocity POS billing, dual-database architecture, and Gemini 1.5 AI business intelligence.',
    category: 'Full-Stack',
    accentColor: 'bg-neo-yellow text-[#121212]',
    badge: 'FLAGSHIP ENTERPRISE ERP',
    statusBadge: 'LIVE PRODUCTION',
    description: 'Architected a scalable Turbo Monorepo delivering 5 specialized role portals (Store Owner, Super Admin, Supplier, Customer, Web Accounting). Engineered with polyglot persistence (Supabase PostgreSQL + MongoDB Atlas), autonomous self-healing daemons, Vapi AI voice calling, and automated WhatsApp billing.',
    problem: 'Traditional retail operations suffer from fragmented tools, double-entry errors, inventory mismatches during peak flash sales, and server crashes from unhandled microservice exceptions.',
    solution: 'Engineered an enterprise multi-tenant Turbo Monorepo with 5 micro-frontend SPAs, polyglot persistence (PostgreSQL 17 + MongoDB Atlas), crash-immune NestJS APIs, autonomous self-healing daemons, and Gemini 1.5 AI voice decision support.',
    keyMetrics: [
      { icon: '⚡', title: '5 Specialized Micro-Portals', subtitle: 'Complete business cycle coverage' },
      { icon: '🛡️', title: '99.9% Live Uptime', subtitle: '5+ days zero-crash on Render' },
      { icon: '🗄️', title: 'Dual Cloud Databases', subtitle: 'PostgreSQL 17 + MongoDB Atlas' },
      { icon: '🧠', title: 'Gemini 1.5 + Vapi AI', subtitle: 'AI reasoning + voice calling' }
    ],
    architecture: [
      'Polyglot Persistence: Supabase PostgreSQL 17 for ACID-compliant double-entry financial ledgers + MongoDB Atlas for high-throughput product catalogs & telemetry.',
      'Enterprise Multi-Tenancy & Security: Strict Row-Level Security (RLS) and JWT claim-based tenant isolation ensuring zero cross-tenant data leaks.',
      'Micro-Frontend Monorepo: 5 decoupled SPAs (Owner POS, Super Admin, Supplier Hub, Customer Storefront, Web Accounting) with sub-80ms edge latency.',
      'Autonomous Self-Healing Daemon: Background watchdog that auto-recovers database connection pools, mitigates memory surges, and guarantees 99.9% uptime.'
    ],
    engineeringHighlights: [
      'Polyglot Persistence: Supabase PostgreSQL 17 for ACID-compliant double-entry ledgers + MongoDB Atlas for high-throughput product catalogs & telemetry.',
      'Enterprise Multi-Tenancy & Security: Strict Row-Level Security (RLS) and JWT claim-based tenant isolation ensuring zero cross-tenant data leaks.',
      'Micro-Frontend Monorepo: 5 decoupled SPAs (Owner POS, Super Admin, Supplier Hub, Customer Storefront, Web Accounting) with sub-80ms edge latency.',
      'Autonomous Self-Healing Daemon: Background watchdog that auto-recovers database connection pools, mitigates memory surges, and guarantees 99.9% uptime.',
      'Gemini 1.5 Flash + Vapi AI Voice: Autonomous COO decision copilot with offline heuristic fallback, automated WhatsApp billing via Resend and WhatsApp API.'
    ],
    tags: [
      'React 19',
      'NestJS',
      'TypeScript',
      'Supabase (PostgreSQL 17)',
      'MongoDB Atlas',
      'Prisma ORM',
      'Google Gemini 1.5',
      'Vapi AI Voice',
      'Turbo Monorepo',
      'Tailwind CSS'
    ],
    githubUrl: 'https://github.com/omkhade75/omni-mind-vue',
    liveUrl: 'https://bizora-owner.onrender.com',
    demoCredentials: [
      { role: 'Store Owner', email: 'owner@bizora.com', pass: 'demo123' },
      { role: 'Super Admin', email: 'admin@bizora.com', pass: 'demo123' }
    ],
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
    keyMetrics: [
      { icon: '⚡', title: 'Multi-Role SPAs', subtitle: 'Doctors, nurses, patients, admins' },
      { icon: '🛡️', title: 'PostgreSQL RLS', subtitle: 'Strict row-level confidentiality' },
      { icon: '🗄️', title: 'Supabase Serverless', subtitle: 'Real-time bed & appointment booking' },
      { icon: '🧠', title: 'AI Voice & Speech', subtitle: 'Clinical voice records & PDF reporting' }
    ],
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
    statusBadge: 'SOURCE REPO',
    description: 'Built a full-stack platform for configuring and managing AI voice agents, including onboarding, settings, phone routing and browser testing.',
    problem: 'Businesses need a streamlined way to configure, test, and deploy AI voice agents without complex infrastructure setup.',
    solution: 'Developed modular Express APIs with reusable React components, JWT authentication, voice/AI service integrations, and browser-based voice-agent testing.',
    keyMetrics: [
      { icon: '⚡', title: 'Voice Agent Hub', subtitle: 'Rapid voice model provisioning' },
      { icon: '🛡️', title: 'JWT Authentication', subtitle: 'Secure RBAC token authorization' },
      { icon: '🗄️', title: 'Modular Express', subtitle: 'Low-latency telephony routing' },
      { icon: '🧠', title: 'In-Browser Testing', subtitle: 'Direct real-time audio testing' }
    ],
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
  },
  {
    id: 'orbit-ai',
    number: '04',
    title: 'ORBIT AI — AUTONOMOUS LOCAL AI WORKSTATION',
    tagline: 'Offline-first, polyglot 3-tier engineering workstation with autonomous coding agent, document RAG & hardware thermal copilot',
    category: 'AI Platform',
    accentColor: 'bg-neo-green text-[#121212]',
    badge: 'SYSTEMS & LOCAL AI',
    statusBadge: '100% LOCAL OFFLINE',
    description: 'Architected a 100% offline, polyglot 3-tier local engineering platform running on the host machine with zero cloud API costs, Windows kernel thermal governance (<48°C idle), and hardcoded zero-access privacy shield.',
    problem: 'Cloud AI tools introduce severe code privacy risks, high monthly API token costs, and high electron compositor overhead that causes thermal throttling and battery drain on developer machines.',
    solution: 'Engineered an offline-first 3-tier architecture (React 18 client, Node 24 Express gateway with native SQLite WAL, Python 3.13 FastAPI) with Ollama CUDA acceleration on NVIDIA RTX 3050 and OS-level privacy boundaries.',
    keyMetrics: [
      { icon: '⚡', title: '100% Offline Workstation', subtitle: 'Zero recurring cloud API costs' },
      { icon: '🛡️', title: '<48°C Thermal Guard', subtitle: 'Windows PSAPI memory recovery' },
      { icon: '🗄️', title: 'Embedded SQLite (WAL)', subtitle: 'Node 24 native adapter & 57 tests' },
      { icon: '🧠', title: 'RTX 3050 CUDA 13.1', subtitle: 'Dedicated local GPU inference' }
    ],
    architecture: [
      'Client Layer (React 18 + Vite): 12 specialized engineering modules with pure OLED black (#000000) design system dropping compositor GPU load to 0%.',
      'Gateway Layer (Node.js 24 + Express): Non-blocking V8 event loop with embedded SQLite 3 in WAL mode via node:sqlite native adapter (PRAGMA journal_mode = WAL, PRAGMA busy_timeout = 5000).',
      'AI & Systems Layer (Python 3.13 + FastAPI): Document RAG engine with TF-IDF vector similarity and autonomous sandboxed workspace generator.',
      'Hardware Controller & Thermal Governance: Direct ctypes Windows PSAPI (EmptyWorkingSet) memory recovery and psutil priority demotion stabilizing idle thermals under 48°C and <10W.',
      'Zero-Access Privacy Shield & Offline Inference: Strict OS path-screening boundary blocking access to sensitive directories (.ssh, .aws, browser credentials), offloading local models to NVIDIA RTX 3050 GPU via CUDA 13.1.'
    ],
    engineeringHighlights: [
      'Windows PSAPI Memory Recovery: Directly invokes ctypes.windll.psapi.EmptyWorkingSet across background processes, flushing inactive physical memory pages and stabilizing thermals below 48°C.',
      'Zero-Access Privacy Shield: Built an OS path-screening regex guard intercepting all file system operations to hard-block AI access to .ssh, .aws, browser credentials, and personal folders.',
      'Resilient Embedded Persistence: Implemented Node 24 native SQLite adapter with Write-Ahead Logging (WAL) and automatic busy-timeout retries, verified with 57 automated integration tests.',
      'Sandboxed Execution & AST Validation: Implemented isolated execution for C++ and Python with Docker containers, timeout enforcement, and Python ast parsing for Google Colab-compatible notebooks.',
      'GPU-Accelerated Local Inference: Offloaded local models (Qwen 3.5 4B) 100% to NVIDIA RTX 3050 Laptop GPU (6GB VRAM) via Ollama and CUDA 13.1 with 120-second cold-start handling.'
    ],
    tags: ['React 18', 'Node.js 24', 'Python 3.13', 'FastAPI', 'Express.js', 'SQLite (WAL)', 'Ollama (CUDA)', 'Windows PSAPI', 'Docker', 'C++'],
    githubUrl: 'https://github.com/omkhade75/prototype',
    featured: true
  },
  {
    id: 'saffron-os',
    number: '05',
    title: 'SAFFRON — ROYAL INDIAN DINING & GASTRONOMIC OS',
    tagline: 'Full-stack, two-tier restaurant platform uniting a 3D dining storefront, contactless QR ordering, real-time POS & autonomous load-resilient gateway',
    category: 'Full-Stack',
    accentColor: 'bg-neo-orange text-white',
    badge: 'HOSPITALITY OS & 3D STOREFRONT',
    statusBadge: 'LIVE PRODUCTION',
    description: 'Architected and deployed Saffron, a production-grade restaurant operating system serving a 100-dish royal culinary catalog, 16-table contactless QR ordering, high-speed cashier POS terminal, kitchen display (KDS), and telemetry gateway on a modern SERN stack.',
    problem: 'Restaurant operations experience severe bottlenecks during rush hours: table ordering delays, slow cashier billing, kitchen communication breakdowns, and database connection pool exhaustion under concurrent guest QR scans.',
    solution: 'Engineered a decoupled two-tier architecture on Render pairing an ambient Three.js 3D client SPA with an autonomous load-resilient Express REST API featuring sub-15ms LRU caching, zero-crash process watchdog, 30s self-healing DB heartbeats, and restaurant-aware 3,500 req/15min smart rate limiting.',
    keyMetrics: [
      { icon: '⚡', title: 'Sub-15ms Hot Cache', subtitle: 'In-memory LRU cuts DB reads 80%' },
      { icon: '🍽️', title: '16 Table QR Terminals', subtitle: 'Encrypted tokens (/table/1-16)' },
      { icon: '🛡️', title: 'Zero-Crash Watchdog', subtitle: 'Process exception trapping & 30s recovery' },
      { icon: '🎨', title: 'Three.js Ambient 3D', subtitle: 'Interactive WebGL hearth embers canvas' }
    ],
    architecture: [
      'Two-Tier Decoupled Architecture: Static client SPA deployed on global CDN paired with dedicated Express REST API on Render via render.yaml.',
      'Autonomous Load Agent: Sub-15ms in-memory LRU cache reducing database load by over 80%, zero-crash process exception watchdog, and 30s self-healing DB heartbeat.',
      'Restaurant-Aware Smart Rate Limiter: Generous 3,500 req/15min allowance accommodating 50+ guests on shared Wi-Fi, with automatic exemption for staff POS/KDS JWT tokens.',
      'Strict Relational Persistence (ACID): Supabase PostgreSQL with Prisma ORM ensuring strict relational integrity across orders, tables, staff, and pantry inventory.'
    ],
    engineeringHighlights: [
      'Autonomous Load Agent & LRU Caching: Implemented an in-memory cache slashing database read queries by 80% and maintaining sub-15ms response times during simulated rush-hour surges.',
      'Zero-Crash Process Watchdog & Self-Healing: Process-level runtime exception trapping preventing mid-service downtime with a 30s exponential backoff PostgreSQL heartbeat.',
      'Restaurant-Aware Smart Rate Limiting: Configured 3,500 req/15min threshold supporting 50+ guests on a single restaurant Wi-Fi router with JWT bypass for staff workstations.',
      'Three.js WebGL Ambient Canvas: Built an interactive WebGL canvas rendering warm hearth embers, 100-dish culinary catalog, and dual luxury theme support.',
      'Decoupled Cloud Infrastructure: Engineered two-tier deployment on Render using Infrastructure as Code (render.yaml) with Supabase connection pooling.'
    ],
    tags: [
      'React 19',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Supabase (PostgreSQL)',
      'Prisma ORM',
      'Three.js (WebGL)',
      'TanStack Router',
      'Tailwind CSS',
      'Render'
    ],
    githubUrl: 'https://github.com/omkhade75/restorant1',
    liveUrl: 'https://restorant1-frontend.onrender.com',
    demoCredentials: [
      { role: 'Admin', email: 'om123@gmail.com', pass: '123456789' },
      { role: 'Cashier POS', email: 'cashier@saffron.in', pass: '123456789' },
      { role: 'Kitchen KDS', email: 'cook@saffron.in', pass: '123456789' }
    ],
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
    title: 'Adobe University Hackathon',
    year: '2026',
    organizer: 'Adobe & Unstop',
    tier: 'SPECIALIZED',
    award: 'Participant',
    badgeColor: 'bg-neo-red text-white',
    description: 'Participated in the Adobe University Hackathon organised by Adobe & Unstop, solving competitive software engineering challenges.',
    certificateUrl: '/certificates/adobe_hackathon_2026.pdf'
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

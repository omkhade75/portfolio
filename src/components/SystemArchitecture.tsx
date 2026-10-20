import React, { useState } from 'react';
import { CheckCircle2, Cpu, Zap, Database, Server, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './Motion';

interface SystemLayer {
  name: string;
  tech: string;
  icon: React.ComponentType<{ className?: string }>;
  detail: string;
  problemSolved?: string;
  systemImpact?: string;
}

interface SystemArchitectureData {
  id: string;
  systemName: string;
  role: string;
  badge: string;
  accent: string;
  problem: string;
  solution: string;
  layers: SystemLayer[];
  impact: string;
}

export const SystemArchitecture: React.FC = () => {
  const [selectedSystemIndex, setSelectedSystemIndex] = useState<number>(0);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const systems: SystemArchitectureData[] = [
    {
      id: 'bizora',
      systemName: 'BIZORA AI — Autonomous Multi-Tenant Retail ERP & Decision OS',
      role: 'Enterprise Multi-Tenant Retail OS & Decision Intelligence',
      badge: 'FLAGSHIP ENTERPRISE SYSTEM',
      accent: 'bg-neo-yellow text-[#121212]',
      problem: 'Fragmented tools causing slow checkouts, inventory mismatches, double-entry discrepancies, and server crashes during peak flash sales.',
      solution: 'Architected a multi-tenant Turbo Monorepo delivering 5 micro-frontend SPAs, NestJS microservices, dual-database persistence, autonomous self-healing daemons, and Gemini 1.5 AI voice copilot.',
      layers: [
        {
          name: 'MICRO-FRONTEND SUITE',
          tech: 'React 19 • Vite • TanStack Router • Tailwind CSS',
          icon: Globe,
          detail: '5 dedicated SPAs (Owner ERP/POS, Admin Governance, Supplier Dispatch, Customer 10-min Storefront, and Web Accounting) preventing monolithic bundle bloat.',
          problemSolved: 'Fragmented tools causing slow checkouts, inventory mismatches, and messy paperwork.',
          systemImpact: 'Instant barcode scanning, real-time inventory deductions, and sub-100ms UI response.'
        },
        {
          name: 'CORE REST ENGINE & AUTH',
          tech: 'NestJS • JWT • RBAC • Resend & WhatsApp API',
          icon: Server,
          detail: 'Centralized modular microservices handling POS transactions, transactional email dispatch via Resend, and automated WhatsApp billing alerts.',
          problemSolved: 'Vulnerable monolithic endpoints and untracked multi-tenant billing alerts.',
          systemImpact: 'Global crash-immunity filters that absorb unhandled exceptions, preventing server downtime.'
        },
        {
          name: 'DUAL-DATABASE PERSISTENCE',
          tech: 'PostgreSQL 17 (Prisma) + MongoDB Atlas Cloud',
          icon: Database,
          detail: 'Relational database for transactions, stock balances, and double-entry accounting paired with MongoDB Atlas for dynamic schemas, audit logs, and telemetry.',
          problemSolved: 'Race conditions and financial discrepancies in concurrent transactions during peak sales.',
          systemImpact: 'Atomic transactions prevent race conditions during flash sales; zero financial discrepancies.'
        },
        {
          name: 'AI & VOICE INTELLIGENCE',
          tech: 'Google Gemini 1.5 Flash • Vapi AI Voice • Heuristic Fallback',
          icon: Cpu,
          detail: 'Autonomous COO decision copilot providing margin analysis and automated purchase orders. Vapi AI voice agents for supplier confirmation calls.',
          problemSolved: 'Manual supplier follow-ups, slow inventory forecasting, and downtime during external AI cloud outages.',
          systemImpact: 'Includes an offline heuristic fallback engine that keeps generating business advice even during Google API network outages.'
        }
      ],
      impact: '99.9% uptime verification, instant barcode scanning with sub-100ms UI response, atomic ledger consistency, and zero cross-tenant data leaks.'
    },
    {
      id: 'medicare',
      systemName: 'MediCare Hospital Management System',
      role: 'Multi-Role Healthcare Platform',
      badge: 'HEALTHCARE SYSTEM',
      accent: 'bg-neo-purple text-white',
      problem: 'Hospital workflows face inefficiencies in patient registration, appointment scheduling, and role-segregated medical records access.',
      solution: 'Built a multi-role hospital platform with Supabase Auth, PostgreSQL Row Level Security, server-side functions, and AI integrations.',
      layers: [
        {
          name: 'HOSPITAL DASHBOARD',
          tech: 'React + Vite + Tailwind CSS',
          icon: Globe,
          detail: 'Responsive role-based dashboards for doctors, nurses, patients, and administrators.',
          problemSolved: 'Fragmented patient records and siloed communication across hospital departments.',
          systemImpact: 'Unified real-time clinical dashboards with role-segregated navigation.'
        },
        {
          name: 'AUTH & SECURITY',
          tech: 'Supabase Auth + PostgreSQL RLS',
          icon: Server,
          detail: 'Supabase Auth with PostgreSQL Row Level Security for strict data confidentiality.',
          problemSolved: 'Unauthorized cross-role access to sensitive patient clinical and billing data.',
          systemImpact: 'Granular Row Level Security guaranteeing HIPAA/data protection alignment.'
        },
        {
          name: 'SERVER FUNCTIONS',
          tech: 'Supabase Server-Side Functions',
          icon: Database,
          detail: 'Server-side functions for appointment bookings, ward management, and reporting.',
          problemSolved: 'Race conditions during bed occupancy bookings and emergency assignments.',
          systemImpact: 'Atomic transactional allocation for hospital wards and appointment slots.'
        },
        {
          name: 'AI INTEGRATIONS',
          tech: 'AI Voice & Chat + PDF Reports',
          icon: Cpu,
          detail: 'AI voice/chat integrations and automated PDF report generation.',
          problemSolved: 'Slow manual discharge summaries and clinical documentation backlogs.',
          systemImpact: 'Instant automated PDF medical reports and hands-free voice notes.'
        }
      ],
      impact: 'Comprehensive hospital management with secure multi-role access and AI-powered workflows.'
    },
    {
      id: 'agentrix',
      systemName: 'Agentrix — Voice Agent Platform',
      role: 'AI Voice Agent Management',
      badge: 'VOICE AI PLATFORM',
      accent: 'bg-neo-cyan text-[#121212]',
      problem: 'Businesses need a streamlined way to configure, test, and deploy AI voice agents.',
      solution: 'Built modular Express APIs with reusable React components, JWT authentication, and browser-based voice-agent testing.',
      layers: [
        {
          name: 'VOICE UI',
          tech: 'React + Reusable Components',
          icon: Globe,
          detail: 'Modular React interface for agent onboarding, settings, phone routing, and testing.',
          problemSolved: 'Complex configuration screens preventing non-technical operators from creating voice agents.',
          systemImpact: 'Sub-minute voice agent provisioning and prompt tuning workflows.'
        },
        {
          name: 'API LAYER',
          tech: 'Node.js + Express + JWT',
          icon: Server,
          detail: 'Modular Express APIs with JWT authentication for secure agent management.',
          problemSolved: 'Unauthenticated API consumption and slow telephony dispatch.',
          systemImpact: 'High-throughput stateless API endpoints with JWT session verification.'
        },
        {
          name: 'DATA STORE',
          tech: 'Supabase',
          icon: Database,
          detail: 'Supabase backend storing agent configurations and session data.',
          problemSolved: 'Unstructured voice logs and unindexed prompt variations.',
          systemImpact: 'Persistent agent configurations with real-time session history sync.'
        },
        {
          name: 'VOICE SERVICES',
          tech: 'AI Voice Integrations',
          icon: Cpu,
          detail: 'Voice/AI service integrations for browser-based agent testing.',
          problemSolved: 'Expensive telephony charges during pre-production development and test cycles.',
          systemImpact: 'Zero-cost browser-based simulated audio test environment.'
        }
      ],
      impact: 'End-to-end platform for configuring, testing, and managing enterprise AI voice agents.'
    },
    {
      id: 'orbit-ai',
      systemName: 'ORBIT AI — Autonomous Local Workstation & Systems Copilot',
      role: '100% Offline AI Workstation & Systems Engineering Copilot',
      badge: 'SYSTEMS & LOCAL AI',
      accent: 'bg-neo-green text-[#121212]',
      problem: 'Cloud AI token billing, code privacy leakage risks, and background compositor CPU/GPU thermal spikes.',
      solution: 'Offline 3-tier workstation (React 18, Node 24 Express + native SQLite WAL, Python 3.13 FastAPI) with Ollama CUDA 13.1 on RTX 3050 and Windows PSAPI kernel recovery.',
      layers: [
        {
          name: 'CLIENT WORKSPACE',
          tech: 'React 18 • Vite • OLED Pure Black #000000',
          icon: Globe,
          detail: '12 specialized engineering modules engineered with pure OLED black (#000000) design system eliminating CSS repaint loops for 0% idle GPU utilization.',
          problemSolved: 'Heavy electron animations causing high battery drain and continuous compositor repaints.',
          systemImpact: 'Drops browser compositor idle GPU and CPU usage to near 0%.'
        },
        {
          name: 'EMBEDDED GATEWAY',
          tech: 'Node.js 24 • Express • node:sqlite (WAL Mode)',
          icon: Server,
          detail: 'Non-blocking V8 event loop API gateway with embedded SQLite in WAL mode (PRAGMA busy_timeout = 5000), eliminating native C++ build errors.',
          problemSolved: 'Database write locks under concurrent automated test suites and fragile native compilation.',
          systemImpact: 'Non-blocking concurrent reads during write transactions, verified by 57 automated tests.'
        },
        {
          name: 'AI & SANDBOX ENGINE',
          tech: 'Python 3.13 • FastAPI • TF-IDF Vector RAG',
          icon: Cpu,
          detail: 'Local document RAG engine with citation tracking, AST syntax validation, and Docker-isolated C++ and Python execution environments.',
          problemSolved: 'Hallucinated documentation and unsafe un-sandboxed code execution on host machines.',
          systemImpact: 'Isolated multi-language execution with timeout protection and Colab-compatible notebook generation.'
        },
        {
          name: 'HARDWARE & PRIVACY GUARD',
          tech: 'Windows PSAPI • psutil • Ollama CUDA 13.1',
          icon: Database,
          detail: 'Direct ctypes PSAPI EmptyWorkingSet memory recovery and process priority demotion keeping temperatures <48°C, with regex privacy guard blocking .ssh/.aws.',
          problemSolved: 'Laptop thermal throttling and risk of local models reading sensitive personal credentials.',
          systemImpact: 'Stabilizes discrete GPU/CPU thermals under 48°C idle and enforces zero-access personal data boundary.'
        }
      ],
      impact: '100% offline uptime, zero recurring cloud API costs, idle GPU thermal stabilization under 48°C, and hardcoded privacy shield.'
    }
  ];


  const currentSystem = systems[selectedSystemIndex];
  const currentLayer = currentSystem.layers[selectedStepIndex];
  const LayerIcon = currentLayer.icon;

  return (
    <section id="ai-sandbox" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="02 // SYSTEM DESIGN"
          badge="DATA FLOW & BACKEND TOPOLOGY"
          badgeColor="bg-neo-cyan text-[#121212]"
          title={
            <>
              SYSTEM ARCHITECTURE <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">LAB.</span>
            </>
          }
          description="Interactive system architecture explorer — trace data flows across frontend clients, REST APIs, databases, and AI workflows."
        />

        {/* System Topology Console Box */}
        <div className="neo-box border-2 sm:border-3 border-[#121212] shadow-brutal-lg p-4 sm:p-7 max-w-5xl mx-auto">
          
          {/* Top Console Bar: System Selector Switcher */}
          <div className="neo-glass-subtle p-2.5 mb-5 shadow-brutal-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neo-green animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#121212]">
                SIMULATION TOPOLOGY:
              </span>
            </div>

            {/* System Switcher Dropdown / Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full sm:w-auto">
              {systems.map((sys, idx) => (
                <button
                  key={sys.id}
                  onClick={() => {
                    setSelectedSystemIndex(idx);
                    setSelectedStepIndex(0);
                  }}
                  className={`px-2.5 py-1 text-[10px] sm:text-xs font-grotesk font-black uppercase border transition-all shrink-0 ${
                    selectedSystemIndex === idx
                      ? `${sys.accent} border-[#121212] shadow-brutal-sm -translate-y-0.5 font-extrabold`
                      : 'bg-white/85 dark:bg-white/10 backdrop-blur-sm text-neo-dark border-[#121212]/40 hover:border-[#121212]'
                  }`}
                >
                  {sys.systemName.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* System Identity Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#121212] pb-3 mb-5">
            <div>
              <span className={`neo-badge ${currentSystem.accent} text-[10px] font-mono font-bold mb-1`}>
                {currentSystem.badge}
              </span>
              <h3 className="font-grotesk font-black text-xl sm:text-2xl text-[#121212]">
                {currentSystem.systemName}
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-neo-subtle">
              ROLE: {currentSystem.role}
            </span>
          </div>

          {/* Connected Pipeline Flow Diagram (Interactive Node Graph) */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3 font-mono text-xs font-bold text-neo-subtle">
              <span>TAP ANY LAYER NODE TO INSPECT ITS PIPELINE LOGIC:</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-neo-green">
                <Zap className="w-3.5 h-3.5 fill-neo-green" />
                ACTIVE DATA BUS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {currentSystem.layers.map((layer, idx) => {
                const isSelected = selectedStepIndex === idx;
                const Icon = layer.icon;

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedStepIndex(idx)}
                    className={`p-3 border-2 border-[#121212] transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-neo-yellow text-[#121212] shadow-brutal ring-2 ring-black/20 -translate-y-1'
                        : 'bg-white/70 dark:bg-white/10 backdrop-blur-sm hover:bg-white text-neo-dark shadow-brutal-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-black text-xs">
                        STAGE 0{idx + 1}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-[#121212]' : 'text-neo-blue'}`} />
                    </div>

                    <div className="font-grotesk font-black text-xs sm:text-sm mb-1 leading-tight">
                      {layer.name}
                    </div>

                    <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neo-subtle truncate">
                      {layer.tech}
                    </div>

                    {isSelected && (
                      <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#121212] rotate-45" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Layer Deep-Dive Inspection Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSystem.id}-${selectedStepIndex}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="neo-glass-subtle p-4 sm:p-5 shadow-brutal mb-5"
            >
              <div className="flex items-center justify-between border-b border-[#121212]/20 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <LayerIcon className="w-5 h-5 text-neo-blue" />
                  <span className="font-grotesk font-black text-sm sm:text-base text-[#121212]">
                    STAGE 0{selectedStepIndex + 1} // {currentLayer.name}
                  </span>
                </div>
                <span className="neo-badge bg-white/90 backdrop-blur-sm text-[9px] sm:text-[10px] font-mono font-bold">
                  {currentLayer.tech}
                </span>
              </div>

              <p className="font-body text-xs sm:text-sm text-neo-dark font-medium leading-relaxed mb-3">
                {currentLayer.detail}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#121212]/10 font-body text-xs">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2.5 shadow-brutal-sm">
                  <span className="font-mono text-[9px] font-bold text-neo-red uppercase block mb-0.5">
                    PROBLEM SOLVED:
                  </span>
                  <p className="text-neo-dark leading-relaxed font-medium">{currentLayer.problemSolved || currentSystem.problem}</p>
                </div>

                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2.5 shadow-brutal-sm">
                  <span className="font-mono text-[9px] font-bold text-neo-green uppercase block mb-0.5">
                    SYSTEM IMPACT:
                  </span>
                  <p className="text-neo-dark leading-relaxed font-medium">{currentLayer.systemImpact || currentSystem.impact}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Technical Outcome Footer */}
          <div className="bg-[#121212] text-white p-3 sm:p-4 font-mono text-xs flex items-center gap-2.5 border-2 border-[#121212] shadow-brutal-sm">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-neo-green shrink-0" />
            <div className="truncate">
              <span className="text-neo-yellow font-bold uppercase mr-1.5">ENGINEERING OUTCOME:</span>
              <span className="font-medium text-gray-200">{currentSystem.impact}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

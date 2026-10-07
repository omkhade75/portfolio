import React, { useState } from 'react';
import { CheckCircle2, Cpu, ArrowRight, Zap, Database, Server, Globe, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './Motion';

export const SystemArchitecture: React.FC = () => {
  const [selectedSystemIndex, setSelectedSystemIndex] = useState<number>(0);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const systems = [
    {
      id: 'bizora',
      systemName: 'Bizora AI Autonomous Retail ERP',
      role: '5-Portal Micro-Frontend & Autonomous AI Fleet',
      badge: 'AUTONOMOUS SELF-HEALING ERP',
      accent: 'bg-neo-yellow text-[#121212]',
      problem: 'Retail store supply chains and cloud POS systems suffer from cold-start downtime, disconnected inventory silos, and manual order bookkeeping.',
      solution: 'Consolidated 5 synchronized portals (Owner, Admin, Supplier, Customer, Web) with a centralized NestJS REST engine, dual databases (Postgres + Mongo), and a 45s AI self-healing daemon.',
      layers: [
        {
          name: '5 MICRO-PORTALS',
          tech: 'React 19 + TanStack Start + Nitro',
          icon: Globe,
          detail: 'Dedicated portals for Store Owners, Super Admins, Suppliers, Customers, and Public Web with 3x retry shields.'
        },
        {
          name: 'AUTONOMOUS AI DAEMON',
          tech: 'NestJS AI Self-Healing Fleet',
          icon: Cpu,
          detail: '45-second automated sweep running 8 playbooks: pool keepalive, V8 memory garbage sweep, and stock auto-reconciliation.'
        },
        {
          name: 'POLYGLOT DUAL-DB',
          tech: 'PostgreSQL 17 (Prisma) + MongoDB Atlas',
          icon: Database,
          detail: 'ACID double-entry financial accounting in PostgreSQL paired with dynamic, high-throughput catalog search in MongoDB.'
        },
        {
          name: 'VOICE AI & MESSAGING',
          tech: 'Vapi AI Telephony + WhatsApp API',
          icon: Server,
          detail: 'Autonomous multilingual AI voice calls (Hindi/English) for supplier restocking and automated WhatsApp invoice dispatch.'
        }
      ],
      impact: 'Achieved 99.9% production uptime with zero-crash resilience, sub-second POS barcode checkout, and autonomous voice replenishment.'
    },
    {
      id: 'saffron',
      systemName: 'Saffron Restaurant POS & KDS',
      role: 'Full-Stack Server-State Caching',
      badge: 'REACT 19 & TANSTACK QUERY',
      accent: 'bg-neo-red text-white',
      problem: 'Fragmented restaurant software causes delays between table waitstaff, kitchen display systems (KDS), and billing counters.',
      solution: 'Unified full-stack architecture using TanStack Query server-state caching to synchronize table orders across kitchen tablets without global state clutter.',
      layers: [
        {
          name: 'WAITER / QR APP',
          tech: 'React 19 & TanStack Router Client',
          icon: Globe,
          detail: 'Optimistic UI order entry and dynamic UPI QR code generator for direct table settlements.'
        },
        {
          name: 'API GATEWAY',
          tech: 'Express.js & JWT Auth Middleware',
          icon: Server,
          detail: 'Role-based access control protecting waitstaff, kitchen, and administrative endpoints.'
        },
        {
          name: 'ORM & DATABASE',
          tech: 'PostgreSQL Relational Schema (Prisma)',
          icon: Database,
          detail: 'Relational mapping connecting orders, menu items, table sessions, and payment logs.'
        },
        {
          name: 'KITCHEN DISPLAY',
          tech: 'Real-Time KDS Order Sync',
          icon: Terminal,
          detail: 'Server-state polling and instant order queue status updates across kitchen tablets.'
        }
      ],
      impact: 'Synchronizes table orders in real-time with kitchen displays and streamlines dynamic UPI QR settlements.'
    },
    {
      id: 'agentrix',
      systemName: 'Agentrix AI Voice Platform',
      role: 'Audio Stream Buffer Proxy',
      badge: 'ELEVENLABS + OPENAI STREAMING',
      accent: 'bg-neo-cyan text-[#121212]',
      problem: 'AI voice assistants suffer from high latency when piping text-to-speech audio buffers through standard sequential HTTP requests.',
      solution: 'Node.js streaming proxy with Web Audio API frequency analysis, piping audio buffers directly from ElevenLabs to frontend canvas visualizers.',
      layers: [
        {
          name: 'VOICE PLAYGROUND',
          tech: 'React & Web Audio API AnalyserNode',
          icon: Globe,
          detail: 'Visualizes real-time frequency spectrum waves while receiving chunked audio stream chunks.'
        },
        {
          name: 'STREAMING PROXY',
          tech: 'Node.js Audio Buffer Pipe',
          icon: Server,
          detail: 'Pipes binary audio buffer chunks directly to the client to minimize time-to-first-sound.'
        },
        {
          name: 'LLM & TTS ENGINES',
          tech: 'OpenAI API & ElevenLabs Voice',
          icon: Cpu,
          detail: 'Generates conversational replies and synthesizes expressive human-like audio voices.'
        },
        {
          name: 'PERSISTENCE',
          tech: 'Supabase PostgreSQL JSONB Prompts',
          icon: Database,
          detail: 'Stores system prompt templates, voice agent configurations, and session transcripts.'
        }
      ],
      impact: 'Streams audio buffer chunks directly to Web Audio API visualizers with low-latency LLM responses.'
    },
    {
      id: 'medicare',
      systemName: 'MediCare Healthcare Platform',
      role: 'Serverless BaaS & Security Matrix',
      badge: 'SUPABASE EDGE FUNCTIONS & RLS',
      accent: 'bg-neo-purple text-white',
      problem: 'Legacy hospital software is slow and vulnerable to unauthorized access across medical and administrative roles.',
      solution: 'Cloud-native Supabase architecture with strict PostgreSQL Row Level Security (RLS) policies and Edge Functions for AI patient pre-screening.',
      layers: [
        {
          name: 'HOSPITAL DASHBOARD',
          tech: 'React 18 & Zustand State',
          icon: Globe,
          detail: 'Role-segregated portals for doctors, patients, and hospital administrators.'
        },
        {
          name: 'SERVERLESS COMPUTE',
          tech: 'Supabase Deno Edge Functions',
          icon: Server,
          detail: 'Executes rapid serverless actions for appointment scheduling and pre-screening workflows.'
        },
        {
          name: 'DATA PRIVACY',
          tech: 'PostgreSQL Row Level Security (RLS)',
          icon: Database,
          detail: 'Enforces strict cryptographic tenant isolation and patient medical record privacy.'
        },
        {
          name: 'AI TRIAGE BOT',
          tech: 'Contextual OpenAI Medical Prompts',
          icon: Cpu,
          detail: 'Pre-screens patient symptoms and classifies triage urgency before doctor consultations.'
        }
      ],
      impact: 'Ensures strict doctor/patient data isolation and role-based access with automated serverless scaling.'
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
          description="Interactive system topology explorer — select an architecture to trace decoupled data flows across frontend micro-portals, REST APIs, databases, and autonomous AI pipelines."
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
                  <p className="text-neo-dark line-clamp-2">{currentSystem.problem}</p>
                </div>

                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#121212] p-2.5 shadow-brutal-sm">
                  <span className="font-mono text-[9px] font-bold text-neo-green uppercase block mb-0.5">
                    SYSTEM IMPACT:
                  </span>
                  <p className="text-neo-dark line-clamp-2">{currentSystem.impact}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Technical Outcome Footer */}
          <div className="bg-[#121212] text-white p-3 sm:p-4 font-mono text-xs flex items-center gap-2.5 border-2 border-[#121212] shadow-brutal-sm">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-neo-green shrink-0" />
            <div className="truncate">
              <span className="text-neo-yellow font-bold uppercase mr-1.5">MEASURABLE OUTCOME:</span>
              <span className="font-medium text-gray-200">{currentSystem.impact}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

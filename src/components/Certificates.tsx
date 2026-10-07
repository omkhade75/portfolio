import React, { useState } from 'react';
import { ShieldCheck, Eye, X, CheckCircle2, ChevronDown, Award, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './Motion';
import { CERTIFICATES, type CertificateItem } from '../data/portfolio';

export const Certificates: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(CERTIFICATES[0].id);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const togglePass = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="certificates" className="py-10 sm:py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-3.5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          index="06 // CERTIFICATIONS"
          badge="VERIFIED ACADEMIC & TECHNICAL"
          badgeColor="bg-neo-yellow text-[#121212]"
          title={
            <>
              CERTIFICATIONS & <span className="bg-neo-cyan px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block text-[#121212]">CREDENTIALS.</span>
            </>
          }
          description="Official technical certifications, hackathon honors, and academic credentials awarded to Om Ajinath Khade."
          action={
            <div className="hidden sm:flex items-center gap-2">
              <div className="bg-white border-2 border-[#121212] px-3 py-1.5 shadow-brutal font-mono text-xs font-bold text-center">
                <span className="text-neo-blue font-black">7 VERIFIED CREDENTIALS</span>
              </div>
            </div>
          }
        />

        {/* Interactive Credential Passbook Stack */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {CERTIFICATES.map((cert, idx) => {
            const isExpanded = expandedId === cert.id;
            const passNumber = `PASS #0${idx + 1}`;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`neo-box border-2 sm:border-3 border-[#121212] transition-all overflow-hidden ${
                  isExpanded
                    ? 'shadow-brutal-lg ring-2 ring-black/10'
                    : 'bg-white/60 dark:bg-white/5 hover:bg-white/80 shadow-brutal-sm cursor-pointer'
                }`}
              >
                {/* Clickable Pass Header / Tab Bar */}
                <div
                  onClick={() => togglePass(cert.id)}
                  className="p-3 sm:p-4 flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-neo-yellow border-2 border-[#121212] shadow-brutal-sm font-mono font-black text-[10px] sm:text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className={`neo-badge ${cert.badgeColor} text-[8px] sm:text-[9px] font-mono font-bold px-1.5 py-0.2`}>
                          {cert.category}
                        </span>
                        <span className="font-mono text-[10px] text-neo-subtle font-bold">
                          {cert.year}
                        </span>
                      </div>

                      <h3 className="font-grotesk font-black text-sm sm:text-lg text-[#121212] truncate">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right Status / Expand Arrow */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden md:inline font-mono text-[11px] font-bold text-neo-subtle">
                      {cert.issuer.split(' ')[0]}
                    </span>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 bg-white/90 backdrop-blur-sm border border-[#121212] shadow-brutal-sm flex items-center justify-center"
                    >
                      <ChevronDown className="w-4 h-4 text-[#121212]" />
                    </motion.div>
                  </div>
                </div>

                {/* Smooth Expandable Pass Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="border-t-2 border-[#121212] neo-glass-subtle p-4 sm:p-6 space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-[#121212] p-3 shadow-brutal-sm">
                          <span className="font-mono text-[10px] font-bold uppercase text-neo-subtle block mb-1">
                            OFFICIAL ISSUING BODY:
                          </span>
                          <span className="font-grotesk font-black text-xs sm:text-sm text-[#121212]">
                            {cert.issuer}
                          </span>
                        </div>

                        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-[#121212] p-3 shadow-brutal-sm flex items-center justify-between">
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase text-neo-subtle block mb-1">
                              VERIFICATION STATUS:
                            </span>
                            <span className="font-mono font-bold text-xs text-neo-green flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              VERIFIED & ACTIVE
                            </span>
                          </div>
                          <ShieldCheck className="w-6 h-6 text-neo-green" />
                        </div>
                      </div>

                      <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-[#121212] p-3 shadow-brutal-sm">
                        <span className="font-mono text-[10px] font-bold uppercase text-neo-subtle block mb-1">
                          CREDENTIAL SUMMARY:
                        </span>
                        <p className="font-body text-xs sm:text-sm text-neo-dark font-medium leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      {/* Modal Action CTA */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-mono text-[10px] text-neo-subtle font-bold">
                          SECURITY ID: {passNumber}
                        </span>

                        <motion.button
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedCert(cert)}
                          className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-4 py-2 font-grotesk font-bold"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>INSPECT FULL CREDENTIAL</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="neo-box w-full max-w-lg p-4 sm:p-7 relative border-3 border-[#121212] shadow-brutal-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b-3 border-[#121212] pb-3.5 mb-4">
                <div>
                  <span className={`neo-badge ${selectedCert.badgeColor} text-[10px] font-mono font-bold mb-1`}>
                    {selectedCert.category} • {selectedCert.year}
                  </span>
                  <h3 className="font-grotesk font-black text-lg sm:text-xl text-[#121212]">
                    {selectedCert.title}
                  </h3>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 bg-neo-paper hover:bg-neo-red hover:text-white border-2 border-[#121212] shadow-brutal-sm font-bold flex items-center justify-center transition-colors shrink-0"
                  aria-label="Close Modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="space-y-3 mb-5 font-body text-xs sm:text-sm">
                <div className="bg-[#FAF7F2] border-2 border-[#121212] p-3 shadow-brutal-sm">
                  <span className="font-mono text-[10px] font-bold uppercase text-neo-subtle block mb-1">
                    OFFICIAL ISSUING BODY:
                  </span>
                  <span className="font-grotesk font-bold text-sm text-[#121212]">
                    {selectedCert.issuer}
                  </span>
                </div>

                <div className="bg-[#FAF7F2] border-2 border-[#121212] p-3 shadow-brutal-sm">
                  <span className="font-mono text-[10px] font-bold uppercase text-neo-subtle block mb-1">
                    CREDENTIAL SUMMARY:
                  </span>
                  <p className="font-body text-xs text-neo-dark font-medium leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-neo-green font-mono text-xs font-bold pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>OFFICIALLY VERIFIED CREDENTIAL</span>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-[#121212] flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCert(null)}
                  className="neo-btn bg-neo-yellow hover:bg-neo-yellowHover text-xs px-5 py-2.5 font-grotesk font-bold"
                >
                  CLOSE
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

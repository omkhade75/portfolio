import React from 'react';

export const TechMarquee: React.FC = () => {
  const techStack = [
    { name: 'PYTHON', color: 'bg-neo-yellow' },
    { name: 'PYTORCH', color: 'bg-neo-red text-white' },
    { name: 'DJANGO', color: 'bg-neo-green' },
    { name: 'REACT JS', color: 'bg-neo-cyan' },
    { name: 'OPENCV & OCR', color: 'bg-neo-purple text-white' },
    { name: 'WEBSOCKETS', color: 'bg-neo-orange text-white' },
    { name: 'MONGODB', color: 'bg-neo-yellow' },
    { name: 'DOCKER', color: 'bg-neo-blue text-white' },
    { name: 'TENSORFLOW', color: 'bg-neo-red text-white' },
    { name: 'FASTAPI', color: 'bg-neo-cyan' },
    { name: 'TAILWIND CSS', color: 'bg-neo-green' },
    { name: 'GIT & GITHUB', color: 'bg-white' },
  ];

  const hackathonBadges = [
    "⚡ MANTHAN HACKATHON FINALIST",
    "🚀 AGRI-TECH INNOVATION AWARD",
    "🤖 CHEQUE OCR AUTOMATION ENGINE",
    "🔥 MASSMAIL AI DISPATCH ENGINE",
    "🌐 HACKATHONFEED ENGINE",
    "💡 REAL-TIME WEBSOCKET HUB"
  ];

  return (
    <div className="border-b-3 border-[#121212] overflow-hidden bg-white">
      
      {/* Marquee Row 1 (Forward) */}
      <div className="py-3 bg-neo-yellow border-b-3 border-[#121212] flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center gap-6">
          {[...techStack, ...techStack].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 font-grotesk font-black text-sm sm:text-base uppercase tracking-wider text-[#121212]"
            >
              <span className="w-2.5 h-2.5 bg-[#121212] rotate-45 inline-block" />
              <span className={`px-2.5 py-0.5 border-2 border-[#121212] shadow-brutal-sm ${item.color}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="hidden sm:block py-2.5 bg-[#121212] text-white flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee-reverse flex items-center gap-8">
          {[...hackathonBadges, ...hackathonBadges, ...hackathonBadges].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 font-mono font-bold text-xs sm:text-sm tracking-wider"
            >
              <span className="text-neo-yellow">✦</span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

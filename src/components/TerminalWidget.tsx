import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Play, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TerminalWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const TerminalWidget: React.FC<TerminalWidgetProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1">
          <p className="text-neo-yellow font-bold">
            WELCOME TO OM KHADE INTERACTIVE CLI v2.4 (X86_64-LINUX-GNU)
          </p>
          <p className="text-gray-300">
            Type <span className="text-neo-cyan font-bold">'help'</span> to see available commands or <span className="text-neo-green font-bold">'hire'</span> to get in touch immediately.
          </p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-gray-200">
            <p className="text-neo-yellow font-bold">AVAILABLE COMMANDS:</p>
            <p>• <span className="text-neo-cyan font-bold">about</span> - Brief introduction & bio</p>
            <p>• <span className="text-neo-cyan font-bold">skills</span> - List primary technical stack</p>
            <p>• <span className="text-neo-cyan font-bold">projects</span> - View flagship AI & web projects</p>
            <p>• <span className="text-neo-cyan font-bold">manthan</span> - View MANTHAN Hackathon finalist details</p>
            <p>• <span className="text-neo-cyan font-bold">contact</span> - Get email, GitHub, LinkedIn details</p>
            <p>• <span className="text-neo-cyan font-bold">hire</span> - Trigger instant contact celebration</p>
            <p>• <span className="text-neo-cyan font-bold">clear</span> - Clear terminal buffer</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <p className="text-gray-200 leading-relaxed">
            Om Khade is a Computer Science Engineering student based in Pune, India. Specializing in AI/ML model architecture, Computer Vision (PyTorch/OpenCV), and scalable full-stack web applications using Django & React.
          </p>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1 text-gray-200">
            <p className="text-neo-yellow font-bold">TECHNICAL MATRIX:</p>
            <p><span className="text-neo-red font-bold">[AI/ML]</span> Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, OCR</p>
            <p><span className="text-neo-cyan font-bold">[WEB]</span> Django, React.js, WebSockets, HTML5, Tailwind CSS, REST APIs</p>
            <p><span className="text-neo-green font-bold">[DATA]</span> MongoDB, PostgreSQL, MySQL, Redis, Docker, Git</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1 text-gray-200">
            <p className="text-neo-yellow font-bold">FEATURED PROJECTS:</p>
            <p>1. <span className="text-white font-bold">HackathonFeed</span> - Neural Hackathon Aggregator & Validator</p>
            <p>2. <span className="text-white font-bold">Kisan Mitr AI</span> - Crop Disease Vision Model (96.4% Acc)</p>
            <p>3. <span className="text-white font-bold">MassMail Engine</span> - High-Throughput Bulk Dispatch System</p>
            <p>4. <span className="text-white font-bold">Cheque OCR</span> - Bank Cheque MICR & Signature Verifier</p>
            <p>5. <span className="text-white font-bold">MANTHAN Tip-Off</span> - Encrypted Whistleblower Portal</p>
          </div>
        );
        break;

      case 'manthan':
        response = (
          <p className="text-neo-yellow leading-relaxed font-bold">
            🏆 MANTHAN HACKATHON FINALIST: Engineered an end-to-end zero-knowledge encrypted whistleblower tip-off platform for citizens to safely report intelligence to security agencies.
          </p>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-gray-200">
            <p>📧 Email: <a href="mailto:khadeom14@gmail.com" className="text-neo-yellow underline">khadeom14@gmail.com</a></p>
            <p>🐙 GitHub: <a href="https://github.com/khadeom" target="_blank" rel="noreferrer" className="text-neo-cyan underline">github.com/khadeom</a></p>
            <p>📍 Location: Pune, India</p>
          </div>
        );
        break;

      case 'hire':
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        response = (
          <div className="bg-neo-yellow text-[#121212] p-3 font-bold border-2 border-white">
            🎉 EXCELLENT CHOICE! Om Khade is available for full-time AI/ML engineer roles, software engineering internships, and freelance projects. Let's talk!
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        if (cleanCmd.startsWith('sudo')) {
          response = (
            <p className="text-neo-red font-bold">
              Permission denied: You are already root in Om's portfolio.
            </p>
          );
        } else {
          response = (
            <p className="text-neo-red font-semibold">
              Command not recognized: '{cleanCmd}'. Type 'help' for command list.
            </p>
          );
        }
    }

    setHistory((prev) => [...prev, { cmd: input, output: response }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="neo-badge bg-neo-green text-[#121212] mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            CLI INTERACTIVE ENVIRONMENT
          </div>
          <h2 className="font-grotesk font-black text-3xl sm:text-5xl tracking-tight text-[#121212]">
            TERMINAL <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">COMMAND PALETTE</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-neo-dark font-medium mt-2">
            For developers & recruiters who prefer terminal navigation. Inspired by shell environments.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="neo-box bg-[#121212] text-white max-w-4xl mx-auto shadow-brutal-xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#1e1e1e] border-b-3 border-[#121212] p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-neo-red border border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-neo-yellow border border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-neo-green border border-black" />
              <span className="ml-2 font-bold text-gray-300">om@khade-dev:~ (bash)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="neo-badge bg-neo-yellow text-[#121212] text-[10px]">
                ONLINE
              </span>
            </div>
          </div>

          {/* Terminal Logs Display */}
          <div className="p-4 sm:p-6 min-h-[280px] max-h-[420px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-neo-cyan">
                  <span className="text-neo-green font-bold">om@khade-dev:~$</span>
                  <span className="font-semibold text-white">{item.cmd}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Row */}
          <form onSubmit={handleCommand} className="bg-[#1e1e1e] border-t-2 border-gray-800 p-3 flex items-center gap-2">
            <span className="text-neo-green font-bold shrink-0">om@khade-dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'skills', 'projects', 'manthan', 'hire'..."
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-gray-500"
            />
            <button
              type="submit"
              className="p-1.5 bg-neo-yellow text-[#121212] font-bold hover:bg-white text-xs border border-black shadow-brutal-sm shrink-0 flex items-center gap-1"
            >
              <span>RUN</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

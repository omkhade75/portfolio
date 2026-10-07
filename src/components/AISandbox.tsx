import React, { useState } from 'react';
import { Cpu, Sparkles, Play, RefreshCw, CheckCircle2, Code2, Terminal, AlertTriangle, Zap } from 'lucide-react';

export const AISandbox: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [output, setOutput] = useState<any>(null);

  const presets = [
    {
      id: 'feasibility',
      title: 'Neural Idea & Tech Feasibility Validator',
      prompt: 'Validate project idea: "AI-driven real-time audio translation app built with WebSockets & Whisper ML"',
      icon: '🧠',
      result: {
        feasibilityScore: '94 / 100',
        marketPotential: 'HIGH (Fintech / Global Remote)',
        winningProbability: '88%',
        recommendedStack: ['Python PyTorch', 'FastAPI', 'WebSockets', 'React', 'Redis'],
        aiInsight: 'Strong execution viability. Real-time streaming Whisper embeddings combined with Redis pub/sub queue guarantees sub-300ms audio packet transcription.'
      }
    },
    {
      id: 'kisan',
      title: 'Kisan Agritech Foliage Vision Model',
      prompt: 'Input leaf image tensor matrix: [Tomato Foliage Sample #8492]',
      icon: '🌱',
      result: {
        detectedCondition: 'Early Blight (Alternaria solani)',
        modelConfidence: '97.8%',
        severityIndex: 'MODERATE (Stage 2)',
        recommendedAction: 'Apply copper-based fungicide spray (0.2%). Maintain 15cm inter-plant spacing to reduce ambient moisture humidity.',
        inferenceLatency: '184 ms'
      }
    },
    {
      id: 'cheque',
      title: 'Cheque OCR & Signature Siamese Matcher',
      prompt: 'Inspect MICR: "400024012" | Compare Signature Sample A vs Benchmark B',
      icon: '🧾',
      result: {
        micrValidation: 'VALID (State Bank of India - Pune Branch)',
        signatureMatchScore: '96.2% (VERIFIED MATCH)',
        tamperCheck: 'CLEAN (Zero Digital Alteration Detected)',
        riskLevel: 'LOW (Clear for Automated Settlement)'
      }
    }
  ];

  const handleRunInference = (index?: number) => {
    setIsAnalyzing(true);
    setOutput(null);

    const targetIndex = index !== undefined ? index : selectedPreset;

    setTimeout(() => {
      if (customPrompt.trim().length > 0) {
        setOutput({
          query: customPrompt,
          modelArchitecture: 'OmKhade-Transformer-Lite-v2',
          feasibilityScore: '91 / 100',
          executionStrategy: 'Optimal architecture detected. Python FastAPI backend combined with React Tailwind frontend.',
          aiInsight: `Processed prompt "${customPrompt.slice(0, 40)}..." successfully. Clean data flow verified.`,
          latency: `${Math.floor(Math.random() * 120 + 80)} ms`
        });
      } else {
        setOutput(presets[targetIndex].result);
      }
      setIsAnalyzing(false);
    }, 800);
  };

  return (
    <section id="ai-sandbox" className="py-16 lg:py-24 border-b-3 border-[#121212] bg-[#FAF7F2]">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="neo-badge bg-neo-red text-white mb-3">
            <Cpu className="w-3.5 h-3.5" />
            LIVE INTERACTIVE DEMO
          </div>
          <h2 className="font-grotesk font-black text-3xl sm:text-5xl tracking-tight text-[#121212]">
            TEST OM'S <span className="bg-neo-yellow px-2 py-0.5 border-3 border-[#121212] shadow-brutal inline-block">AI PROMPT SANDBOX</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-neo-dark font-medium mt-3">
            Simulate neural inference models, vision diagnostics, and feasibility validation engines built into Om Khade's AI portfolio.
          </p>
        </div>

        {/* Sandbox Console Container */}
        <div className="neo-box bg-white p-6 sm:p-8 max-w-5xl mx-auto">
          
          {/* Preset Buttons Bar */}
          <div className="mb-6">
            <span className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-2">
              CHOOSE MODEL PRESET SIMULATION:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {presets.map((preset, idx) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setSelectedPreset(idx);
                    setCustomPrompt('');
                    handleRunInference(idx);
                  }}
                  className={`p-3 text-left border-3 border-[#121212] font-grotesk font-bold text-xs uppercase transition-all flex items-center gap-2.5 ${
                    selectedPreset === idx && !customPrompt
                      ? 'bg-neo-yellow shadow-brutal -translate-y-0.5'
                      : 'bg-neo-paper hover:bg-white text-[#121212]'
                  }`}
                >
                  <span className="text-lg">{preset.icon}</span>
                  <span className="line-clamp-1">{preset.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input Prompt Row */}
          <div className="mb-6">
            <label className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-2">
              OR TYPE YOUR CUSTOM PROJECT / QUESTION PROMPT:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. Test feasibility of an automated cheque processing AI model using OpenCV..."
                className="flex-1 bg-[#FAF7F2] border-3 border-[#121212] px-4 py-3 font-mono text-xs sm:text-sm font-semibold focus:outline-none focus:bg-white shadow-brutal-sm"
              />
              <button
                onClick={() => handleRunInference()}
                disabled={isAnalyzing}
                className="neo-btn bg-neo-red text-white hover:bg-red-600 px-6 py-3 text-xs sm:text-sm shrink-0"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>RUNNING INFERENCE...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>EXECUTE INFERENCE</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Inference Output Console Screen */}
          <div className="bg-[#121212] text-white border-3 border-[#121212] p-4 sm:p-6 shadow-brutal font-mono text-xs relative">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neo-red" />
                <span className="w-3 h-3 rounded-full bg-neo-yellow" />
                <span className="w-3 h-3 rounded-full bg-neo-green" />
                <span className="text-neo-yellow font-bold ml-2">MODEL_INFERENCE_OUTPUT.JSON</span>
              </div>
              <span className="text-gray-400 text-[10px]">INFERENCE LATENCY: {output?.inferenceLatency || output?.latency || '142 ms'}</span>
            </div>

            {isAnalyzing ? (
              <div className="py-12 text-center space-y-3">
                <div className="inline-block w-8 h-8 border-4 border-neo-yellow border-t-transparent rounded-full animate-spin" />
                <p className="text-neo-yellow font-bold animate-pulse">
                  NEURAL NETWORK PROCESSING WEIGHTS & FEATURE MAPS...
                </p>
              </div>
            ) : output ? (
              <div className="space-y-4">
                <div className="text-gray-300">
                  <span className="text-neo-cyan font-bold">&gt; INPUT_PROMPT:</span> "{customPrompt || presets[selectedPreset].prompt}"
                </div>

                <div className="bg-[#1e1e1e] p-4 border border-gray-800 rounded-none space-y-2 text-green-400">
                  {Object.entries(output).map(([key, val]: [string, any]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1">
                      <span className="text-neo-yellow font-bold capitalize sm:w-44 shrink-0">
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </span>
                      <span className="text-gray-100 font-medium">
                        {Array.isArray(val) ? val.join(', ') : val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-800">
                  <span>STATUS: 200 OK | INFERENCE COMPLETE</span>
                  <span>POWERED BY OM KHADE AI PIPELINE</span>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-gray-400">
                Click "EXECUTE INFERENCE" or pick a preset above to test the live model simulation.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

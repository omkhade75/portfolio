import React, { useState } from 'react';
import { X, Mail, Send, Copy, Check, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Hiring / Job Opportunity',
    message: ''
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('omkhade09@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'fed5b2f8-700c-4488-be35-c3b8b9fd78b3';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] ${formData.role} from ${formData.name}`,
          message: `Role / Purpose: ${formData.role}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3500);
      } else {
        alert(result.message || 'Error sending message. Please email omkhade09@gmail.com directly!');
      }
    } catch (err) {
      alert('Network error. Please email omkhade09@gmail.com directly!');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        className="glass-panel w-full max-w-2xl relative p-5 sm:p-8 my-auto border-3 border-[#121212] shadow-brutal-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-3 border-[#121212] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neo-yellow border-3 border-[#121212] shadow-brutal-sm flex items-center justify-center font-bold shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="neo-badge bg-neo-green text-[#121212] text-[10px]">
                GET IN TOUCH WITH OM KHADE
              </span>
              <h3 className="font-grotesk font-black text-xl sm:text-3xl text-[#121212] leading-tight">
                LET'S BUILD TOGETHER
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
            }}
            className="w-10 h-10 bg-neo-paper hover:bg-neo-red hover:text-white border-3 border-[#121212] shadow-brutal-sm font-bold flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fast Email & Phone Banner */}
        <div className="bg-neo-yellow border-3 border-[#121212] p-3.5 sm:p-4 mb-5 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase block text-[#121212]">
              DIRECT CONTACT DETAILS:
            </span>
            <div className="font-grotesk font-black text-sm sm:text-base text-[#121212] flex flex-wrap items-center gap-2">
              <a href="mailto:omkhade09@gmail.com" className="hover:underline">
                omkhade09@gmail.com
              </a>
              <span>|</span>
              <a href="tel:+917588021256" className="hover:underline">
                +91 7588021256
              </a>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="neo-btn bg-white hover:bg-neo-paper text-xs px-4 py-2.5 shrink-0 w-full sm:w-auto text-center"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            <span>{copiedEmail ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3 bg-neo-green/20 border-3 border-[#121212] p-6 shadow-brutal">
            <div className="w-12 h-12 bg-neo-green border-3 border-[#121212] rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl">
              ✓
            </div>
            <h4 className="font-grotesk font-black text-2xl text-[#121212]">
              MESSAGE DISPATCHED TO OM'S INBOX!
            </h4>
            <p className="font-body text-xs sm:text-sm font-medium text-neo-dark">
              Thank you for reaching out, {formData.name}. Your email has been delivered directly to <strong>omkhade09@gmail.com</strong>!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-1">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#FAF7F2] border-3 border-[#121212] px-3.5 py-2.5 font-mono text-xs sm:text-sm font-semibold focus:outline-none focus:bg-white shadow-brutal-sm"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-1">
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-[#FAF7F2] border-3 border-[#121212] px-3.5 py-2.5 font-mono text-xs sm:text-sm font-semibold focus:outline-none focus:bg-white shadow-brutal-sm"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-1">
                INQUIRY PURPOSE
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-[#FAF7F2] border-3 border-[#121212] px-3.5 py-2.5 font-mono text-xs sm:text-sm font-semibold focus:outline-none focus:bg-white shadow-brutal-sm"
              >
                <option value="Hiring / Job Opportunity">💼 Hiring / Full-Time Role</option>
                <option value="Freelance / Contract Project">🚀 Freelance Project</option>
                <option value="Hackathon / Collaboration">💡 Hackathon / AI Collaboration</option>
                <option value="General Connect">💬 General Networking</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-xs font-bold uppercase text-neo-subtle block mb-1">
                MESSAGE DETAILS *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share project scope, role requirements, or collaboration idea..."
                className="w-full bg-[#FAF7F2] border-3 border-[#121212] px-3.5 py-2.5 font-mono text-xs sm:text-sm font-semibold focus:outline-none focus:bg-white shadow-brutal-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="neo-btn bg-neo-red text-white hover:bg-red-600 w-full py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>DISPATCHING EMAIL...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE TO OM KHADE</span>
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Check, Send } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Footer: React.FC = () => {
  const [draftMessage, setDraftMessage] = useLocalStorage<string>('contact_draft_msg', '');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftMessage.trim()) return;
    setSent(true);
    setDraftMessage('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer id="contact" className="bg-ink-950 text-cream-100 pt-24 pb-16 px-6 sm:px-12 border-t border-ink-800">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Upper Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-ink-800 pb-16">
          <div className="space-y-6 max-w-lg">
            <span className="text-xs font-mono text-accent-green uppercase tracking-widest">
              05 / Connect & Collaborate
            </span>
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
              Let’s Build Intelligent Systems Together.
            </h2>
            <p className="text-sm text-ink-400 font-normal leading-relaxed">
              Available for Machine Learning Engineering, Robotics Automation, and Generative AI roles.
            </p>

            <div className="space-y-3 pt-2 text-xs font-mono text-ink-300">
              <a href="mailto:muhammedkoca129@gmail.com" className="flex items-center gap-3 hover:text-accent-green transition-colors">
                <Mail className="w-4 h-4 text-accent-green" />
                <span>muhammedkoca129@gmail.com</span>
              </a>
              <a href="tel:+905326630556" className="flex items-center gap-3 hover:text-accent-green transition-colors">
                <Phone className="w-4 h-4 text-accent-green" />
                <span>+90 532 663 05 56</span>
              </a>
              <div className="flex items-center gap-3 text-ink-400">
                <MapPin className="w-4 h-4 text-accent-green" />
                <span>İzmir, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="w-full lg:w-96 bg-ink-900 p-8 rounded-3xl border border-ink-800 space-y-4">
            <h3 className="text-base font-display font-bold text-white">Direct Dispatch</h3>
            <p className="text-xs text-ink-400">
              Leave a quick inquiry or schedule an interview. Auto-persisted in draft mode.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={draftMessage}
                onChange={e => setDraftMessage(e.target.value)}
                rows={3}
                placeholder="Hi Muhammed, let's discuss an engineering opportunity..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-ink-950 border border-ink-700 text-xs text-white placeholder-ink-500 focus:outline-none focus:border-accent-green resize-none"
                required
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-accent-green text-ink-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Inquiry Registered!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-500">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/muhammedkoca17" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a 
              href="https://linkedin.com/in/mkoca" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>© 2026 Muhammed Koca. Designed with 7-Skill Precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

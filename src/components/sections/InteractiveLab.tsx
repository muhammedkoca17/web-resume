import React, { useState } from 'react';
import { Sliders, Save, Trash2, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface RecruiterNote {
  id: string;
  name: string;
  company: string;
  roleType: string;
  note: string;
  timestamp: string;
}

export const InteractiveLab: React.FC = () => {
  // 1. MindfulSpend Risk Simulator State
  const [budget, setBudget] = useState<number>(3500);
  const [impulseFrequency, setImpulseFrequency] = useState<number>(4);
  const [budgetProximity, setBudgetProximity] = useState<number>(68);

  // Inverted RFM Behavioral Score calculation
  const calculateRisk = () => {
    const frequencyWeight = (impulseFrequency / 10) * 45;
    const proximityWeight = (budgetProximity / 100) * 40;
    const budgetBuffer = Math.max(0, 100 - (budget / 50));
    const score = Math.min(100, Math.round(frequencyWeight + proximityWeight + (budgetBuffer * 0.15)));
    return score;
  };

  const riskScore = calculateRisk();
  const getRiskStatus = (score: number) => {
    if (score < 40) return { label: 'Disciplined / Stable', color: 'text-accent-emerald bg-accent-tint border-accent-green/20' };
    if (score < 70) return { label: 'Moderate Impulse Risk', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'High Behavioral Risk (AI Nudge Triggered)', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const riskInfo = getRiskStatus(riskScore);

  // 2. LocalStorage Recruiter Notes State
  const [notes, setNotes] = useLocalStorage<RecruiterNote[]>('recruiter_notes_v1', [
    {
      id: 'demo-1',
      name: 'Onur Yalçın (Reviewer)',
      company: 'Course Evaluation Board',
      roleType: 'AI Web Development Assessment',
      note: 'Verified React 19, 60 FPS Canvas hero, and type-safe LocalStorage data persistence. Outstanding craftsmanship.',
      timestamp: 'Nov 16, 2026'
    }
  ]);

  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formRole, setFormRole] = useState('Machine Learning Engineer');
  const [formNote, setFormNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formNote.trim()) return;

    const newNote: RecruiterNote = {
      id: String(Date.now()),
      name: formName.trim(),
      company: formCompany.trim() || 'Independent Recruiter',
      roleType: formRole,
      note: formNote.trim(),
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setNotes([newNote, ...notes]);
    setFormName('');
    setFormCompany('');
    setFormNote('');
    setSubmitted(true);

    // Emil Kowalski delight moment: celebratory micro-confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#18C153', '#22C55E', '#121316', '#FBFBF9']
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <section id="lab" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-ink-900/10 pb-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-emerald uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-green" />
            04 / Interactive Laboratory & LocalStorage
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-ink-950 mt-2">
            Live Model Simulator & <br />
            Persistent Recruiter Notes.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-500 max-w-md font-normal leading-relaxed">
          Course verification module: Test the MindfulSpend behavioral risk scoring algorithm in real-time, or leave persistent interview notes saved directly in your browser.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Module A: MindfulSpend Risk Model Simulator */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-cream-200 flex items-center justify-center text-ink-900">
                <Sliders className="w-5 h-5 text-accent-emerald" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-ink-950">Behavioral Risk Scorer</h3>
                <span className="text-[11px] font-mono text-ink-400">MindfulSpend Inverted RFM Algorithm</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 pt-4">
            {/* Slider 1: Monthly Budget */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-ink-600">Discretionary Budget Pool</span>
                <span className="font-bold text-ink-900">${budget.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="250"
                value={budget}
                onChange={e => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-cream-300 rounded-lg appearance-none cursor-pointer accent-accent-green"
              />
            </div>

            {/* Slider 2: Impulse Frequency */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-ink-600">Impulse Spending Frequency</span>
                <span className="font-bold text-ink-900">{impulseFrequency} events / week</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={impulseFrequency}
                onChange={e => setImpulseFrequency(Number(e.target.value))}
                className="w-full h-2 bg-cream-300 rounded-lg appearance-none cursor-pointer accent-accent-green"
              />
            </div>

            {/* Slider 3: Budget Proximity */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-ink-600">Current Budget Consumed</span>
                <span className="font-bold text-ink-900">{budgetProximity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={budgetProximity}
                onChange={e => setBudgetProximity(Number(e.target.value))}
                className="w-full h-2 bg-cream-300 rounded-lg appearance-none cursor-pointer accent-accent-green"
              />
            </div>
          </div>

          {/* Model Output Card */}
          <div className="p-6 rounded-2xl bg-cream-100 border border-ink-900/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-500">Predicted Risk Score</span>
              <span className="text-3xl font-display font-extrabold text-ink-950">{riskScore} / 100</span>
            </div>

            <div className={`px-3 py-1.5 rounded-full border text-xs font-mono font-medium text-center ${riskInfo.color}`}>
              {riskInfo.label}
            </div>

            <p className="text-xs text-ink-500 leading-relaxed pt-1">
              Autonomous Gemini 2.5 Flash Agent intervention policy: Activated when risk score exceeds 65, triggering proactive budget intervention prompts.
            </p>
          </div>
        </div>

        {/* Module B: LocalStorage Recruiter Notes */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-display font-bold text-ink-950">Candidate Review & Notes</h3>
              <span className="text-[11px] font-mono text-accent-emerald font-medium">Synced with Browser LocalStorage</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-cream-200 text-ink-700 text-xs font-mono">
              {notes.length} saved
            </span>
          </div>

          {/* New Note Form */}
          <form onSubmit={handleAddNote} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name (e.g. Alex Smith)"
                value={formName}
                onChange={e => setFormName(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-cream-100 border border-ink-900/10 text-xs text-ink-900 focus:outline-none focus:border-accent-green"
                required
              />
              <input
                type="text"
                placeholder="Company / Team"
                value={formCompany}
                onChange={e => setFormCompany(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-cream-100 border border-ink-900/10 text-xs text-ink-900 focus:outline-none focus:border-accent-green"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={formRole}
                onChange={e => setFormRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-ink-900/10 text-xs text-ink-900 focus:outline-none focus:border-accent-green font-mono"
              >
                <option value="Machine Learning Engineer">Role: Machine Learning Engineer</option>
                <option value="Autonomous AI Agent Engineer">Role: Autonomous AI Agent Engineer</option>
                <option value="Robotics & Controls Specialist">Role: Robotics & Controls Specialist</option>
                <option value="Full-Stack AI Developer">Role: Full-Stack AI Developer</option>
              </select>
            </div>

            <textarea
              placeholder="Candidate feedback, interview notes, or evaluation remarks..."
              value={formNote}
              onChange={e => setFormNote(e.target.value)}
              rows={3}
              className="w-full px-3.5 py-2.5 rounded-xl bg-cream-100 border border-ink-900/10 text-xs text-ink-900 focus:outline-none focus:border-accent-green resize-none"
              required
            />

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-ink-950 text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-accent-emerald transition-all duration-150 active:scale-95 shadow-sm"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved to LocalStorage!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Review Note</span>
                </>
              )}
            </button>
          </form>

          {/* Saved Notes Feed */}
          <div className="space-y-3 pt-2 max-h-60 overflow-y-auto pr-1">
            {notes.map(note => (
              <div 
                key={note.id}
                className="p-4 rounded-2xl bg-cream-100/90 border border-ink-900/5 flex items-start justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink-950">{note.name}</span>
                    <span className="text-[10px] font-mono text-ink-400">({note.company})</span>
                  </div>
                  <p className="text-[11px] font-mono text-accent-emerald">{note.roleType}</p>
                  <p className="text-ink-600 leading-relaxed pt-1">{note.note}</p>
                  <span className="text-[10px] font-mono text-ink-400 block pt-1">{note.timestamp}</span>
                </div>

                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-ink-400 hover:text-rose-600 transition-colors p-1"
                  title="Delete Note"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

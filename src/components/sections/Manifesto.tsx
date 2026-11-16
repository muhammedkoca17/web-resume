import React from 'react';
import { Cpu, Award, GraduationCap, ArrowRight } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-ink-900/10 pb-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-emerald uppercase">
            01 / Background & Manifesto
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-ink-950 mt-2">
            Engineering Precision <br />
            Meets Intelligent Systems.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-500 max-w-md font-normal leading-relaxed">
          Bridging the gap between heavy industrial robotics on factory floors and autonomous LLM agents in production software.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Education */}
        <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-accent-green/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center text-ink-900">
            <GraduationCap className="w-6 h-6 text-accent-emerald" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-accent-emerald font-semibold">
            Academic Foundation
          </span>
          <h3 className="text-xl font-display font-bold text-ink-950">
            Celal Bayar University
          </h3>
          <p className="text-xs font-mono text-ink-400">
            B.Sc. Electrical & Electronics Engineering (2019 – 2024) • GPA: 3.42 / 4.00
          </p>
          <p className="text-sm text-ink-500 leading-relaxed">
            Rigorous core in signals, electrical circuits, control theory, robotics kinematics, and computational mathematics.
          </p>
        </div>

        {/* Card 2: Industrial Robotics */}
        <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-accent-green/30 transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-cream-200 flex items-center justify-center text-ink-900">
            <Cpu className="w-6 h-6 text-accent-emerald" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-accent-emerald font-semibold">
            Manufacturing & Robotics
          </span>
          <h3 className="text-xl font-display font-bold text-ink-950">
            Franklin Electric
          </h3>
          <p className="text-xs font-mono text-ink-400">
            Advanced Manufacturing Engineer (2025 – 2026)
          </p>
          <p className="text-sm text-ink-500 leading-relaxed">
            Programmed and commissioned DOBOT collaborative robots. Calibrated Tool Center Point (TCP) and optimized motion trajectories to cut cycle times from 20s to 17s.
          </p>
        </div>

        {/* Card 3: Award */}
        <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-accent-green/30 transition-all duration-300 bg-gradient-to-br from-white to-accent-light/20">
          <div className="w-12 h-12 rounded-2xl bg-accent-tint flex items-center justify-center text-accent-emerald">
            <Award className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-accent-emerald font-semibold">
            Honors & Impact
          </span>
          <h3 className="text-xl font-display font-bold text-ink-950">
            Sustainability Award
          </h3>
          <p className="text-xs font-mono text-ink-400">
            Franklin Electric Corporate Recognition
          </p>
          <p className="text-sm text-ink-500 leading-relaxed">
            Awarded for instrumental contributions to scrap reduction, scrap metrics analysis, and high-efficiency robotic automation.
          </p>
          <div className="pt-2">
            <a href="#works" className="inline-flex items-center gap-1 text-xs font-semibold text-accent-emerald hover:underline">
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

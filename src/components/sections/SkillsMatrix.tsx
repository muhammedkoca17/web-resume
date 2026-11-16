import React from 'react';
import { Terminal, Cpu, Database, Wrench, Layers } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  level: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: 'Machine Learning & Modeling',
    icon: <Cpu className="w-5 h-5 text-accent-emerald" />,
    level: 'Advanced / Core Focus',
    skills: [
      'Supervised Learning',
      'XGBoost & LightGBM',
      'CatBoost',
      'Scikit-Learn',
      'Feature Engineering',
      'Model Evaluation & Error Analysis',
      'Bayesian Optimization (Optuna)',
      'PyTorch Foundations'
    ]
  },
  {
    title: 'Generative AI & Agentic Systems',
    icon: <Layers className="w-5 h-5 text-accent-emerald" />,
    level: 'Specialization',
    skills: [
      'Google Gemini 2.5 Flash API',
      'Function Calling & Tool Use',
      'Autonomous Agent Architectures',
      'Prompt Engineering & Evaluation',
      'Behavioral Modeling',
      'RAG Architectures'
    ]
  },
  {
    title: 'Robotics & Industrial Automation',
    icon: <Wrench className="w-5 h-5 text-accent-emerald" />,
    level: 'Field Proven (Franklin Electric)',
    skills: [
      'DOBOT Collaborative Robots',
      'Tool Center Point (TCP) Calibration',
      'Kinematic Motion Optimization',
      'Work Object Coordinate Systems',
      'Industrial Safety & I/O Integration',
      'Cycle Time Reduction & Scrap Analysis'
    ]
  },
  {
    title: 'Programming & Data Engineering',
    icon: <Terminal className="w-5 h-5 text-accent-emerald" />,
    level: 'Full-Stack Proficiency',
    skills: [
      'Python (Advanced)',
      'SQL & Database Design',
      'C / C++ (Intermediate)',
      'Pandas & Polars',
      'FastAPI & Pydantic v2',
      'Docker Containerization',
      'TypeScript & React',
      'Git & CI/CD Pipelines'
    ]
  },
  {
    title: 'Operational & Manufacturing Analytics',
    icon: <Database className="w-5 h-5 text-accent-emerald" />,
    level: 'Production Scale',
    skills: [
      'SAP Data Extraction',
      'Excel Maintenance Analytics',
      'Production Downtime Analysis',
      'Failure Mode Root-Cause Detection',
      'Process Improvement (Kaizen)',
      'Statistical Quality Control'
    ]
  }
];

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-ink-900/10 pb-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-emerald uppercase">
            03 / Engineering Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-ink-950 mt-2">
            Technical Competencies & <br />
            Industrial Toolkit.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-500 max-w-md font-normal leading-relaxed">
          From algorithmic model fine-tuning to physical robotic coordinate calibration in heavy manufacturing lines.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <div 
            key={idx}
            className="glass-card p-8 rounded-3xl space-y-6 hover:border-accent-green/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-cream-200 flex items-center justify-center">
                {cat.icon}
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cream-200/90 text-ink-600 font-medium">
                {cat.level}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-ink-950">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-ink-900/5">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg bg-cream-100 text-ink-700 text-xs font-mono hover:bg-accent-tint hover:text-accent-emerald transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

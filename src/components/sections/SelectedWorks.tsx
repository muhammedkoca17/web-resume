import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Bookmark, BookmarkCheck } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Project {
  id: string;
  tag: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  metrics: string;
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'mindfulspend',
    tag: 'Generative AI & Agentic Finance',
    title: 'MindfulSpend AI',
    role: 'Lead AI Engineer & Full-Stack Architect',
    period: '2026',
    description: 'A proactive behavioral financial coaching platform activated at the point of spending. Containerized with Docker and powered by FastAPI and SQLAlchemy.',
    highlights: [
      'Integrated Google Gemini 2.5 Flash as an autonomous AI agent with Function Calling to analyze live budgets and transaction data.',
      'Trained 3 XGBoost models on consumer behavioral data to predict budget risks and impulsive tendencies.',
      'Developed a novel mathematical scoring model for behavioral financial risk by mathematically inverting classical RFM analysis.'
    ],
    metrics: '3 Production Models • Real-time Gemini Function Calling',
    tech: ['Python', 'Gemini API', 'XGBoost', 'FastAPI', 'React', 'TypeScript', 'Docker', 'Tailwind CSS']
  },
  {
    id: 'dobot-robotics',
    tag: 'Industrial Automation & Robotics',
    title: 'Dobot Robotic Trajectory & TCP Optimization',
    role: 'Advanced Manufacturing Engineer @ Franklin Electric',
    period: '2025 – 2026',
    description: 'Managed end-to-end commissioning, programming, and safety integration of DOBOT collaborative robotic workcells in high-throughput assembly lines.',
    highlights: [
      'Calibrated Tool Center Point (TCP) and defined Tool Data parameters for custom vacuum grippers.',
      'Resolved manufacturing bottlenecks by optimizing robotic kinematic motion curves and conducting in-depth fault analysis.',
      'Awarded the Franklin Electric Sustainability Award for process improvements and scrap reduction.'
    ],
    metrics: '15% Cycle Time Cut (20s → 17s) • Zero-Downtime Reliability',
    tech: ['DOBOT Robotics', 'Industrial I/O', 'TCP Calibration', 'Kinematics', 'Safety Scanners', 'Python Data Analysis']
  },
  {
    id: 'grid-up-ml',
    tag: 'Competitive Machine Learning',
    title: 'Grid Up Datathon ML Architecture',
    role: 'Machine Learning Specialist',
    period: '2026',
    description: 'End-to-end competitive tabular feature engineering and predictive modeling pipeline built on multi-modal operational data.',
    highlights: [
      'Engineered non-linear temporal lag features, rolling aggregations, and high-cardinality target encodings.',
      'Benchmarked ensemble architectures: LightGBM, CatBoost, and XGBoost with Bayesian Hyperparameter Optimization (Optuna).',
      'Extracted repeatable production validation protocols preventing data leakage across temporal splits.'
    ],
    metrics: 'Top Tier Datathon Score • Rigorous Out-of-Fold Validation',
    tech: ['Python', 'LightGBM', 'XGBoost', 'Optuna', 'Pandas', 'Scikit-Learn', 'Feature Engineering']
  }
];

export const SelectedWorks: React.FC = () => {
  const [bookmarkedProjects, setBookmarkedProjects] = useLocalStorage<string[]>('bookmarked_projects', ['mindfulspend']);
  const [activeTab, setActiveTab] = useState<string>('all');

  const toggleBookmark = (id: string) => {
    setBookmarkedProjects(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="works" className="py-24 sm:py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-ink-900/10 pb-8">
        <div>
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-emerald uppercase">
            02 / Selected Works & Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-ink-950 mt-2">
            Engineered for Production, <br />
            Backed by Rigorous Models.
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {['all', 'ai', 'robotics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-150 ${
                activeTab === tab
                  ? 'bg-ink-950 text-white font-medium shadow-sm'
                  : 'bg-white border border-ink-900/10 text-ink-600 hover:bg-cream-200'
              }`}
            >
              {tab === 'all' ? 'All Works (3)' : tab === 'ai' ? 'Generative AI & ML' : 'Robotics & Automation'}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS.filter(p => {
          if (activeTab === 'ai') return p.id === 'mindfulspend' || p.id === 'grid-up-ml';
          if (activeTab === 'robotics') return p.id === 'dobot-robotics';
          return true;
        }).map((project, idx) => {
          const isSaved = bookmarkedProjects.includes(project.id);
          return (
            <div 
              key={project.id}
              className="glass-card p-8 sm:p-12 rounded-3xl transition-all duration-300 hover:border-accent-green/40 hover:shadow-xl hover:shadow-ink-950/5 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Left Info */}
                <div className="space-y-4 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-tint text-accent-emerald font-semibold uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <span className="text-xs font-mono text-ink-400">
                      Phase {idx + 1} • {project.period}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-ink-950 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-ink-500 uppercase tracking-wider">
                    Role: <span className="text-ink-900 font-semibold">{project.role}</span>
                  </p>

                  <p className="text-sm sm:text-base text-ink-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 pt-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-600">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-lg bg-cream-200/80 border border-ink-900/5 text-ink-800 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics & Bookmark Card */}
                <div className="lg:w-72 shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-cream-100/90 border border-ink-900/10 space-y-6">
                  <div>
                    <span className="text-[11px] font-mono text-ink-400 uppercase tracking-widest">
                      Key Benchmark Metric
                    </span>
                    <p className="text-base sm:text-lg font-display font-bold text-ink-950 mt-1">
                      {project.metrics}
                    </p>
                  </div>

                  {/* LocalStorage Bookmark Toggle */}
                  <div className="pt-4 border-t border-ink-900/10 flex items-center justify-between">
                    <button
                      onClick={() => toggleBookmark(project.id)}
                      className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-150 ${
                        isSaved
                          ? 'bg-accent-emerald text-white'
                          : 'bg-white border border-ink-900/15 text-ink-700 hover:border-accent-emerald'
                      }`}
                    >
                      {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      <span>{isSaved ? 'Bookmarked' : 'Save Project'}</span>
                    </button>

                    <a 
                      href="#lab"
                      className="text-xs font-semibold text-accent-emerald hover:underline flex items-center gap-0.5"
                    >
                      <span>Simulate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

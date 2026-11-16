import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroCanvas } from './components/hero/HeroCanvas';
import { Manifesto } from './components/sections/Manifesto';
import { SelectedWorks } from './components/sections/SelectedWorks';
import { SkillsMatrix } from './components/sections/SkillsMatrix';
import { InteractiveLab } from './components/sections/InteractiveLab';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-100 text-ink-900 font-sans selection:bg-accent-green selection:text-white">
      {/* Floating Pill Header */}
      <Navbar />

      {/* 60 FPS Canvas Cursor Tracking Hero */}
      <main>
        <HeroCanvas />

        {/* 01 / Manifesto & Background */}
        <Manifesto />

        {/* 02 / Selected Works & Case Studies */}
        <SelectedWorks />

        {/* 03 / Engineering Arsenal (Skills Matrix) */}
        <SkillsMatrix />

        {/* 04 / Interactive Lab & LocalStorage Simulator */}
        <InteractiveLab />
      </main>

      {/* 05 / Footer & Contact */}
      <Footer />
    </div>
  );
};

export default App;

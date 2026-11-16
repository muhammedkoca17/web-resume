import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Frame cache
    const totalFrames = 64;
    const frames: HTMLImageElement[] = [];
    let centerFrame: HTMLImageElement | null = null;
    let loaded = 0;

    // Load center frame
    const centerImg = new Image();
    centerImg.src = '/frames/center.webp';
    centerImg.onload = () => {
      centerFrame = centerImg;
      loaded++;
      setLoadedCount(loaded);
      if (loaded >= totalFrames + 1) setIsLoaded(true);
    };

    // Load 64 circular frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(3, '0')}.webp`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= totalFrames + 1) setIsLoaded(true);
      };
      frames.push(img);
    }

    // Cursor tracking state
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentAngle = 0;
    let currentDistance = 0;
    let animationFrameId: number;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      targetX = clientX;
      targetY = clientY;
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove);

    // Shortest-path circular angular lerp
    const lerpAngle = (start: number, end: number, t: number) => {
      let diff = (end - start) % (2 * Math.PI);
      if (diff < -Math.PI) diff += 2 * Math.PI;
      if (diff > Math.PI) diff -= 2 * Math.PI;
      return start + diff * t;
    };

    // 60 FPS Canvas Render Loop
    const render = () => {
      // Character center in canvas coordinates (centered or slightly right on desktop)
      const isMobile = canvas.width < 768;
      const characterCenterX = isMobile ? canvas.width * 0.5 : canvas.width * 0.62;
      const characterCenterY = canvas.height * 0.52;

      const dx = targetX - characterCenterX;
      const dy = targetY - characterCenterY;
      const targetAngle = Math.atan2(dy, dx);
      const targetDist = Math.hypot(dx, dy);

      // Shortest path circular lerp with fast factor 0.26 for ~35ms zero-lag response
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.24);
      currentDistance += (targetDist - currentDistance) * 0.2;

      // Clear with background color (#18C153 or soft tone)
      ctx.fillStyle = '#18C153';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Check center deadzone (within ~14% of viewport dimension)
      const deadzoneRadius = Math.min(canvas.width, canvas.height) * 0.15;
      const isNearCenter = currentDistance < deadzoneRadius;

      // Select frame
      let activeImage: HTMLImageElement | null = null;
      if (isNearCenter && centerFrame && centerFrame.complete) {
        activeImage = centerFrame;
      } else if (frames.length === totalFrames) {
        // Normalize angle to [0, 2*PI)
        let normalizedAngle = currentAngle % (2 * Math.PI);
        if (normalizedAngle < 0) normalizedAngle += 2 * Math.PI;
        // Map to 0..63
        const frameIndex = Math.floor((normalizedAngle / (2 * Math.PI)) * totalFrames) % totalFrames;
        const candidate = frames[frameIndex];
        if (candidate && candidate.complete) {
          activeImage = candidate;
        }
      }

      // Draw active frame maintaining aspect ratio (contain/cover)
      if (activeImage && activeImage.naturalWidth > 0) {
        const imgAspect = activeImage.naturalWidth / activeImage.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawW: number;
        let drawH: number;
        let drawX: number;
        let drawY: number;

        if (canvasAspect > imgAspect) {
          drawW = canvas.width;
          drawH = canvas.width / imgAspect;
          drawX = 0;
          drawY = (canvas.height - drawH) / 2;
        } else {
          drawH = canvas.height;
          drawW = canvas.height * imgAspect;
          drawX = (canvas.width - drawW) / 2;
          drawY = 0;
        }

        // Draw exactly one frame with 100% opacity (zero ghosting)
        ctx.drawImage(activeImage, drawX, drawY, drawW, drawH);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-accent-green">
      {/* 60 FPS Interactive Tracking Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block object-cover z-0"
      />

      {/* Subtle Bottom & Left Gradient Blend into Cream Body */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cream-100 via-transparent to-transparent opacity-90 h-32 bottom-0 z-10" />
      <div className="hidden lg:block absolute inset-0 pointer-events-none bg-gradient-to-r from-cream-100/90 via-cream-100/40 to-transparent w-1/2 z-10" />

      {/* Floating Hero Editorial Typography Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-16 sm:pb-24 pointer-events-none">
        <div className="max-w-xl pointer-events-auto space-y-5">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-ink-900/10 text-ink-900 text-xs font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
            <span>Applied AI & Machine Learning Engineer</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-ink-950 leading-[0.95]">
            MUHAMMED <br />
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">KOCA</span>
          </h1>

          {/* Concise Bio */}
          <p className="text-ink-900/90 text-sm sm:text-base font-normal leading-relaxed max-w-md bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
            Electrical & Electronic Engineer transforming real-world manufacturing and consumer behavior with 
            <strong className="text-ink-950 font-semibold"> Gemini 2.5 Flash, XGBoost, and Collaborative Robotics</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#works"
              className="px-6 py-3 rounded-full bg-ink-950 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-ink-950/15 hover:bg-accent-emerald hover:text-white transition-all duration-150 active:scale-95"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="/Muhammed_Koca_CV_ML_EN.pdf"
              download
              className="px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-ink-900/15 text-ink-900 font-medium text-sm flex items-center gap-2 hover:bg-white transition-all duration-150 active:scale-95"
            >
              <Download className="w-4 h-4 text-accent-green" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Loading Overlay Badge */}
        {!isLoaded && loadedCount > 0 && (
          <div className="absolute top-20 right-6 z-30 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono text-ink-700 border border-ink-950/10 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-accent-green animate-spin" />
            <span>Streaming 60 FPS WebP frames ({loadedCount}/65)</span>
          </div>
        )}
      </div>
    </section>
  );
};

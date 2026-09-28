'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '@/types/content';
import { ExternalLink, Play, Pause, ChevronLeft, ChevronRight, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Work3DCarouselProps {
  projects: ProjectItem[];
  onOpenModal?: () => void;
  showSeeAll?: boolean;
}

export function Work3DCarousel({ projects, onOpenModal, showSeeAll = true }: Work3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, projects.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <div className="w-full space-y-8 py-6 relative overflow-hidden select-none">
      
      {/* 3D Coverflow Container */}
      <div className="relative h-[320px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center">
        
        {projects.map((project, idx) => {
          // Calculate offset relative to active index
          const isActive = idx === activeIndex;
          const isLeft = idx === (activeIndex - 1 + projects.length) % projects.length;
          const isRight = idx === (activeIndex + 1) % projects.length;

          // Determine visibility & position
          if (!isActive && !isLeft && !isRight) {
            return null; // hide non-adjacent cards
          }

          let translateX = '0%';
          let scale = 1;
          let opacity = 1;
          let zIndex = 30;
          let brightness = 'brightness(100%)';

          if (isLeft) {
            translateX = '-75%';
            scale = 0.82;
            opacity = 0.45;
            zIndex = 10;
            brightness = 'brightness(40%)';
          } else if (isRight) {
            translateX = '75%';
            scale = 0.82;
            opacity = 0.45;
            zIndex = 10;
            brightness = 'brightness(40%)';
          }

          return (
            <motion.div
              key={project.slug}
              onClick={() => setActiveIndex(idx)}
              animate={{
                x: translateX,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute top-0 w-[85%] sm:w-[70%] max-w-[760px] aspect-[16/10] sm:aspect-[16/9] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/20 shadow-2xl cursor-pointer bg-slate-950 ${
                isActive ? 'ring-2 ring-[#6a57fa]/50 shadow-[#6a57fa]/20' : ''
              }`}
              style={{ filter: brightness }}
            >
              {/* Cover Image */}
              {/* eslint-disable-next-html-extension */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover block"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Top Website Pill Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-black text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-black" />
                  <span>Website</span>
                </span>
              </div>

              {/* Year & Category Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
                  {project.category}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Click Navigation Overlay Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Project"
          className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all shadow-xl hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Project"
          className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all shadow-xl hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

      {/* Active Project Title & Description Below Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.slug}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-2xl mx-auto space-y-2 px-4"
        >
          <Link
            href={`/work/${activeProject.slug}`}
            className="inline-flex items-center gap-2 text-2xl sm:text-4xl font-black font-display text-[var(--text-primary)] hover:text-[#6a57fa] transition-colors"
          >
            <span>{activeProject.title.split('—')[0]}</span>
            <ArrowUpRight className="w-6 h-6 text-[#6a57fa]" />
          </Link>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl mx-auto">
            {activeProject.summary}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Controls Bar (Pagination Dots + Play/Pause Button) */}
      <div className="flex items-center justify-center gap-4 pt-2">
        {/* Pagination Lines/Dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-[#6a57fa]'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] flex items-center justify-center hover:border-[#6a57fa] transition-colors shadow-sm ml-2"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>
      </div>

      {/* Big "SEE ALL WORKS ↗" CTA Button Below Controls */}
      {showSeeAll && (
        <div className="flex justify-center pt-3">
          <Link
            href="/work"
            className="px-10 py-4 rounded-full bg-white border-2 border-slate-300 text-black text-sm sm:text-base font-black uppercase tracking-wider shadow-xl hover:bg-slate-50 hover:border-[#6a57fa] hover:text-[#6a57fa] hover:scale-105 transition-all flex items-center gap-2.5 group"
          >
            <span>See All Works</span>
            <ArrowUpRight className="w-5 h-5 text-[#6a57fa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}

    </div>
  );
}


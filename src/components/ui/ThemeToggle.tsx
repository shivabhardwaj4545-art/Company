'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 opacity-50" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle Theme"
      data-cursor="hover"
      className="relative flex items-center w-14 h-8 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--bg)] text-[var(--text-primary)] shadow-sm"
        animate={{
          x: isDark ? 24 : 0,
          rotate: isDark ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-blue-400" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </button>
  );
}

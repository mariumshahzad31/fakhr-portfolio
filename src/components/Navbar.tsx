'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'About Me', href: 'about' },
  { label: 'Events', href: 'events' },
  { label: 'Contact Me', href: 'contact' },
];

const listVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (href: string) => {
    setMenuOpen(false);
    const section = document.getElementById(href);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080504]/70 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-500 sm:px-8">
        <button
          type="button"
          onClick={() => handleNavigation('home')}
          className="text-xl font-semibold uppercase tracking-[0.28em] text-[#f7e8d8] transition-colors duration-200 hover:text-[#f5d8b3]"
          aria-label="Go to home section"
        >
          Fakhr&apos;s Portfolio
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavigation(item.href)}
              className={`relative text-sm font-medium uppercase tracking-[0.18em] text-[#e9ddcf] transition-colors duration-200 hover:text-[#f7e2c8] ${
                activeSection === item.href ? 'text-[#f9e4c8]' : ''
              }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d4b895] to-[#f7e2c8] transition-all duration-300 ${
                  activeSection === item.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              />
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5e9d2] transition duration-300 hover:border-[#d1b78b]/40 hover:text-[#f7dca9] md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex h-5 w-5 flex-col justify-between">
            <span className={`block h-[2px] w-full rounded-full bg-current transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-current transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
            className="md:hidden"
          >
            <div className="mx-4 mb-4 rounded-[32px] border border-white/10 bg-[#0b0908]/95 p-6 shadow-glow backdrop-blur-3xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigation(item.href)}
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm uppercase tracking-[0.2em] text-[#f6e9d4] transition duration-200 hover:border-[#d4b895]/40 hover:text-[#f7e2c8]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

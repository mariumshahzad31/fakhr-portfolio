'use client';

import { motion } from 'framer-motion';
import { fadeInGlow } from '../lib/motion';

const skillGroups = [
  {
    title: 'Visual direction',
    items: ['Editorial composition', 'Cinematic lighting', 'Storyboarding'],
  },
  {
    title: 'Production',
    items: ['Event coverage', 'Brand campaigns', 'Luxury shoots'],
  },
  {
    title: 'Delivery',
    items: ['Post-production', 'Retouching', 'Client collaboration'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 py-20 sm:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInGlow}
        className="mx-auto max-w-6xl rounded-[36px] border border-white/10 bg-[#100c09]/80 p-8 shadow-soft backdrop-blur-3xl sm:p-10 lg:p-12"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.36em] text-[#dbcaa7]">Core capabilities</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#f6eee0] sm:text-4xl">
              Built for calm execution, elevated detail, and memorable visual impact.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#d7cab4]">
            Each assignment is shaped with thoughtful preparation, refined aesthetic judgment, and a strong sense of atmosphere.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[24px] border border-white/10 bg-[#130e0b]/85 p-6">
              <h3 className="text-lg font-semibold text-[#f6e8d5]">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[#e2d3b7]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

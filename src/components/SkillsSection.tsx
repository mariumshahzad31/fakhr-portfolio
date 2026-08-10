'use client';

import { motion } from 'framer-motion';
import { fadeInGlow } from '../lib/motion';

const skillGroups = [
  {
    title: 'Visual direction',
    description: 'Planning every shot with intentional lighting, composition and story in mind.',
  },
  {
    title: 'Production',
    description: 'Capturing events and brand campaigns with smooth, multi-camera setups.',
  },
  {
    title: 'Delivery',
    description: 'Delivering sharp, beautifully color-graded assets right on time.',
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
              Steady hands, sharp eye, dependable results
            </h2>
          </div>
        </div>

        <div className="mt-10 rounded-[24px] border border-white/10 bg-[#130e0b]/85 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold text-[#f6e8d5]">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#e2d3b7]">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
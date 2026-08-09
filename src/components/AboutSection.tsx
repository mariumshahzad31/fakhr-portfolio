'use client';

import { motion } from 'framer-motion';
import { fadeInGlow } from '../lib/motion';

const strengths = [
  {
    title: 'Cinematic direction',
    description: 'A calm, composed presence that helps every moment feel effortless and intentional.',
  },
  {
    title: 'Luxury brand storytelling',
    description: 'Thoughtful visual language that elevates product launches, corporate milestones, and premium narratives.',
  },
  {
    title: 'Seamless production',
    description: 'From planning to delivery, every detail is shaped for clarity, beauty, and reliability.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInGlow}
        className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-[#0f0c0a]/80 p-8 shadow-soft backdrop-blur-3xl sm:p-12 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.36em] text-[#e9d9c1]">About Me</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#f7ece0] sm:text-4xl">
              A refined visual storyteller committed to making every frame feel polished, personal, and lasting.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#d7cab4] sm:text-lg">
              <p>
                With more than three decades of experience, I’ve built a practice around precision, warmth, and narrative clarity. My work spans corporate productions, branded campaigns, intimate celebrations, and large-scale events.
              </p>
              <p>
                I’ve had the privilege of working with leading organizations across Pakistan and beyond, while also producing deeply emotional weddings, birthdays, and family milestones. Every project is approached with the same promise: thoughtful storytelling and elevated execution.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d7c39f]">Signature strengths</p>
            <div className="mt-6 space-y-4">
              {strengths.map((item) => (
                <div key={item.title} className="rounded-[22px] border border-white/10 bg-[#120d0a]/70 p-4">
                  <p className="text-base font-semibold text-[#f8e8d2]">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[#d4c5ab]">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-[#d4b895]/20 bg-[#d4b895]/10 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-[#f9e7cb]">Approach</p>
              <p className="mt-2 text-sm leading-7 text-[#f4e6d4]">
                Quiet confidence, meticulous preparation and a luxury feel from first concept to final delivery.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

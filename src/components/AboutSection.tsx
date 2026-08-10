'use client';

import { motion } from 'framer-motion';
import { fadeInGlow } from '../lib/motion';

const strengths = [
  {
    title: 'Cinematic Direction',
    description: 'I dont just point a camera and shoot, I read the room, anticipate the moment and frame it before it happens. That instinct comes from decades behind the lens.',
  },
  {
    title: 'End-to-End Reliability',
    description: 'From the first planning call to final delivery, my team and I handle every detail so you never have to think twice on the day of the event.',
  },
  {
    title: 'Emotion Behind the Moment',
    description: 'Whether is a product launch or a wedding vow, I am always looking for the feeling behind the moment, not just the image.',
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
              Creating fresh, high-end photos and videos that actually feel like you            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-[#d7cab4] sm:text-lg"><p>
                Photography, for me, is where precision meets emotion. Over the years I've built a reputation across corporate, branding and event work, trusted by names like DHL Pakistan, BYD Mega Motors, HUBCO, K-Electric and leading pharmaceutical firms.
              </p>
              <p>
                Alongside weddings, birthdays, and celebrations across Pakistan and beyond, I bring a global perspective to every project. Backed by a skilled team I've led for years and equipped with cinema-grade cameras, gimbals, and drones, we turn fleeting moments into timeless, high-impact visuals.
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}

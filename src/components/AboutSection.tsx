'use client';

import { motion } from 'framer-motion';
import { fadeInGlow } from '../lib/motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInGlow}
        className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-[#0f0c0a]/80 p-8 shadow-soft backdrop-blur-3xl sm:p-14"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.36em] text-[#e9d9c1]">About Me</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f7ece0] sm:text-4xl">
            A refined visual storyteller with a premium approach to every frame.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-8 text-[#d7cab4] sm:text-lg">
            <p>
              With years of experience in professional photography, I specialize in corporate, branding, and event photography. My work is defined by precision and visual storytelling, whether capturing the sophisticated identity of a brand or the raw emotion of a milestone celebration.
            </p>
            <p>
              I have had the privilege of collaborating with leading names in Pakistan’s corporate sector, including DHL Pakistan, BYD Mega Motors, HUBCO, K-Electric, and major pharmaceutical firms. Beyond the corporate world, my experience spans high-profile weddings, intimate birthdays, and diverse celebrations. My expertise extends across Pakistan and internationally, bringing a global perspective to every project.
            </p>
            <p>
              Backed by an elite team that I have supervised for years, we cover every event with top-tier professionalism. We utilize the latest production technology, including advanced cameras, cinema lenses, gimbals, and drones, to ensure every frame meets the highest global standards. Together, we turn fleeting moments into timeless, high-impact visuals.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

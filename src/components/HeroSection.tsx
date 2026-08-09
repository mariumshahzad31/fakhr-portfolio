'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/images/fakhr-portrait.jpg';
import { fadeInUp } from '../lib/motion';

const highlights = ['Luxury brand storytelling', 'Cinematic event coverage', 'Editorial detail & calm direction'];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[16rem] bg-[radial-gradient(circle_at_top,rgba(255,222,186,0.16),transparent_65%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b895]/30 bg-[#d4b895]/10 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#f2d8b0]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f1c078]" />
            Premium visual storytelling
          </div>
          <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#f9f0e7] sm:text-[3.6rem] lg:text-[4.4rem]">
            Elegant photography for prestigious, unforgettable moments.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#d6c8b1] sm:text-lg">
            I create refined visual narratives that feel cinematic, warm and undeniably premium from luxury events to modern brand stories.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#events"
              className="inline-flex items-center justify-center rounded-full border border-[#d4b895]/40 bg-[#d4b895]/15 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f9e5c9] transition duration-300 hover:border-[#f4d9b3]/60 hover:bg-[#d4b895]/25"
            >
              View recent work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f7ebdc] transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              Start a conversation
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <li key={item} className="rounded-full border border-white/10 bg-[#0d0a08]/70 px-4 py-2 text-sm text-[#e8d9c2]">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto flex max-w-[530px] justify-end"
        >
          <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#d5b285]/15 blur-3xl" />
          <div className="absolute right-0 top-14 h-24 w-24 rounded-full bg-[#f7e2c6]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#140f0c]/60 p-4 shadow-soft backdrop-blur-3xl">
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(255,222,186,0.15),transparent_48%)]" />
            <div className="relative overflow-hidden rounded-[30px] bg-[#120d0a]/80 p-5 shadow-glow">
              <div className="absolute left-6 top-6 rounded-full border border-[#d4b895]/30 bg-[#0e0a07]/70 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#f0d7b8]">
                Available worldwide
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060504]/80 to-transparent" />
              <Image
                src={heroPortrait}
                alt="Portrait of Fakhr Shahzad in a refined editorial setting"
                className="relative h-[430px] w-full rounded-[26px] object-cover shadow-[0_24px_90px_rgba(255,209,154,0.14)]"
                sizes="(max-width: 768px) 90vw, 520px"
                priority
              />
              <div className="absolute bottom-6 left-6 max-w-[240px] rounded-[24px] border border-white/10 bg-[#080604]/70 p-4 backdrop-blur-xl">
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#d9c09d]">Signature approach</p>
                <p className="mt-2 text-sm leading-6 text-[#f2e6d2]">
                  Calm direction, detailed preparation and imagery that feels timeless.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

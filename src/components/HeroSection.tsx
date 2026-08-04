'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroPortrait from '../assets/images/fakhr-portrait.jpg';
import { fadeInUp } from '../lib/motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="max-w-2xl"
        >
          <h1 className="text-[2.45rem] font-semibold leading-tight tracking-[-0.04em] text-[#f9f0e7] sm:text-[3.7rem] lg:text-[4.4rem]">
            35+ Years of Experience in Capturing Events, Stories & Emotions
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-[#d7cab4] sm:text-lg">
            I create premium visual narratives with cinematic warmth, elegant precision, and a modern editorial edge that feels both intimate and unforgettable.
          </p>
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
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#140f0c]/60 p-4 shadow-soft backdrop-blur-3xl">
            <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(255,222,186,0.15),transparent_48%)]" />
            <div className="relative overflow-hidden rounded-[32px] bg-[#120d0a]/80 p-6 shadow-glow">
              <div className="absolute -top-4 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#f7d6af]/70 via-transparent to-[#f7d6af]/70 blur-xl" />
              <Image
                src={heroPortrait}
                alt="Fakhr portrait in luxury cinematic style"
                className="relative h-[420px] w-full rounded-[32px] object-cover shadow-[0_24px_90px_rgba(255,209,154,0.14)]"
                sizes="(max-width: 768px) 90vw, 520px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

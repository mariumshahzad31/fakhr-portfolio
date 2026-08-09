'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { fadeInGlow } from '../lib/motion';

const contacts = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/fakhr-shahzad-8a669930a',
    href: 'https://www.linkedin.com/in/fakhr-shahzad-8a669930a/',
    icon: FiLinkedin,
  },
  {
    label: 'Email',
    value: 'galaxyshahzad@gmail.com',
    href: 'mailto:galaxyshahzad@gmail.com',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '03322557230',
    href: 'tel:03322557230',
    icon: FiPhone,
  },
  {
    label: 'Instagram',
    value: '@thegalaxystudio_',
    href: 'https://www.instagram.com/thegalaxystudio_?igsh=amx5aGR5am9hYXNu',
    icon: FiInstagram,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInGlow}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#0f0c0a]/85 p-8 shadow-soft backdrop-blur-3xl sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#dbcaa7]">Contact</p>
              <h2 className="text-3xl font-semibold leading-tight text-[#f6eee0] sm:text-4xl">
                Let’s create something refined, memorable, and unmistakably yours.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#d7cab4] sm:text-lg">
                Whether you’re planning a luxury event, a brand campaign, or a milestone celebration, I’d love to discuss the right approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#home" className="inline-flex items-center justify-center rounded-full border border-[#d4b895]/30 bg-[#d4b895]/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f7e1c8] transition duration-300 hover:border-[#f4d9b3]/50 hover:bg-[#d4b895]/20">
                  Back to top
                </a>
                <a href="mailto:galaxyshahzad@gmail.com" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#f8ebde] transition duration-300 hover:border-white/20 hover:bg-white/10">
                  Email directly
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#120d0a]/80 p-6 text-left shadow-soft transition duration-300 hover:border-[#d4b895]/40 hover:bg-[#17110d]/90"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4b895]/18 to-[#f5e5c0]/10 text-xl text-[#f7e1c8] shadow-glow">
                      <Icon aria-hidden="true" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#cfb38b]">{contact.label}</p>
                    <p className="mt-4 text-base font-semibold tracking-tight text-[#f5ead3]">{contact.value}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
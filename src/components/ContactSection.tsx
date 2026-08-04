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
        <div className="mb-12 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#dbcaa7]">Contact</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f6eee0] sm:text-4xl">
            Start your next premium story with expert visual craftsmanship.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#d7cab4] sm:text-lg">
            Reach out for refined event production, editorial brand shoots, and cinematic storytelling tailored to luxury audiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0e0b09]/80 p-6 text-left shadow-soft transition duration-300 hover:border-[#d4b895]/40 hover:bg-[#17110d]/80"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d4b895]/18 to-[#f5e5c0]/10 text-2xl text-[#f7e1c8] shadow-glow">
                  <Icon aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#cfb38b]">{contact.label}</p>
                <p className="mt-4 text-lg font-semibold tracking-tight text-[#f5ead3]">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fadeInUp } from '../lib/motion';
import { eventCards } from '../utils/eventCards';

export default function EventsSection() {
  return (
    <section id="events" className="relative px-6 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="mx-auto max-w-7xl"
      >
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#dbcaa7]">Selected Work</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f6eee0] sm:text-4xl">
            A curated look at weddings, corporate moments and celebration storytelling.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#d7cab4] sm:text-lg">
            Each project is shaped around atmosphere, emotion and the feeling you want to leave behind.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={28}
          slidesPerView={1.05}
          loop
          autoplay={{ delay: 3600, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          grabCursor
          breakpoints={{
            768: { slidesPerView: 1.18 },
            1024: { slidesPerView: 1.4 },
          }}
          className="pb-8"
        >
          {eventCards.map((event) => (
            <SwiperSlide key={event.title}>
              <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#0d0a08]/80 shadow-soft transition duration-500 hover:-translate-y-1">
                <div className="relative h-[540px] overflow-hidden rounded-[36px] bg-[#0b0907]">
                  <video
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    src={event.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${event.title} event preview`}
                  />
                  <div className={`absolute inset-0 ${event.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060504]/95 via-[#060504]/20 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-full border border-[#d4b895]/30 bg-[#0b0907]/80 px-3 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-[#f4dfbf]">
                    {event.pill}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-8 sm:px-8 sm:py-10">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#dac9a6]">{event.title}</p>
                    <h3 className="text-2xl font-semibold leading-tight text-[#f5ecd8]">{event.subtitle}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#d3c3a3]">{event.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {event.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-[#f2e1c4]">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
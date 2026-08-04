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
        <div className="mb-12 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#dbcaa7]">Event Experiences</p>
          <h2 className="text-3xl font-semibold leading-tight text-[#f6eee0] sm:text-4xl">
            Cinematic event narratives built for memorable campaigns and celebrations.
          </h2>
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
              <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-[#0d0a08]/75 shadow-soft backdrop-blur-3xl transition duration-500 hover:-translate-y-1">
                <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-[#0b0907]">
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
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-[36px] bg-gradient-to-t from-[#090706]/95 via-transparent to-transparent px-6 py-8 sm:px-8">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#dac9a6]">{event.title}</p>
                    <h3 className="text-2xl font-semibold leading-tight text-[#f5ecd8]">{event.subtitle}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#d3c3a3]">{event.description}</p>
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
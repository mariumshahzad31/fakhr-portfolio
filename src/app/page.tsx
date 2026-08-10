import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#060504] text-[#f7ede4]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,229,200,0.16)_0%,rgba(255,229,200,0)_55%)] blur-3xl opacity-60" />
      <div className="pointer-events-none absolute right-0 top-[25%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(204,154,102,0.14)_0%,rgba(204,154,102,0)_60%)] blur-3xl opacity-70" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EventsSection />
      <ContactSection />
      <footer className="border-t border-white/10 bg-[#060504]/90 py-8 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-[#d4c4af] md:px-8">
          Available for premium commissions worldwide , crafted with calm precision, cinematic warmth and a polished editorial eye.
        </div>
      </footer>
    </main>
  );
}

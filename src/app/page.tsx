import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import NewsSection from '@/components/home/NewsSection';
import LeadersSection from '@/components/home/LeadersSection';
import EventsSection from '@/components/home/EventsSection';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MissionSection />
      <NewsSection />
      <LeadersSection />
      <EventsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

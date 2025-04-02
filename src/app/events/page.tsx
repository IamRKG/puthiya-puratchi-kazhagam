import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import PastEvents from "@/components/events/PastEvents";
import EventsGallery from "@/components/events/EventsGallery";
import CallToAction from "@/components/home/CallToAction";

export default function EventsPage() {
  return (
    <main>
      <EventsHero />
      <UpcomingEvents />
      <PastEvents />
      <EventsGallery />
      <CallToAction />
    </main>
  );
}

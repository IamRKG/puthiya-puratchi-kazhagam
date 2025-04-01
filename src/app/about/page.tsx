import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutHistory from "@/components/about/AboutHistory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import AboutFAQ from "@/components/about/AboutFAQ";
import CallToAction from "@/components/home/CallToAction";

export const metadata = {
  title: "எங்களை பற்றி | புதிய புரட்சி கழகம்",
  description: "புதிய புரட்சி கழகத்தின் வரலாறு, நோக்கம், மதிப்புகள் மற்றும் தலைவர்களைப் பற்றி அறிந்து கொள்ளுங்கள்.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutMission />
      <AboutHistory />
      <AboutValues />
      <AboutTeam />
      <AboutFAQ />
      <CallToAction />
    </main>
  );
}

import ManifestoHero from "@/components/manifesto/ManifestoHero";
import ManifestoPrinciples from "@/components/manifesto/ManifestoPrinciples";
import ManifestoVision from "@/components/manifesto/ManifestoVision";
import ManifestoGoals from "@/components/manifesto/ManifestoGoals";
import ManifestoPromises from "@/components/manifesto/ManifestoPromises";
import CallToAction from "@/components/home/CallToAction";

export const metadata = {
  title: "கொள்கைகள் | புதிய புரட்சி கழகம்",
  description: "புதிய புரட்சி கழகத்தின் கொள்கைகள், நோக்கங்கள் மற்றும் வாக்குறுதிகள்.",
};

export default function ManifestoPage() {
  return (
    <main>
      <ManifestoHero />
      <ManifestoPrinciples />
      <ManifestoVision />
      <ManifestoGoals />
      <ManifestoPromises />
      <CallToAction />
    </main>
  );
}

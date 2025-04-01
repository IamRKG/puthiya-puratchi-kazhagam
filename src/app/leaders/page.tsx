import LeadersHero from "@/components/leaders/LeadersHero";
import LeadershipTeam from "@/components/leaders/LeadershipTeam";
import LeadershipVision from "@/components/leaders/LeadershipVision";
import LeadershipQuotes from "@/components/leaders/LeadershipQuotes";
import CallToAction from "@/components/home/CallToAction";

export default function LeadersPage() {
  return (
    <main>
      <LeadersHero />
      <LeadershipTeam />
      <LeadershipVision />
      <LeadershipQuotes />
       <CallToAction />
    </main>
  );
}

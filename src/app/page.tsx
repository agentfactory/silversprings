import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { WhyWeExist } from "@/components/home/why-we-exist";
import { FeaturedStory } from "@/components/home/featured-story";
import { ProgramsGrid } from "@/components/home/programs-grid";
import { GivingTiers } from "@/components/home/giving-tiers";
import { VolunteerBand } from "@/components/home/volunteer-band";
import { JoinCta } from "@/components/home/join-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <WhyWeExist />
      <FeaturedStory />
      <ProgramsGrid />
      <GivingTiers />
      <VolunteerBand />
      <JoinCta />
    </>
  );
}

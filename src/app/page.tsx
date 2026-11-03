import { pageMeta } from "@/lib/seo";
import { HomeHero } from "@/components/home/HomeHero";
import { Manifesto } from "@/components/home/Manifesto";
import { Pillars } from "@/components/home/Pillars";
import { DisciplinesRail } from "@/components/home/DisciplinesRail";
import { RoadmapStory } from "@/components/home/RoadmapStory";
import { Updates } from "@/components/home/Updates";
import { Toolkit } from "@/components/home/Toolkit";
import { Voices } from "@/components/home/Voices";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = {
  ...pageMeta({
    title: "Bannu Digital Hub | Freelancers, Developers and Designers in Bannu",
    description:
      "Bannu Digital Hub is a grassroots community connecting freelancers, developers, designers and students across Bannu and Southern Khyber Pakhtunkhwa. Learn, find talent and attend meetups.",
    path: "/",
  }),
  title: { absolute: "Bannu Digital Hub | Freelancers, Developers and Designers in Bannu" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Manifesto />
      <Pillars />
      <DisciplinesRail />
      <RoadmapStory />
      <Updates />
      <Toolkit />
      <Voices />
      <FaqSection />
      <FinalCta />
    </>
  );
}

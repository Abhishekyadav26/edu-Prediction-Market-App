'use client';

import { CTASection } from "@/components/dash/cta-section";
import { FeaturesSection } from "@/components/dash/features-section";
import { HeroSection } from "@/components/dash/hero-section";
import { StatsSection } from "@/components/dash/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
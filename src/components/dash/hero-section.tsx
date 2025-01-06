'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">
            Predict. Trade. Profit.
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Join the future of prediction markets. Trade on outcomes, leverage collective wisdom,
            and earn rewards for accurate predictions.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dash">
            <Button size="lg">
              Start Trading <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
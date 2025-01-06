'use client';

import { Button } from "../ui/button";


export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of traders making smarter predictions and earning rewards.
          Start your journey today.
        </p>
        <Button size="lg" variant="secondary">
          Create Free Account
        </Button>
      </div>
    </section>
  );
}
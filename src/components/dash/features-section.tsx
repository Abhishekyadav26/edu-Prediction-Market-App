'use client';

import { Card } from '@/components/ui/card';
import { BarChart2, Brain, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="h-8 w-8 mb-4 text-chart-1" />,
    title: 'Real-time Markets',
    description: 'Access live prediction markets with real-time price updates and market trends.'
  },
  {
    icon: <Brain className="h-8 w-8 mb-4 text-chart-2" />,
    title: 'Smart Analytics',
    description: 'Advanced analytics and insights to help you make informed trading decisions.'
  },
  {
    icon: <Users className="h-8 w-8 mb-4 text-chart-3" />,
    title: 'Community Wisdom',
    description: 'Leverage collective intelligence from thousands of traders worldwide.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 mb-4 text-chart-4" />,
    title: 'Secure Trading',
    description: 'Enterprise-grade security ensuring your assets are always protected.'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
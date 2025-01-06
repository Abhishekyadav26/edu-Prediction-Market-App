'use client';

export function StatsSection() {
  const stats = [
    { value: '$10M+', label: 'Trading Volume' },
    { value: '50K+', label: 'Active Traders' },
    { value: '95%', label: 'Accuracy Rate' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
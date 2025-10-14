// components/Features.tsx
import Image from 'next/image';
import React from 'react';
// 1. Importamos o componente de animação
import { AnimateOnScroll } from './AnimateOnScroll';

interface FeaturesProps {
  data: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((feature, index) => (
          <AnimateOnScroll
            key={index}
          >
            <div className="bg-background h-full p-8 rounded-xl shadow-lg text-center border border-border transition-transform hover:-translate-y-2">
              <div className="mx-auto w-14 h-14 relative bg-secondary rounded-full flex items-center justify-center mb-6">
                <Image
                  alt={feature.title}
                  src={feature.icon}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Features;
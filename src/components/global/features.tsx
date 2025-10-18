// components/global/features.tsx
import Image from 'next/image';
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll'; // Padrão kebab-case

/**
 * @interface Feature
 * @property {string} title - Título da feature.
 * @property {string} description - Descrição da feature.
 * @property {string} icon - URL do ícone.
 */
interface Feature {
  title: string;
  description: string;
  icon: string;
}

/**
 * @interface FeaturesProps
 * @property {Feature[]} data - Array de features.
 */
interface FeaturesProps {
  data: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <section className='py-16 md:py-24'>
      {/* Adiciona padding horizontal (px-4) se o container global não for usado. Como é o caso, o container já faz isso. */}
      <div className="container mx-auto px-4">
        {/* Aumentamos o gap em telas maiores para melhor espaçamento. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.map((feature, index) => (
            <AnimateOnScroll key={index}>
              <div className="bg-background h-full p-6 md:p-8 rounded-xl shadow-lg text-center border border-border transition-transform hover:-translate-y-2">
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
      </div>
    </section>
  );
};

export default Features;
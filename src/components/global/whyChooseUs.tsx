// components/WhyChooseUs.tsx
import Image from 'next/image';
import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

interface WhyChooseUsProps {
  data: {
    title: string;
    reasons: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

const variantsFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const variantsFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  return (
    <section className="py-16 lg:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <AnimateOnScroll
            className="w-full lg:w-1/2 flex justify-center"
            variants={variantsFromLeft}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                alt="Prato de comida da foodie"
                src={'/img/food.png'}
                fill
                className="object-contain"
              />
            </div>
          </AnimateOnScroll>

          <div className="w-full lg:w-1/2">
            <AnimateOnScroll variants={variantsFromRight}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {data.title}
              </h2>
            </AnimateOnScroll>

            <div className="mt-8 space-y-6">
              {data.reasons.map((reason, index) => (
                <AnimateOnScroll
                  key={index}
                  delay={0.2 + index * 0.15}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full shrink-0">
                      <Image
                        alt={reason.title}
                        src={reason.icon}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{reason.title}</h3>
                      <p className="text-muted-foreground mt-1">{reason.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
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

// 1. Definindo as variantes de animação para esta seção
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
    // 5. Adicionado overflow-x-hidden para evitar barras de rolagem durante a animação
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 overflow-x-hidden">

      {/* 2. Coluna da Imagem animando da ESQUERDA */}
      <AnimateOnScroll
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
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

      {/* Coluna de Texto */}
      <div className="md:w-1/2">
        {/* 3. Título animando da DIREITA */}
        <AnimateOnScroll variants={variantsFromRight}>
          <h2 className="text-4xl font-bold text-foreground">{data.title}</h2>
        </AnimateOnScroll>

        {/* 4. Lista de razões com animação em CASCATA (STAGGER) */}
        <div className="mt-8 space-y-6">
          {data.reasons.map((reason, index) => (
            // Cada item da lista tem sua própria animação com um delay progressivo
            <AnimateOnScroll
              key={index}
              delay={0.2 + index * 0.15}
            >
              <div className="flex items-start">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 shrink-0">
                  <Image
                    alt={reason.title}
                    src={reason.icon}
                    width={32} // Ícones menores ficam melhores aqui
                    height={32}
                    quality={100}
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
    </section>
  );
};

export default WhyChooseUs;
// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
// 1. Importamos nosso componente de animação
import { AnimateOnScroll } from './AnimateOnScroll';

interface HeroProps {
  data: {
    tagline: string;
    title: string;
    description: string;
    orderButton: string;
  };
}

// 2. Definimos variantes de animação personalizadas para esta seção
const variantsFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const variantsFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    // Adicionamos overflow-x-hidden para garantir que as animações não criem uma barra de rolagem horizontal
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center overflow-x-hidden">

      {/* 3. Envolvemos a coluna de texto com AnimateOnScroll */}
      <AnimateOnScroll
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-xl font-semibold bg-primary/10 text-primary inline-block px-3 py-1 rounded-full">
          {data.tagline}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 text-foreground">
          {data.title}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-md mx-auto md:mx-0 mb-8">
          {data.description}
        </p>
        {/* Substituído para um botão padrão, conforme a premissa inicial do projeto */}
        <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg">
          {data.orderButton}
        </button>
      </AnimateOnScroll>

      {/* 4. Envolvemos a coluna da imagem com AnimateOnScroll, com um pequeno delay */}
      <AnimateOnScroll
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative w-full max-w-xl aspect-square">
          <Image
            alt="Mulher feliz segurando uma fatia de pizza"
            src={'/img/hero.png'}
            fill
            className="object-contain"
            priority // Adicionamos 'priority' para que a imagem principal da página carregue mais rápido
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export { Hero };
// components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Button } from '../ui/button';

interface HeroProps {
  data: {
    tagline: string;
    title: string;
    description: string;
    orderButton: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="py-16 md:py-24 overflow-x-hidden">

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Coluna de Texto */}
        <AnimateOnScroll
          className="w-full lg:w-5/12 text-center lg:text-left"
        >
          <h2 className="text-lg md:text-xl font-semibold bg-primary/10 text-primary inline-block px-3 py-1 rounded-full">
            {data.tagline}
          </h2>

          {/* 4. Tipografia mais fluida. Adicionamos mais um breakpoint (`sm`) para um crescimento
              mais suave do tamanho da fonte entre o mobile e o desktop. */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-foreground">
            {data.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 mb-8">
            {data.description}
          </p>

          <Button size="lg"> {/* Botão um pouco maior para mais destaque */}
            {data.orderButton}
          </Button>
        </AnimateOnScroll>

        {/* Coluna da Imagem */}
        <AnimateOnScroll
          className="w-full lg:w-6/12 flex justify-center"
        >
          {/* O container da imagem não precisa de muitas alterações, a estrutura com `aspect-square` é excelente. */}
          <div className="relative w-full max-w-2xl aspect-square">
            <Image
              alt="Mulher feliz segurando uma fatia de pizza"
              src={'/img/hero.png'}
              fill
              className="object-contain"
              priority
            />
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export { Hero };
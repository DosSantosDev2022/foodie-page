// components/hero.tsx
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { AnimateOnScroll } from './AnimateOnScroll';

/**
 * @interface HeroProps
 * @property {object} data - Dados para o componente Hero.
 * @property {string} data.tagline - Tagline ou subtítulo.
 * @property {string} data.title - Título principal.
 * @property {string} data.description - Descrição.
 * @property {string} data.orderButton - Texto do botão de pedido.
 */
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
    < section className="py-16 md:py-24 overflow-x-hidden px-4" >
      < div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16" >

        {/* Coluna de Texto: Centralizado em mobile e à esquerda em lg */}
        <AnimateOnScroll
          className="w-full lg:w-5/12 text-center lg:text-left"
        >
          <h2 className="text-base md:text-xl font-semibold bg-primary/10 text-primary inline-block px-3 py-1 rounded-full">
            {data.tagline}
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 text-foreground">
            {data.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 mb-8">
            {data.description}
          </p>

          <Button size="lg">
            {data.orderButton}
          </Button>
        </AnimateOnScroll >

        < AnimateOnScroll
          className="w-full lg:w-6/12 flex justify-center"
        >
          {/* max-w-md para telas pequenas, aumentando até 2xl em telas maiores */}
          <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl aspect-square" >
            <Image
              alt="Mulher feliz segurando uma fatia de pizza"
              src={'/img/hero.png'}
              fill
              className="object-contain"
              priority
            />
          </div >
        </AnimateOnScroll >

      </div >
    </section >
  );
};

export { Hero };

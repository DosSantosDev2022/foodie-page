// components/BestSellers.tsx
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { AnimateOnScroll } from './AnimateOnScroll';

interface BestSellersProps {
  data: {
    title: string;
    description: string;
    dishes: {
      name: string;
      price: string;
      img: string
    }[];
  };
}

const BestSellers: React.FC<BestSellersProps> = ({ data }) => {
  return (
    <section className="bg-linear-to-b from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-foreground">{data.title} 🔥🔥</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {data.description}
        </p>

        {/* Grid de Pratos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.dishes.map((dish, index) => (
            <AnimateOnScroll delay={0.2 + index * 0.15} key={index} className="bg-background p-6 rounded-lg shadow-md text-left">
              {/* Placeholder da Imagem do Prato */}
              <div className="w-full h-48 relative rounded-md mb-4 flex items-center justify-center">
                <Image
                  alt={dish.name}
                  src={dish.img}
                  fill
                  className='object-cover'
                  quality={100}
                />
              </div>
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              {/* Simulação das estrelas de avaliação */}
              <div className="flex items-center my-2">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-foreground">R$: {dish.price}</span>
                <Button>
                  Peça agora
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BestSellers };
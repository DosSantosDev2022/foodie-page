// components/best-sellers.tsx
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { AnimateOnScroll } from './AnimateOnScroll'; // Padrão kebab-case

/**
 * @interface Dish
 * @property {string} name - Nome do prato.
 * @property {string} price - Preço do prato.
 * @property {string} img - URL da imagem.
 */
interface Dish {
  name: string;
  price: string;
  img: string
}

/**
 * @interface BestSellersProps
 * @property {object} data - Dados para o componente.
 * @property {string} data.title - Título da seção.
 * @property {string} data.description - Descrição da seção.
 * @property {Dish[]} data.dishes - Array de pratos.
 */
interface BestSellersProps {
  data: {
    title: string;
    description: string;
    dishes: Dish[];
  };
}

const BestSellers: React.FC<BestSellersProps> = ({ data }) => {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Tipografia Fluida */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{data.title} 🔥🔥</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {data.description}
        </p>

        {/* O grid foi ajustado: 1 coluna em mobile, 2 em md (tablet/notebooks) e 3 em lg (desktops) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.dishes.map((dish, index) => (
            <AnimateOnScroll
              delay={0.2 + index * 0.15}
              key={index}
              className="bg-background p-6 rounded-xl shadow-lg text-left flex flex-col transition-all hover:shadow-xl"
            >
              <div className="relative w-full overflow-hidden rounded-md aspect-video mb-4">
                <Image
                  alt={dish.name}
                  src={dish.img}
                  fill
                  className='object-cover'
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <div className="flex items-center my-2">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4">
                  <span className="text-2xl font-bold text-foreground">R$ {dish.price}</span>
                  <Button>
                    Peça agora
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BestSellers };

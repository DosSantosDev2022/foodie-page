// components/global/testimonials.tsx
"use client";

import { Review, useTestimonialSlider } from '@/hooks/use-testimonial-slider';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { AnimateOnScroll } from './AnimateOnScroll';

/**
 * @interface TestimonialsProps
 * @property {object} data - Dados para o componente.
 * @property {string} data.title - Título da seção (não usado diretamente, mas mantido).
 * @property {Review[]} data.reviews - Array de depoimentos.
 */
interface TestimonialsProps {
  data: {
    title: string;
    reviews: Review[];
  };
}

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  // Usa o hook customizado para gerenciar a lógica
  const { currentSlide, setCurrentSlide, activeTestimonial } = useTestimonialSlider(data.reviews, 5000);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Coluna de Texto/Slider */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Tipografia Fluida */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Feedback do <span className="text-primary">Cliente</span>
            </h2>

            <AnimatePresence mode="wait">
              {activeTestimonial && (
                <motion.div
                  key={activeTestimonial.id}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="mt-8"
                >
                  {/* Altura mínima fixa para evitar "pulo" no layout durante a transição */}
                  <blockquote className="text-muted-foreground text-lg min-h-[150px] md:min-h-[120px] lg:min-h-[100px]">
                    "{activeTestimonial.review}"
                  </blockquote>

                  <div className="mt-4 flex items-center justify-center lg:justify-start">
                    <div className="relative w-16 h-16 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                      <Image src={activeTestimonial.customerImage} alt={activeTestimonial.customerName} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">{activeTestimonial.customerName}</p>
                      <p className="text-sm text-muted-foreground">{activeTestimonial.customerTitle}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controles do Slider */}
            <div className="flex space-x-2 mt-8 justify-center lg:justify-start">
              {data.reviews.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 p-0 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${currentSlide === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Coluna da Imagem (Chefe) */}
          <AnimateOnScroll className="w-full lg:w-1/2 flex justify-center">
            {/* max-w para limitar o tamanho em mobile/tablet */}
            <div className="relative w-full max-w-sm md:max-w-md aspect-square">
              <Image alt='Imagem do chefe da cozinha' src={'/img/cheff.png'} fill className='object-contain' />
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// components/Testimonials.tsx
"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
// 1. Importamos os componentes da framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { AnimateOnScroll } from './AnimateOnScroll';

// Interface ajustada para incluir o ID
interface Review {
  id: string;
  review: string;
  customerName: string;
  customerTitle: string;
  customerImage: string;
}

interface TestimonialsProps {
  data: {
    title: string;
    reviews: Review[];
  };
}

// 2. variantes da  animação
const variants = {
  // Estado inicial: invisível e levemente à direita
  initial: { opacity: 0, x: 50 },
  // Estado animado: totalmente visível e na posição original
  animate: { opacity: 1, x: 0 },
  // Estado de saída: invisível e levemente à esquerda
  exit: { opacity: 0, x: -50 },
};

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [data.reviews.length]);

  const activeTestimonial = data.reviews[currentSlide];

  return (
    <section className=" py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-foreground">
            Feedback do <span className="text-primary">Cliente</span>
          </h2>

          {/* 3. Usamos AnimatePresence para gerenciar a animação de saída */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <blockquote className="text-muted-foreground text-lg min-h-[150px]">
                "{activeTestimonial.review}"
              </blockquote>

              <div className="mt-4 flex items-center justify-center md:justify-start">
                <div className="relative w-16 h-16 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                  <Image src={activeTestimonial.customerImage} alt={activeTestimonial.customerName} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">{activeTestimonial.customerName}</p>
                  <p className="text-sm text-muted-foreground">{activeTestimonial.customerTitle}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex space-x-2 mt-8 justify-center md:justify-start">
            {data.reviews.map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <AnimateOnScroll className="w-full h-96 relative rounded-lg">
            <Image alt='Imagem do chefe da cozinha' src={'/img/cheff.png'} fill className='object-contain' />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
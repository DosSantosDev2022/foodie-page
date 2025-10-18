import { useCallback, useEffect, useState } from 'react';

/**
 * @interface Review
 * @property {string} id - ID único do depoimento.
 * @property {string} review - Conteúdo do depoimento.
 * @property {string} customerName - Nome do cliente.
 * @property {string} customerTitle - Cargo ou descrição do cliente.
 * @property {string} customerImage - URL da imagem do cliente.
 */
export interface Review {
  id: string;
  review: string;
  customerName: string;
  customerTitle: string;
  customerImage: string;
}

/**
 * @function useTestimonialSlider
 * @description Hook customizado para gerenciar a lógica de navegação automática e manual de depoimentos.
 * * @param {Review[]} reviews - Array de depoimentos.
 * @param {number} interval - Intervalo de tempo (em milissegundos) para a troca automática de slide.
 * @returns {{ currentSlide: number, setCurrentSlide: (index: number) => void, activeTestimonial: Review }}
 *   - `currentSlide`: Índice do slide ativo.
 *   - `setCurrentSlide`: Função para mudar o slide manualmente.
 *   - `activeTestimonial`: O objeto Review ativo.
 */
export function useTestimonialSlider(reviews: Review[], interval: number = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setActiveSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviews.length);
    }, interval);

    return () => clearInterval(timer);
  }, [reviews.length, interval]);

  const activeTestimonial = reviews[currentSlide];

  return { currentSlide, setCurrentSlide: setActiveSlide, activeTestimonial };
}
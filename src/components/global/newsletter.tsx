// components/global/newsletter.tsx
import React from 'react';
import { Button } from '../ui/button';

/**
 * @interface NewsletterProps
 * @property {object} data - Dados para o componente.
 * @property {string} data.title - Título da newsletter.
 * @property {string} data.placeholder - Placeholder do input.
 * @property {string} data.button - Texto do botão.
 */
interface NewsletterProps {
  data: {
    title: string;
    placeholder: string;
    button: string;
  };
}

const Newsletter: React.FC<NewsletterProps> = ({ data }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Aumentamos o padding interno em telas maiores */}
        <div className="bg-primary/10 p-8 md:p-12 lg:p-16 rounded-xl text-center">
          {/* Tipografia Fluida */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{data.title}</h2>

          {/* Em telas pequenas (mobile), os itens ficam em coluna (flex-col). A partir de 'sm', ficam em linha. */}
          <div className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder={data.placeholder}
              className="w-full flex-1 bg-background px-4 py-3 text-foreground border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={data.placeholder}
            />
            {/* O botão ocupa 100% da largura em mobile, mas se ajusta em telas maiores. */}
            <Button size="lg" className="w-full sm:w-auto shrink-0">
              {data.button}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
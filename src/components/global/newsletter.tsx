// components/Newsletter.tsx
import React from 'react';
import { Button } from '../ui/button';

interface NewsletterProps {
  data: {
    title: string;
    placeholder: string;
    button: string;
  };
}

const Newsletter: React.FC<NewsletterProps> = ({ data }) => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-primary/10 p-10 rounded-lg text-center">
        <h2 className="text-3xl font-bold text-foreground">{data.title}</h2>
        <div className="mt-6 max-w-md mx-auto flex items-center border border-border rounded-full p-1 bg-background">
          <input
            type="email"
            placeholder={data.placeholder}
            className="w-full bg-transparent px-4 py-2 text-foreground focus:outline-none"
          />
          <Button>
            {data.button}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FooterProps {
  data: {
    logo: string;
    description: string;
    links: {
      Sobre: string[];
      Empresa: string[];
      Suporte: string[];
    };
  };
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  // Converte as chaves do objeto de links em um array para podermos mapeá-lo
  const linkCategories = Object.keys(data.links) as (keyof typeof data.links)[];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Coluna do Logo */}
        <div className="md:col-span-2">
          <Image
            alt='Logo da Foodie'
            src={'/img/logo.png'}
            width={150}
            height={150}
            quality={100}
          />
          <p className="mt-4 text-muted-foreground max-w-xs">{data.description}</p>
        </div>

        {/* Colunas de Links */}
        {linkCategories.map((category) => (
          <div key={category}>
            <h3 className="font-bold text-foreground mb-4">{category}</h3>
            <ul className="space-y-2">
              {data.links[category].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='border-t border-border flex items-center justify-center mt-2 p-3'>
        <span className='text-muted-foreground text-sm'>
          Desenvolvido por
          <Link className='text-primary' target='_blank' href="https://dossantosdev.com.br/"> DosSantosDev</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
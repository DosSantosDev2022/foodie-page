// components/Header.tsx
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

// Definimos o tipo de dados que este componente espera receber (props)
interface HeaderProps {
  data: {
    logo: string;
    navLinks: string[];
    loginButton: string;
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <Image
        alt='Logo da Foodie'
        src={'/img/logo.png'}
        width={150}
        height={150}
        quality={100}
      />

      {/* Navegação */}
      <nav className="hidden md:flex space-x-8">
        {data.navLinks.map((link) => (
          <Link href="#" key={link} className="text-foreground hover:text-primary transition-colors">
            {link}
          </Link>
        ))}
      </nav>

      {/* Botão de Login */}
      <Button>
        {data.loginButton}
      </Button>
    </header>
  );
};

export { Header };
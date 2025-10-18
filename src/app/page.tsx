// app/page.tsx
import { BestSellers, Hero } from '@/components';
import Features from '@/components/global/features';
import Newsletter from '@/components/global/newsletter';
import Testimonials from '@/components/global/testimonials';
import WhyChooseUs from '@/components/global/whyChooseUs';
// Importa os dados do nosso arquivo JSON
import data from '@/config/data.json';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <Hero data={data.hero} />
      <Features data={data.features} />
      <WhyChooseUs data={data.whyChooseUs} />
      <BestSellers data={data.bestSellers} />
      <Testimonials data={data.testimonials} />
      <Newsletter data={data.newsletter} />
    </main>
  );
}
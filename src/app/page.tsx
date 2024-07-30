'use client';

import Hero from '@/components/hero';
import About from '@/components/about';
import CurveLoader from '@/components/ui/curve-loader';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <section className='relative bg-zinc-900'>
      <header className="dark" id='hero'>
        <CurveLoader>
          <Hero />
        </CurveLoader>
      </header>

      <main className='px-0'>
        <div id='about'><About /></div>
      </main>

      <Footer />
    </section>
  );
}

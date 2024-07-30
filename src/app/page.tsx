'use client';

import Hero from '@/components/hero';
import About from '@/components/about';
import CurveLoader from '@/components/ui/curve-loader';

export default function Home() {

  return (
    <section className='relative bg-zinc-900'>
      <header className="dark" id='hero'>
        <CurveLoader children={<Hero />} />
      </header>

      <main className='px-0'>
        <div id='about'><About /></div>
      </main>

      <footer className='px-4 text-white'>
        Footer
      </footer>
    </section>
  );
}

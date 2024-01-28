import React from 'react';
import MaskText from './MaskText';
import Divider from '@/utils/Divider';

function Index() {

  return (

      <section className='relative my-20'>
          <div className='w-1/2 h-[200px] text-white p-6'>
            <h2 className='font-thin text-6xl lg:text-8xl'>About Me</h2>
          </div>
        <div className='border-4 border-red-600'>
          <MaskText />
        </div>
      </section>
  )
}

export default Index
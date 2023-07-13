import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 gap-x-44 pt-28 md:pt-56 lg:grid-cols-2'>
      <div className=''>
        <div className='text-3xl md:text-6xl'>
          Hi, I am <br />
          <span className='custom-shadow font-bold leading-normal'>
            Anish Tiwari
          </span>
          <br />
          <div className='py-2 text-xs md:text-xl'>
            I am a front-end developer based out of New Delhi, India.
          </div>
        </div>
        <div>
          <Link href='mailto:anish.at.tiwari@gmail.com?subject=Hey%20There! 👋'>
            <button className='connect-btn my-4 text-black transition-all duration-300 hover:text-white hover:before:bg-black hover:after:border-black hover:after:bg-white'>
              <span className='btn-font'>Say Hello!</span>
            </button>
          </Link>
        </div>
      </div>

      <div>09</div>
    </div>
  );
};

export default HeroSection;

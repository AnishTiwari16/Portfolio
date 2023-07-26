import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';
const ProjectSection = () => {
  return (
    <ScrollAnimation>
      <motion.div variants={bounceVariant}>
        <div className='grid grid-cols-4 md:grid-cols-12'>
          <div className='col-span-4 md:col-span-5'>
            <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
              Work
            </div>
            <p>
              Here is a showcase of some of the best projects that I made. You
              can find the source code on my GitHub :)
            </p>
            <Link legacyBehavior href='https://github.com/AnishTiwari16'>
              <a target='_blank' rel='noopener noreferrer'>
                <button className='connect-btn my-4 text-black transition-all duration-300 hover:text-white hover:before:bg-black hover:after:border-black hover:after:bg-white'>
                  <span className='btn-font'>Github</span>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default ProjectSection;

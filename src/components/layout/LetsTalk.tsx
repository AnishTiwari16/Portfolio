import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';
import socialIconMotion from '@/animations/socialIconMotion';
import { SOCIAL_DATA } from '@/config/socials';

import Github from '../../../public/images/github.svg';
import Linkedin from '../../../public/images/linkedin.svg';
import Mail from '../../../public/images/mail.svg';
import Star from '../../../public/images/star.svg';
import Twitter from '../../../public/images/twitter.svg';
const LetsTalk = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set initial width on component mount
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const leftHandVariant = {
    offscreen: {
      x: windowWidth <= 640 ? -20 : -120,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 2,
      transition: {
        type: 'easeInOut',
        duration: 0.8,
      },
    },
  };
  const rightHandVariant = {
    offscreen: {
      x: windowWidth <= 640 ? 20 : 120,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 2,
      transition: {
        type: 'easeInOut',
        duration: 0.8,
      },
    },
  };
  const starAnimationVariant = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.6,
      },
    },
  };
  return (
    <div
      className='relative pb-10 pt-44 text-center md:pb-20 md:pt-60'
      id='contact'
    >
      <ScrollAnimation>
        <motion.div
          variants={starAnimationVariant}
          className='absolute left-[40px] right-0 top-[190px]'
        >
          <Star className='mx-auto h-[24px] w-[24px]' />
        </motion.div>
        <motion.div
          variants={starAnimationVariant}
          className='absolute left-0 right-[44px] top-[150px]'
        >
          <Star className='mx-auto h-[24px] w-[24px] ' />
        </motion.div>
        <motion.div
          className='absolute left-[4px] right-0'
          variants={starAnimationVariant}
        >
          <Star className='mx-auto h-[24px] w-[24px]' />
        </motion.div>
        <div className='relative flex w-auto items-center justify-center'>
          <motion.div variants={leftHandVariant}>
            <Image
              src='/images/left-hand.png'
              alt='left-hand'
              loading='eager'
              height={200}
              width={200}
            />
          </motion.div>
          <motion.div variants={rightHandVariant}>
            <Image
              src='/images/right-hand.png'
              alt='right-hand'
              loading='eager'
              height={170}
              width={170}
            />
          </motion.div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <motion.div variants={bounceVariant}>
          <div className='flex flex-col'>
            <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
              let's talk
            </div>
            <div className='text-md md:text-xl'>
              I'm available for development-related work and full time job
              opportunities. Feel free to reach out to me via email or socials
              below.
            </div>

            <motion.div
              initial='rest'
              whileHover='hover'
              animate='rest'
              className='flex items-center justify-center py-5'
            >
              {SOCIAL_DATA.map((elem, index) => {
                return (
                  <Link legacyBehavior href={elem.link} key={index}>
                    <a target='_blank' rel='noopener noreferrer'>
                      <motion.div
                        variants={socialIconMotion}
                        className='mr-8 pt-5'
                      >
                        {elem.name === 'linkedin' ? (
                          <Linkedin className='h-[22.24px] w-[22.24px] sm:h-[26.85px] sm:w-[26.85px] xl:h-[31px] xl:w-[31px]' />
                        ) : elem.name === 'github' ? (
                          <Github className='h-[22.24px] w-[22.24px] sm:h-[26.85px] sm:w-[26.85px] xl:h-[31px] xl:w-[31px]' />
                        ) : elem.name === 'twitter' ? (
                          <Twitter className='h-[22.24px] w-[22.24px] sm:h-[26.85px] sm:w-[26.85px] xl:h-[31px] xl:w-[31px]' />
                        ) : (
                          <Mail className='h-[22.24px] w-[22.24px] sm:h-[26.85px] sm:w-[26.85px] xl:h-[31px] xl:w-[31px]' />
                        )}
                      </motion.div>
                    </a>
                  </Link>
                );
              })}
            </motion.div>
            <div className='mx-auto rounded border px-5 py-2'>
              <Link legacyBehavior href='mailto:anish.at.tiwari@gmail.com'>
                <a target='_blank' rel='noopener noreferrer'>
                  anish.at.tiwari@gmail.com
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>
      <div className='mt-20 flex flex-row'>
        <div className='bg-experience-hr-line mr-2 h-[1px] flex-1'></div>
        <svg
          className='h-[13px] w-[13px]'
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 .002 9.454 9.456 0 12.002l9.454 2.545L12 24.002l2.546-9.454L24 12.002l-9.454-2.546L12 .002Z'
            fill='#fff'
          ></path>
        </svg>
        <div className='bg-experience-hr-line ml-2 h-[1px] flex-1'></div>
      </div>
      <div className='text-md pt-10'>
        made with ❤️ by <span className='name-hover'>Anish Tiwari</span>
      </div>
    </div>
  );
};

export default LetsTalk;

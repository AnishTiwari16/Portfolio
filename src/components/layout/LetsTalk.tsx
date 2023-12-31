import copy from 'copy-to-clipboard';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useWindowSize } from 'react-use';

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
  const toastStyles = {
    style: {
      boxShadow: '0px 4px 4px 0px #00000040',
      background: '#131313',
      color: '#fff',
    },
    iconTheme: {
      primary: '#09f755',
      secondary: '#FFFAEE',
    },
    duration: 5000,
  };
  const handleCopyText = (email: string) => {
    copy(email);
    toast.success('Copied to clipboard', toastStyles);
  };
  const { width } = useWindowSize();
  const leftHandVariant = {
    offscreen: {
      x: width <= 640 ? -20 : -120,
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
      x: width <= 640 ? 20 : 120,
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
    <>
      <Toaster position='top-center' reverseOrder={false} />
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
                animate='rest'
                className='flex items-center justify-center py-5'
              >
                {SOCIAL_DATA.map((elem, index) => {
                  return (
                    <Link legacyBehavior href={elem.link} key={index}>
                      <a target='_blank' rel='noopener noreferrer'>
                        <motion.div
                          variants={socialIconMotion}
                          className='px-3 pt-5'
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
              <div
                className='mx-auto flex w-9/12 cursor-pointer items-center justify-center rounded border py-2 md:w-6/12 lg:w-3/12'
                onClick={() => handleCopyText('anish.at.tiwari@gmail.com')}
              >
                anish.at.tiwari@gmail.com
                <svg
                  width='5%'
                  height='5%'
                  viewBox='0 0 10 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='ml-3'
                >
                  <mask id='path-1-inside-1_2363_17443' fill='white'>
                    <path d='M1.66667 1.66667C1.66667 1.22464 1.84226 0.800716 2.15482 0.488155C2.46738 0.175595 2.89131 0 3.33333 0H8.33333C8.77536 0 9.19928 0.175595 9.51184 0.488155C9.8244 0.800716 10 1.22464 10 1.66667V10C10 10.442 9.8244 10.866 9.51184 11.1785C9.19928 11.4911 8.77536 11.6667 8.33333 11.6667H3.33333C2.89131 11.6667 2.46738 11.4911 2.15482 11.1785C1.84226 10.866 1.66667 10.442 1.66667 10V1.66667ZM0 3.33333C7.43203e-06 3.04078 0.0770215 2.75338 0.223302 2.50002C0.369582 2.24667 0.579974 2.03628 0.833333 1.89V10.4167C0.833333 10.9692 1.05283 11.4991 1.44353 11.8898C1.83423 12.2805 2.36413 12.5 2.91667 12.5H8.11C7.96372 12.7534 7.75333 12.9638 7.49998 13.11C7.24662 13.2563 6.95922 13.3333 6.66667 13.3333H2.91667C2.14312 13.3333 1.40125 13.026 0.854272 12.4791C0.307291 11.9321 0 11.1902 0 10.4167V3.33333Z' />
                  </mask>

                  <path
                    d='M3.33333 0L3.33333 -1L3.33333 0ZM8.33333 0V-1V0ZM1.66667 10L0.666667 10L1.66667 10ZM0 3.33333L-1 3.33331V3.33333H0ZM0.833333 1.89H1.83333V0.157949L0.333333 1.02397L0.833333 1.89ZM0.833333 10.4167L-0.166667 10.4167L0.833333 10.4167ZM8.11 12.5L8.97603 13L9.84205 11.5H8.11V12.5ZM6.66667 13.3333L6.66667 14.3333L6.66669 14.3333L6.66667 13.3333ZM2.66667 1.66667C2.66667 1.48986 2.7369 1.32029 2.86193 1.19526L1.44772 -0.218951C0.947618 0.281146 0.666667 0.959423 0.666667 1.66667H2.66667ZM2.86193 1.19526C2.98695 1.07024 3.15652 1 3.33333 1L3.33333 -1C2.62609 -1 1.94781 -0.719049 1.44772 -0.218951L2.86193 1.19526ZM3.33333 1H8.33333V-1H3.33333V1ZM8.33333 1C8.51014 1 8.67971 1.07024 8.80474 1.19526L10.219 -0.218951C9.71885 -0.719048 9.04058 -1 8.33333 -1V1ZM8.80474 1.19526C8.92976 1.32029 9 1.48986 9 1.66667H11C11 0.959422 10.719 0.281145 10.219 -0.218951L8.80474 1.19526ZM9 1.66667V10H11V1.66667H9ZM9 10C9 10.1768 8.92976 10.3464 8.80474 10.4714L10.219 11.8856C10.719 11.3855 11 10.7072 11 10H9ZM8.80474 10.4714C8.67971 10.5964 8.51014 10.6667 8.33333 10.6667V12.6667C9.04058 12.6667 9.71885 12.3857 10.219 11.8856L8.80474 10.4714ZM8.33333 10.6667H3.33333V12.6667H8.33333V10.6667ZM3.33333 10.6667C3.15652 10.6667 2.98695 10.5964 2.86193 10.4714L1.44772 11.8856C1.94781 12.3857 2.62609 12.6667 3.33333 12.6667V10.6667ZM2.86193 10.4714C2.7369 10.3464 2.66667 10.1768 2.66667 10L0.666667 10C0.666667 10.7072 0.947618 11.3855 1.44772 11.8856L2.86193 10.4714ZM2.66667 10V1.66667H0.666667V10H2.66667ZM1 3.33336C1 3.21634 1.03081 3.10138 1.08932 3.00003L-0.642717 2.00001C-0.876766 2.40538 -0.999988 2.86522 -1 3.33331L1 3.33336ZM1.08932 3.00003C1.14783 2.89869 1.23199 2.81454 1.33333 2.75603L0.333333 1.02397C-0.072041 1.25802 -0.408669 1.59464 -0.642717 2.00001L1.08932 3.00003ZM-0.166667 1.89V10.4167H1.83333V1.89H-0.166667ZM-0.166667 10.4167C-0.166667 11.2344 0.158184 12.0187 0.736421 12.5969L2.15063 11.1827C1.94747 10.9795 1.83333 10.704 1.83333 10.4167L-0.166667 10.4167ZM0.736421 12.5969C1.31466 13.1752 2.09892 13.5 2.91667 13.5V11.5C2.62935 11.5 2.3538 11.3859 2.15063 11.1827L0.736421 12.5969ZM2.91667 13.5H8.11V11.5H2.91667V13.5ZM7.24397 12C7.18546 12.1013 7.10131 12.1855 6.99996 12.244L7.99999 13.9761C8.40536 13.742 8.74198 13.4054 8.97603 13L7.24397 12ZM6.99996 12.244C6.89862 12.3025 6.78366 12.3333 6.66664 12.3333L6.66669 14.3333C7.13478 14.3333 7.59461 14.2101 7.99999 13.9761L6.99996 12.244ZM6.66667 12.3333H2.91667V14.3333H6.66667V12.3333ZM2.91667 12.3333C2.40833 12.3333 1.92082 12.1314 1.56138 11.772L0.147165 13.1862C0.881683 13.9207 1.8779 14.3333 2.91667 14.3333V12.3333ZM1.56138 11.772C1.20193 11.4125 1 10.925 1 10.4167H-1C-1 11.4554 -0.587352 12.4517 0.147165 13.1862L1.56138 11.772ZM1 10.4167V3.33333H-1V10.4167H1Z'
                    fill='white'
                    mask='url(#path-1-inside-1_2363_17443)'
                  />
                </svg>
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
    </>
  );
};

export default LetsTalk;

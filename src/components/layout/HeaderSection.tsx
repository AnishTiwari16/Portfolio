import { motion, SVGMotionProps } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { HEADER } from '@/config/header';
const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill='hsl(0, 0%, 100%)'
    strokeWidth='2.5'
    stroke='hsl(0, 0%, 100%)'
    strokeLinecap='round'
    {...props}
  />
);
interface NavItem {
  navName: string;
  navigateTo: string;
}

const HeaderSection = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <div className='fixed top-0 z-10 w-[100%]'>
      <div className='container mx-auto grid grid-cols-4 gap-x-5 md:grid-cols-12'>
        <motion.nav
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            // delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-nav-bg col-span-4 col-start-1 mt-6 w-auto rounded-lg px-3 py-4 sm:mt-[32px] sm:rounded-xl sm:py-[30px] sm:pl-6 sm:pr-[30px] md:col-span-12 md:mt-[28px] lg:col-span-8 lg:col-start-3 lg:mt-[30px] xl:mt-[16px] xl:pr-6'
          id='main-nav'
        >
          <div className='bg-nav-bg flex flex-row flex-wrap items-center justify-between rounded-2xl bg-[#25252580] p-7 backdrop-blur-[80px]'>
            <button>
              <ScrollLink
                to='desc'
                spy={true}
                onClick={() => setisNavOpen(false)}
                activeClass='active'
                smooth={true}
                duration={500}
              >
                <div className='text-base font-extrabold md:text-xl md:font-black'>{`<Anish />`}</div>
              </ScrollLink>
            </button>
            <motion.button
              id='toggler'
              ref={btnRef}
              className='block h-[15px] w-[20px] xl:hidden '
              initial={false}
              animate={isNavOpen ? 'open' : 'closed'}
              onClick={() => setisNavOpen(!isNavOpen)}
            >
              <svg width='100%' height='100%' viewBox='0 0 24 19'>
                <Path
                  variants={{
                    closed: {
                      d: 'M 2 2.5 L 20 2.5',
                    },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                  }}
                />
                <Path
                  d='M 2 9.423 L 20 9.423'
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.1 }}
                />
                <Path
                  variants={{
                    closed: {
                      d: 'M 2 16.346 L 20 16.346',
                    },
                    open: {
                      d: 'M 3 2.5 L 17 16.346',
                    },
                  }}
                />
              </svg>
            </motion.button>
            <motion.div
              initial={false}
              variants={{
                open: {
                  transition: {
                    type: 'easeout',
                    bounce: 0,
                    duration: 0.4,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  transition: {
                    type: 'easein',
                    bounce: 0,
                    duration: 0.2,
                  },
                },
              }}
              className={`navItems flex w-full flex-col items-center justify-between overflow-hidden xl:w-[523px] xl:flex-row ${
                isNavOpen
                  ? 'mt-4 max-h-[350px] xl:mt-0'
                  : 'mt-0 max-h-0 xl:max-h-[100px]'
              } `}
            >
              {HEADER.map((elem: NavItem, index: number) => {
                return (
                  <motion.button key={index}>
                    <ScrollLink
                      to={elem.navigateTo}
                      spy={true}
                      onClick={() => setisNavOpen(false)}
                      activeClass='active'
                      smooth={true}
                      duration={500}
                    >
                      <div className='px-[40px] py-3  sm:py-[20px] xl:px-0 xl:py-0'>
                        <div className='nav-hover font-semibold duration-300'>
                          {elem.navName}
                        </div>
                      </div>
                    </ScrollLink>
                  </motion.button>
                );
              })}
              <div className='nav-hover font-semibold duration-300'>
                <Link
                  legacyBehavior
                  href='https://drive.google.com/file/d/1sGBpIvDDCx4YJhOKjEaUA2FZ_gd8rheZ/view?usp=sharing'
                >
                  <a target='_blank' rel='noopener noreferrer'>
                    .resume()
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default HeaderSection;

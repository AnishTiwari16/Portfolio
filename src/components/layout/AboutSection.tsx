import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';
import socialIconMotion from '@/animations/socialIconMotion';
import { SOCIAL_DATA } from '@/config/socials';

import myImage from '../../../public/images/about-image.png';
import FirebaseLogo from '../../../public/images/firebase-logo.svg';
import Github from '../../../public/images/github.svg';
import Linkedin from '../../../public/images/linkedin.svg';
import Mail from '../../../public/images/mail.svg';
import NodeLogo from '../../../public/images/node-logo.svg';
import ReactLogo from '../../../public/images/react-logo.svg';
import TSLogo from '../../../public/images/ts-logo.svg';
import Twitter from '../../../public/images/twitter.svg';
import ValoLogo from '../../../public/images/valo-logo.svg';
const AboutSection = () => {
  return (
    <div className='grid grid-cols-1 gap-x-44 pt-16 md:pt-52 lg:grid-cols-2'>
      <div>
        <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
          About
        </div>
        <p className=''>
          I am a Senior at maharaja agrasen institute of technology pursuing
          B.Tech in Electronics and Communication. Focused, quick-learner and
          Passionate about coding and trying out new things.
        </p>
        <div className='flex'>
          <motion.div
            initial='rest'
            whileHover='hover'
            animate='rest'
            className='flex'
          >
            {SOCIAL_DATA.map((elem, index) => {
              return (
                <Link legacyBehavior href={elem.link} key={index}>
                  <a target='_blank' rel='noopener noreferrer'>
                    <motion.div
                      variants={socialIconMotion}
                      className='mr-8  pt-5'
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
        </div>
      </div>

      <ScrollAnimation>
        <motion.div
          variants={bounceVariant}
          className='about-image-container relative mt-8 flex h-[260px] w-auto before:h-[142px] before:w-[142px] sm:h-[396px] sm:w-[396px] sm:before:h-[258px] sm:before:w-[258px] md:mt-0'
        >
          <div className='absolute inset-0  z-[1] m-auto h-[152px] w-[152px] rounded-full border-[3px] border-[rgba(255,255,255,0.15)] sm:h-[274px] sm:w-[274px]'></div>
          <div className='absolute inset-0  z-[1] m-auto h-[190px] w-[190px] rounded-full border-[1px] border-[rgba(255,255,255,0.15)] sm:h-[345px] sm:w-[345px]'></div>
          <div className='animate-rot-js-xs sm:animate-rot-js bg-about-logo-gradient absolute left-[44%] z-[2] m-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border-[0.44px] border-[rgba(255,255,255,0.25)] backdrop-blur-lg sm:h-[46px] sm:w-[46px]'>
            <TSLogo className='drop-shadow-ts-logo-shadow h-[19.4px] w-[14.26px] filter sm:h-[17px] sm:w-[25.8px]' />
          </div>
          <div className='animate-rot-react-xs sm:animate-rot-react bg-about-logo-gradient absolute left-[11%] top-[45%] z-[2] m-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border-[0.44px] border-[rgba(255,255,255,0.25)] backdrop-blur-lg sm:h-[46px] sm:w-[46px]'>
            <ReactLogo className='drop-shadow-react-logo-shadow h-[13.3px] w-[14.93px] filter sm:h-[24.04px] sm:w-[27px]' />
          </div>
          <div className='animate-rot-valo-xs sm:animate-rot-valo bg-about-logo-gradient absolute inset-0  m-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border-[0.44px] border-[rgba(255,255,255,0.25)] backdrop-blur-lg sm:h-[46px] sm:w-[46px]'>
            <ValoLogo className='drop-shadow-valo-logo-shadow h-[12.27px] w-[14.93px] filter sm:h-[22.18px] sm:w-[27px]' />
          </div>
          <div className='animate-rot-firebase-xs sm:animate-rot-firebase bg-about-logo-gradient absolute inset-0 left-[50%] z-[2] m-auto flex h-[26px]  w-[26px] items-center justify-center rounded-full border-[0.44px] border-[rgba(255,255,255,0.25)] backdrop-blur-lg sm:h-[46px] sm:w-[46px] md:left-[65%]'>
            <FirebaseLogo className='drop-shadow-firebase-logo-shadow h-[15.94px] w-[11.61px] filter sm:h-[27.82px] sm:w-[21px]' />
          </div>
          <div className='animate-rot-node-xs sm:animate-rot-node bg-about-logo-gradient absolute left-[20%] top-[80%] z-[2] m-auto flex  h-[26px] w-[26px] items-center justify-center rounded-full border-[0.44px] border-[rgba(255,255,255,0.25)] backdrop-blur-lg sm:h-[46px] sm:w-[46px]'>
            <NodeLogo className='drop-shadow-node-logo-shadow h-[15.1px] w-[13.27px] filter sm:h-[27.31px] sm:w-[24px]' />
          </div>
          <div className='relative z-[1] m-auto h-[106px] w-[106px] sm:h-[192px] sm:w-[192px]'>
            <Image src={myImage} alt='me' loading='eager' placeholder='blur' />
          </div>

          {/* <AboutImage className="mx-auto my-auto z-[1]" /> */}
        </motion.div>
      </ScrollAnimation>
    </div>
  );
};

export default AboutSection;

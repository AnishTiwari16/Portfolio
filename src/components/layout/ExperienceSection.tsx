import { motion } from 'framer-motion';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';

const ExperienceSection = () => {
  return (
    <ScrollAnimation>
      <motion.div variants={bounceVariant}>
        <div className='py-16 md:py-44 lg:py-52' id='experience'>
          <h3 className='custom-shadow flex items-center justify-center text-5xl'>
            Experience
          </h3>
          <div className='relative'>
            <div className='bg-experience-hr-line experience-dot my-5 h-[1px] w-full'></div>
            <div className='absolute left-[15%] top-[-4px] h-[8px] w-[8px] rounded bg-[#fff]'></div>
            <div className='border-radius-white-line absolute right-0 top-[-4px] h-[8px] w-[8px] rounded'></div>
          </div>
          <div className='flex w-full flex-col justify-between gap-36 md:flex-row'>
            <div className='w-full md:w-[424px]'>
              <h3>Unibase Research</h3>
              <h6 className='py-1 text-[#636262]'>(Remote)</h6>
              <div className='flex'>
                <p className='mr-4'>
                  <span className='text-lg font-semibold'>Turf</span> -
                  Front-end Developer
                </p>
                <p className='flex items-center text-sm text-[#636262]'>{`// ${'Aug 2023 - Present'}`}</p>
              </div>
              <ul className='list-disc pl-4 pt-3'>
                <li>
                  Spearheaded the user interface development from
                  inception,creating a seamless and intuitive design and
                  maintaining constant collaboration with the backend team to
                  integrate APIs seamlessly.
                </li>
                <li className='pt-2'>
                  Designed and implemented an efficient
                  <span className='font-bold'> admin portal</span>, streamlining
                  internal processes for enhanced operational control
                </li>
                <li className='pt-2'>
                  Managed to achieve{' '}
                  <span className='font-bold'>60% retention</span> after
                  optimizing webapp loading time from 10s to 2s by fixing SEO
                  and other optimizations.
                </li>
                <li className='pt-2'>
                  Implemented{' '}
                  <span className='font-bold'>advanced architecture</span> for
                  efficient data flow and state management.
                </li>
                <li className='pt-2'>
                  Leveraged cutting-edge technologies, including{' '}
                  <span className='font-bold'>RTK-Query</span> for API fetching,
                  significantly improved overall application performance.
                </li>
                <li className='pt-2'>
                  Pioneered the adoption of innovative features, including a{' '}
                  <span className='font-bold'>
                    LinkedIn-inspired image cropping mechanism{' '}
                  </span>{' '}
                  additionally implemented storage optimization by storing image
                  blobs instead of entire files, resulting in an impressive 85%
                  reduction in cloud storage usage.
                </li>
              </ul>
            </div>
            <div className='w-full pt-14 md:w-[424px]'>
              <div className='flex'>
                <p className='mr-4'>
                  <span className='text-lg font-semibold'>Instaraise</span> -
                  Front-end Developer
                </p>
                <p className='flex items-center text-sm text-[#636262]'>{`// ${'Aug 2022 - Aug 2023'}`}</p>
              </div>
              <ul className='list-disc pl-4 pt-3'>
                <li className='pt-2'>
                  Collaborated closely with CEO/CTO/designers, actively
                  participating in{' '}
                  <span className='font-bold'>brainstorming sessions</span> to
                  translate business requirements into high-quality products
                  within tight timelines.
                </li>
                <li className='pt-2'>
                  Developed new UI from <span>scratch</span> in collaboration
                  with designers.
                </li>
                <li className='pt-2'>
                  Significantly enhanced performance by reducing{' '}
                  <span className='font-bold'>bundle size by 60%</span> through
                  optimization techniques, including{' '}
                  <span className='font-bold'>
                    lazy loading and code splitting.
                  </span>{' '}
                  Implemented innovative features and optimized existing
                  functionalities.
                </li>
                <li className='pt-2'>
                  <span className='font-bold'>Automated</span> the manual
                  processes for hosting Ido’s, integrated smart contracts for
                  secure transactions, and facilitated a smooth workflow.
                </li>
                <li className='pt-2'>
                  Utilized ReactJs, Redux, Bootstrap, SCSS and smart contract
                  integrations in the{' '}
                  <span className='font-bold'>Tech stack.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default ExperienceSection;

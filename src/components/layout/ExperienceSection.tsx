import { motion } from 'framer-motion';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';

const ExperienceSection = () => {
  return (
    <ScrollAnimation>
      <motion.div variants={bounceVariant}>
        <div className='py-16 md:py-52' id='experience'>
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
              <div className='flex'>
                <p className='mr-4'>Full-Stack Developer</p>
                <p className='text-sm text-[#636262]'>{`// ${'Aug 2023 - Present'}`}</p>
              </div>
              <ul className='list-disc pl-4 pt-3'>
                <li>
                  Worked closely with CEO/CTO/designers to understand
                  business/user requirements, being actively involved in
                  brainstorming sessions and converted them into actual product
                  with excellent quality in a very short time.
                </li>
                <li className='pt-2'>
                  Worked as a full stack developer with a focus on front end
                  technologies (React + TypeScript) and blockchain (Defi,
                  Polygon).
                </li>
              </ul>
            </div>
            <div className='w-full md:w-[424px]'>
              <h3>Unibase Research</h3>
              <div className='flex'>
                <p className='mr-4'>Full-Stack Developer Intern</p>
                <p className='text-sm text-[#636262]'>{`// ${'Aug 2022 - Aug 2023'}`}</p>
              </div>
              <ul className='list-disc pl-4 pt-3'>
                <li>
                  Automated the manual work involved in hosting Ido’s.
                  Integrated smart contracts for secure transactions and
                  Developed new user-friendly UI.
                </li>
                <li>
                  Developed new UI from scratch in collaboration with designers
                </li>
                <li className='pt-2'>
                  Independently handled multiple impactful projects,
                  consistently meeting deadlines and achieving successful
                  outcomes.
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

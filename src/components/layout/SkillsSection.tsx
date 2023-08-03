import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimations';

import bounceVariant from '@/animations/bounceVariant';
import { SKILLS } from '@/config/skills';

const SkillsSection = () => {
  const [selectTab, setSelectTab] = React.useState(0);
  const handleTabs = (name: string) => {
    if (name === 'Languages') {
      setSelectTab(0);
    }
    if (name === 'Framework') {
      setSelectTab(1);
    }
    if (name === 'Database') {
      setSelectTab(2);
    }
    if (name === 'Others') {
      setSelectTab(3);
    }
  };
  return (
    <ScrollAnimation>
      <motion.div variants={bounceVariant}>
        <div className='pt-16 md:pt-48' id='skills'>
          <div className='grid grid-cols-1 gap-x-44 lg:grid-cols-2'>
            <div>
              <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
                Skills
              </div>
              <p className='mb-1 text-xs md:text-base lg:text-xl'>
                An individual eager to learn and explore new fields of life and
                technology, with good problem solving skills and fast learning
                abilities. Particulary Interested in the field of web & mobile
                development and technologies like ReactJS, NextJS, React Native,
                NodeJS and MongoDB and not shy to learn new things such as
                Machine Learning and Blockchain development.
              </p>
            </div>

            <div
              className='h-full rounded-[20px]'
              style={{
                background: `linear-gradient(155.73deg, #000000 25.54%,${
                  selectTab === 0
                    ? '#68112b'
                    : selectTab === 1
                    ? '#0d0a99'
                    : selectTab === 2
                    ? '#0f3e23'
                    : '#54115b'
                } 75.89%)`,
              }}
            >
              <div className='mt-10 grid grid-cols-4 gap-x-8 rounded-xl bg-[#ffffff1a] p-4 lg:mt-0 lg:gap-x-16'>
                <div
                  className={`${
                    selectTab === 0 && 'tab-color'
                  } text-xs font-bold hover:cursor-pointer md:text-lg`}
                  onClick={() => handleTabs('Languages')}
                >
                  Languages
                </div>
                <div
                  className={`${
                    selectTab === 1 && 'tab-color'
                  } text-xs font-bold hover:cursor-pointer md:text-lg`}
                  onClick={() => handleTabs('Framework')}
                >
                  Framework
                </div>
                <div
                  className={`${
                    selectTab === 2 && 'tab-color'
                  } text-xs font-bold hover:cursor-pointer md:text-lg`}
                  onClick={() => handleTabs('Database')}
                >
                  Database
                </div>
                <div
                  className={`${
                    selectTab === 3 && 'tab-color'
                  } text-xs font-bold hover:cursor-pointer md:text-lg`}
                  onClick={() => handleTabs('Others')}
                >
                  Others
                </div>
              </div>
              <div className='my-8 grid grid-cols-3'>
                {SKILLS.map((elem, index) => {
                  return selectTab === 0 ? (
                    <React.Fragment key={index}>
                      {elem.skills_images?.map((item, index) => {
                        return (
                          <div key={index} className='mx-auto text-center'>
                            <Image
                              src={item}
                              width={50}
                              height={50}
                              alt='tech'
                            />
                          </div>
                        );
                      })}
                      {elem.skills?.map((item, index) => (
                        <div key={index} className='py-5 text-center'>
                          {item}
                        </div>
                      ))}
                    </React.Fragment>
                  ) : selectTab === 1 ? (
                    <React.Fragment key={index}>
                      {elem.frameworks_images?.map((item, index) => {
                        return (
                          <div key={index} className='mx-auto text-center'>
                            <Image
                              src={item}
                              width={50}
                              height={50}
                              alt='tech'
                            />
                          </div>
                        );
                      })}
                      {elem.frameworks?.map((item, index) => (
                        <div key={index} className='py-5 text-center'>
                          {item}
                        </div>
                      ))}
                    </React.Fragment>
                  ) : selectTab === 2 ? (
                    <React.Fragment key={index}>
                      {elem.db_images?.map((item, index) => {
                        return (
                          <div key={index} className='mx-auto text-center'>
                            <Image
                              src={item}
                              width={50}
                              height={50}
                              alt='tech'
                            />
                          </div>
                        );
                      })}
                      {elem.db?.map((item, index) => (
                        <div key={index} className='py-5 text-center'>
                          {item}
                        </div>
                      ))}
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={index}>
                      {elem.other_images?.map((item, index) => {
                        return (
                          <div key={index} className='mx-auto text-center'>
                            <Image
                              src={item}
                              width={50}
                              height={50}
                              alt='tech'
                            />
                          </div>
                        );
                      })}
                      {elem.others?.map((item, index) => (
                        <div key={index} className='py-5 text-center'>
                          {item}
                        </div>
                      ))}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
};

export default SkillsSection;

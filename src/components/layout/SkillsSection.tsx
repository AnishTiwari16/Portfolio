import React from 'react';

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
    <div className='pt-16 md:pt-52'>
      <div className='grid grid-cols-1 gap-x-44 md:grid-cols-2'>
        <div>
          <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
            Skills
          </div>
          <p className='mb-1 text-xs md:text-xl'>
            An individual eager to learn and explore new fields of life and
            technology, with good problem solving skills and fast learning
            abilities. Particulary Interested in the field of web development
            and technologies like NextJS, NodeJS and MongoDB and not shy to
            learn new things such as Machine Learning and Blockchain
            development.
          </p>
        </div>

        <div
          className='h-[400px] rounded-[15px]'
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
          <div className='mt-5 grid grid-cols-4 gap-x-8 rounded-md bg-[#ffffff1a] p-4 md:mt-0 md:gap-x-16'>
            {SKILLS.map((elem, index) => {
              return (
                <div
                  key={index}
                  className='hover-on-tabs text-xs font-bold md:text-lg'
                  onClick={() => handleTabs(elem.name)}
                >
                  {elem.name}
                </div>
              );
            })}
          </div>
          <div className='my-5 grid grid-cols-3'>
            {SKILLS.map((elem) => {
              return selectTab === 0
                ? elem.skills?.map((item, index) => (
                    <div key={index} className='py-5 text-center'>
                      {item}
                    </div>
                  ))
                : selectTab === 1
                ? elem.frameworks?.map((item, index) => (
                    <div key={index} className='py-5 text-center'>
                      {item}
                    </div>
                  ))
                : selectTab === 2
                ? elem.db?.map((item, index) => (
                    <div key={index} className='py-5 text-center'>
                      {item}
                    </div>
                  ))
                : elem.others?.map((item, index) => (
                    <div key={index} className='py-5 text-center'>
                      {item}
                    </div>
                  ));
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

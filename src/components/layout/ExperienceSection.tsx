import React from 'react';

const ExperienceSection = () => {
  return (
    <div className='py-16 md:py-52'>
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
              Worked on multiple projects from front to back creating
              applications. Some of them are Scatter, Instaraise, and company's
              DEX automated portal.
            </li>
            <li className='pt-2'>
              Worked as a full stack developer with a focus on front end
              technologies (React + TypeScript), with server side development
              (Node, Express, MongoDB), and blockchain (Defi, Polygon).
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
              Worked on multiple projects from front to back creating
              applications. Some of them are Scatter, Instaraise, and company's
              DEX automated portal.
            </li>
            <li className='pt-2'>
              Worked as a full stack developer with a focus on front end
              technologies (React + TypeScript), with server side development
              (Node, Express, MongoDB), and blockchain (Defi, Polygon).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

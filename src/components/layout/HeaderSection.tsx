import React from 'react';

const HeaderSection = () => {
  return (
    <nav className='pt-11'>
      <div className='grid grid-cols-12 rounded-2xl bg-[#25252580] p-6'>
        <div className='col-start-2 cursor-pointer'>{'<Anish />'}</div>
        <div className='nav-hover col-start-6 cursor-pointer duration-300'>
          .about()
        </div>
        <div className='nav-hover col-start-7 cursor-pointer duration-300'>
          .work()
        </div>
        <div className='nav-hover col-start-8 cursor-pointer duration-300'>
          .skills()
        </div>
        <div className='nav-hover col-start-9 cursor-pointer duration-300'>
          .contract()
        </div>
        <div className='nav-hover col-start-10 cursor-pointer duration-300'>
          .resume()
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;

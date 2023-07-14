import React from 'react';

const HeaderSection = () => {
  return (
    <nav className='pt-11'>
      <div className='grid grid-cols-12 rounded-2xl bg-[#25252580] p-6'>
        <div className='col-start-2 cursor-pointer'>{'<Anish />'}</div>
        <div className='nav-hover col-start-6 cursor-pointer'>.about()</div>
        <div className='nav-hover col-start-7 cursor-pointer'>.work()</div>
        <div className='nav-hover col-start-8 cursor-pointer'>.skills()</div>
        <div className='nav-hover col-start-9 cursor-pointer'>.contract()</div>
        <div className='nav-hover col-start-10 cursor-pointer'>.resume()</div>
      </div>
    </nav>
  );
};

export default HeaderSection;

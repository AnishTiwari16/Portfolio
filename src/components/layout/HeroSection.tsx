import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <div className='grid grid-cols-1 gap-x-44 pt-12 md:pt-28 lg:grid-cols-2'>
      <div className=''>
        <div className='text-3xl md:text-6xl'>
          Hi, I am <br />
          <span className='custom-shadow font-bold leading-normal'>
            Anish Tiwari
          </span>
          <br />
          <div className='py-2 text-xs md:text-xl'>
            I am a front-end developer based out of New Delhi, India.
          </div>
        </div>
        <div>
          <Link href='mailto:anish.at.tiwari@gmail.com?subject=Hey%20There! 👋'>
            <button className='connect-btn my-4 text-black transition-all duration-300 hover:text-white hover:before:bg-black hover:after:border-black hover:after:bg-white'>
              <span className='btn-font'>Say Hello!</span>
            </button>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'easeInOut',
          duration: 0.6,
        }}
        className='mx-autobg-[#000] relative my-20 px-4 lg:my-0 lg:px-0'
      >
        <div className='h-[32px] w-[full] rounded-[20px] rounded-b-[0px] bg-[#1F1F22] opacity-50 sm:h-[58px]'></div>
        <div className=' absolute left-5 top-[12px] h-2 w-2 rounded-full bg-[#E35353] sm:left-6 sm:top-6 sm:h-2.5 sm:w-2.5  '></div>
        <div className=' absolute left-[36px] top-[12px] h-2  w-2 rounded-full bg-[#53E37C] sm:left-10 sm:top-6 sm:h-2.5 sm:w-2.5 xl:left-[46px]'></div>
        <div className=' absolute left-[52px] top-[12px] h-2  w-2 rounded-full bg-[#F8D41C] sm:left-[56px] sm:top-6 sm:h-2.5 sm:w-2.5 xl:left-[68px]'></div>
        <div className=' px-2 pt-4 sm:px-4'>
          <div className='font-source text-code sm:text-codeLg text-sm'>
            <Typewriter
              options={{
                delay: 15,
                cursor: '',
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(10)
                  .typeString(
                    `<span><span class="text-[#636262] mr-1"> 1 </span>class<span class="text-codeYellow"> Person {</span></span></br><span><span class="text-[#636262] mr-1"> 2 </span>&emsp;&emsp; constructor<span class="text-codePurple">() {</span></span></br><span><span class="text-[#636262] mr-1"> 3 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.name = <span class="text-codeGreen">"Anish Tiwari"</span></span></br><span><span class="text-[#636262] mr-1"> 4 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.interest = <span class="text-codeGreen">"WEB 3"</span></span></br><span><span class="text-[#636262] mr-1"> 5 </span>&emsp;&emsp;&emsp;&emsp;<span class="text-codeBlue">this</span>.age = <span class="text-codeGreen">22</span></span></br><span class="inline-flex"><span class="flex-grow-0 flex-shrink-0 text-[#636262] mr-1 sm:w-[16.81px] w-[12px]"> 6 </span>&emsp;&emsp;&emsp;&emsp;<span class="flex-grow-0"><span class="text-codeBlue">this</span>.tech = ["<span><span class="text-codeGreen">React</span><span>", "</span><span class="text-codeGreen">Redux</span><span>", <span class="text-codeGreen">Typescript</span>, "</span><span class="text-codeGreen">Node</span><span>", "</span><span class="text-codeGreen">MongoDB</span><span>"]</span></span></span></span></br><span><span class="text-[#636262] mr-1"> 7 </span>&emsp;&emsp;<span class="text-codePurple"> }</span></span></br><span><span class="text-[#636262] mr-1"> 8 </span>&emsp;&emsp; <span>...</span></span></br><span><span class="text-[#636262] mr-1"> 9 </span><span class="text-codeYellow">}</span></span></br><span><span class="text-[#636262] mr-1"> 10</span>const anish = <span class="text-codeBlue">new </span><span class="text-codeYellow"> Person() </span></span>`
                  )
                  .start()
                  .callFunction(() => {
                    setStartTyping(true);
                  });
              }}
            />

            {startTyping && (
              <div className='flex gap-1'>
                <span>
                  <span className='mr-1 text-[#636262]'>11</span>
                  <span className='text-codeComment'>{`// try `}</span>
                </span>
                <Typewriter
                  options={{
                    delay: 15,
                    cursor: '',
                    deleteSpeed: 20,
                    strings: [
                      '<span class="text-codeComment"> "anish.playFavSong()" </span>',
                      '<span class="text-codeComment"> "anish.pauseFavSong()" </span>',
                      '<span class="text-codeComment"> "anish.getResume()" </span>',
                      '<span class="text-codeComment"> "anish.getBitcoin()" </span>',
                      '<span class="text-codeComment"> "anish.changeBG()" </span>',
                    ],
                    autoStart: true,
                    loop: true,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    pauseFor: 3000,
                  }}
                />
              </div>
            )}

            {startTyping && (
              <div className='inline-flex'>
                <span className='mr-1 text-[#636262]'>12</span>
                <div className='cursor w-full'>
                  <textarea
                    id='code'
                    className='w-full resize-none overflow-y-hidden border-transparent bg-transparent text-sm'
                    spellCheck='false'
                    rows={1}
                    cols={100}
                    // onChange={handleCodeChange}
                  />
                  <i className='hide'></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
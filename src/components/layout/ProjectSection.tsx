import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { useState } from 'react';
export const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const ProjectSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <>
      <div className='grid grid-cols-4 md:grid-cols-12'>
        <div className='col-span-4 md:col-span-5'>
          <div className='custom-shadow text-5xl font-bold leading-snug md:text-8xl md:leading-normal'>
            Work
          </div>
          <p>
            Here is a showcase of some of the best projects that I made. You can
            find the source code on my GitHub :)
          </p>
          <h3 className='my-20 text-3xl font-bold md:text-5xl'>Projects</h3>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-start-4 col-end-10'>
          <div className='relative flex'>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <div
              className='next absolute right-0 top-[50%] z-10 text-5xl'
              onClick={() => paginate(1)}
            >
              ‣
            </div>
            <div
              className='prev absolute top-[50%] z-10 -rotate-180 text-5xl'
              onClick={() => paginate(-1)}
            >
              ‣
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;

import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const ScrollAnimation = ({ children }: Props) => (
  <motion.div
    initial='offscreen'
    whileInView='onscreen'
    className='h-[100%]'
    viewport={{ once: true, amount: 0.4 }}
  >
    {children}
  </motion.div>
);

export default ScrollAnimation;

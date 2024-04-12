import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const blockAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const MotionMove = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={blockAnimation}
      viewport={{ amount: 0.4, once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionMove;

import React, {useRef} from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Program.module.css';

const Program = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Adjust the opacity effect to be more noticeable
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [1, 0.2, 1, 0.2, 1]
  );

  return (
    <div  className={styles.container}>

{
  console.log(scrollYProgress)
}      <motion.div ref={targetRef} className={styles.stickyContainer} style={{ opacity }}>
        <img
          src="/spiral-1.png"
          alt="Scrolling image with changing opacity"
          className={styles.stickyImage}
        />
      </motion.div>
      <div className={styles.spacer} style={{ height: '200vh' }} />
    </div>
  );
};

export default Program;

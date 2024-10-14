import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Program.module.css';


const Program = () => {
  const frames = [
    'spiral0.png', 'spiral-0.1.png', 'spiral-0.15.png', 'spiral-0.2.png', 'spiral-0.25.png',
    'spiral-0.3.png', 'spiral-0.35.png', 'spiral-0.4.png', 'spiral-0.45.png', 'spiral-0.5.png',
    'spiral-0.55.png', 'spiral-0.6.png', 'spiral-0.65.png', 'spiral-0.7.png', 'spiral-0.75.png',
    'spiral-0.8.png', 'spiral-0.85.png', 'spiral-0.9.png', 'spiral-1.0.png'
  ];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const background = useTransform(
    scrollYProgress,
    [0, 50, 100],
    ['url(/spiral0.png)', 'url(/spiral-0.5.png)', 'url(/spiral-0.5.png)']
  );
  // const backgroundImage = useTransform(
  //   scrollYProgress,
  //   [-100, 0, 100, 200],
  //   [0, 1, 1, 0]
  // )

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.stickyContainer}>
        <motion.div
          className={styles.image}
          style={{ background }}
        />
      </div>
    </div>
  );
};

export default Program;
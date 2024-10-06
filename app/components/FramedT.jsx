import React from 'react';
import styles from './FramedT.module.css';

const FramedT = () => {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.text}>  
            <p>We seek quirky people aged 22 and under.</p>
            <p>
              You're obsessed with <span className={styles.highlight}>creating, researching,</span> or <span className={styles.highlight}>solving problems</span>—
              likely juggling multiple passions, from art, to science or entrepreneurship.
            </p>
            <p>
              You are a <span className={styles.highlight}>dropout</span> or on a <span className={styles.highlight}>gap year</span>.
            </p>
          </div>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FramedT;
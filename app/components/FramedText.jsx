import React from 'react';
import styles from './FramedText.module.css';

const FramedText = () => {
  return (
    <div className={styles.frameContainer}>
      <div className={styles.frame}>
        <div className={styles.content}>
          <h2>We seek <span className={styles.highlight}>quirky</span> people aged 22 and under.</h2>
          <p>You're obsessed with <span className={styles.highlight}>creating, researching,</span> or <span className={styles.highlight}>solving problems</span>—likely juggling multiple passions, from art, to science or entrepreneurship.</p>
          <p>You are a <span className={styles.highlight}>dropout</span> or on a <span className={styles.highlight}>gap year</span>.</p>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FramedText;
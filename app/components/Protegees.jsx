import React from 'react';
import Image from 'next/image';
import styles from './Protegees.module.css';

const Protegees = () => {
  return (
    <section className={styles.protegesSection}>
    <h2 className={styles.title}>Our proteges</h2>
    <div className={styles.gallery}>
      <div className={`${styles.frame} ${styles.frame1}`}>
        <Image src="/b1.png" alt="Protege 1" layout="fill" objectFit="cover" />
      </div>
      <div className={`${styles.frame} ${styles.frame2}`}>
        <Image src="/b2.png" alt="Protege 2" layout="fill" objectFit="cover" />
      </div>
      <div className={`${styles.frame} ${styles.frame3}`}>
        <Image src="/b3.png" alt="Protege 3" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.textFrame}>
        <div className={styles.textContent}>
          <p>We seek quirky people aged 22 and under.</p>
          <p>You're obsessed with creating, researching, or solving problems— from art to science or entrepreneurship.</p>
          <p>You are a dropout or on a gap year.</p>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Protegees;
import React from 'react';
import Image from 'next/image';
import styles from './Program.module.css';

const Program = () => {
  return (
    <section className={styles.programSection}>
      <h2 className={styles.title}>The program</h2>
      <p className={styles.desc}>
        Nautilus is designed as a 6-months program to give you a bit of your childhood
        wander back. Take a break from the noise of your life to follow your curiosity and
        get intense with your craft.
      </p>
      <div className={styles.contentWrapper}>
        <div className={styles.spiralWrapper}>
          <Image src="/full.png" alt="Program spiral" width={300} height={300} className={styles.spiralImage} />
        </div>
        <div className={styles.textContent}>
          <div className={styles.column1}>
            <h3 className={styles.subtitle}>First 3 months:</h3>
            <p className={styles.description}>Life at the Casa Nautilus</p>
            <ul className={styles.list}>
              <li>Kickoff</li>
              <li>Find yourself a rhythm</li>
              <li>Immerse yourself into your craft</li>
              <li>Teach your peers and be taught</li>
              <li>Celebration banquet</li>
            </ul>
          </div>
          <div className={styles.column3}>
            <h3 className={styles.subtitle}>Last 3 months:</h3>
            <p className={styles.description}>Your own quest</p>
            <ul className={styles.list}>
              <li>Dive into a new adventure</li>
              <li>Weekly online check-ins</li>
              <li>Deliver the documentation of your experience</li>
              <li>Closing ceremony</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
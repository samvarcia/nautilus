import React from 'react';
import Image from 'next/image';
import styles from './Program.module.css';
<<<<<<< HEAD
import ScrollAnimatedSpiral from './ScrollAnimatedSpiral';
=======
>>>>>>> 9a406c75dc26638167390b7007d7b4ac5f49abdf

const Program = () => {
  return (
    <section className={styles.programSection}>
      <h2 className={styles.title}>The program</h2>
      <p className={styles.desc}>Nautilus is designed as a 6-months program to give you a bit of your childhood wander back. Take a break from the noise of your life to follow your curiosity and get intense with your craft.</p>
      <div className={styles.contentWrapper}>
<<<<<<< HEAD
        <ScrollAnimatedSpiral/>
        {/* <div className={styles.column}>
=======
        <div className={styles.column}>
>>>>>>> 9a406c75dc26638167390b7007d7b4ac5f49abdf
          <div className={styles.imageWrapper}>
            <Image src="/half.png" alt="Half circle" width={150} height={150} className={styles.curveImage} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>First 3 months:</h3>
            <p className={styles.description}>Life at the Casa Nautilus</p>
            <ul className={styles.list}>
              <li>Kickoff</li>
              <li>Find yourself a rhythm</li>
              <li>Immerse yourself into your quest</li>
              <li>Teach your peers and be taught</li>
              <li>Celebration banquet</li>
            </ul>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.imageWrapper}>
            <Image src="/full.png" alt="Full circle" width={150} height={150} className={styles.curveImage} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>Last 3 months:</h3>
            <p className={styles.description}>Your own quest</p>
            <ul className={styles.list}>
              <li>Dive into a new adventure</li>
              <li>Weekly online check-ins</li>
              <li>Delivering the documentation of your experience</li>
              <li>Closing ceremony</li>
            </ul>
          </div>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 9a406c75dc26638167390b7007d7b4ac5f49abdf
      </div>
    </section>
  );
};

export default Program;
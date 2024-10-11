import React from 'react';
import Image from 'next/image';
import styles from './Principles.module.css';

const Principles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.principles}>
          <h1 className={styles.title}>Our principles</h1>
          <div className={styles.principle}>
            <h2>1. Sick of your reality? Create a new one.</h2>
            <p>We are people with high agency who believe that life is malleable. We are the optimistic, the problem solvers, the early adopters of this world.</p>
          </div>
          <div className={styles.principle}>
            <h2>2. Pay-it-forward.</h2>
            <p>The world is a better place when people move through it carrying an abundant mindset. At Nautilus, we do our best to be generous with others, from sharing knowledge to giving a hand.</p>
          </div>
          <div className={styles.principle}>
            <h2>3. Your body is a vessel to create great things.</h2>
            <p>We're not just our minds. When our physical body is feeling good, we can create bigger, greater things. Being part of Nautilus means subscribing to a default healthy lifestyle.</p>
          </div>
          <div className={styles.principle}>
            <h2>4. No asshole policy.</h2>
            <p>We are: a pirates crew, a soccer team, a music band, the students of the school of Athens. We aren't: a group of entitled brats who think they are better than everyone else.</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/clouds.png"
            alt="People looking at clouds"
            fill
            // sizes="(max-width: 768px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Principles;
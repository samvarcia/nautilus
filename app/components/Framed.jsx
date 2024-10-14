import React from 'react';
import Image from 'next/image';
import styles from './Framed.module.css';

const Framed = () => {
  return (
    <div className={styles.container}>
      <Image 
        src="/program1.png"
        alt="Decorative frame"
        layout="fill"
        objectFit="contain"
        className={styles.frameImage}
      />
      <div className={styles.content}>
        <p className={styles.text}>
          Without the pressure of <span className={styles.feature}>paying bills</span> or <span className={styles.feature}>getting grades</span>, how far can you get into your <span className={styles.feature}>craft</span>?
        </p>
        <button className={styles.applyButton}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Framed;
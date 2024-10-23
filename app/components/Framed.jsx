import React from 'react';
import Image from 'next/image';
import styles from './Framed.module.css';
import Link from 'next/link';

const Framed = () => {
  return (
    <div className={styles.frameContainer}>
    <div className={styles.frame}>
      <div className={styles.content}>
      <p className={styles.text}>
          Without the pressure of <span className={styles.feature}>paying bills</span> or <span className={styles.feature}>getting grades</span>, how far can you get into your <span className={styles.feature}>craft</span>?
        </p>

        <button className={styles.applyButton}>
          <a href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
          target='_blank' >
            Apply
          </a>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Framed;
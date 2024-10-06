import React from 'react';
import Image from 'next/image';
import styles from './Protegees.module.css';
import FramedT from './FramedT';

const Protegees = () => {
  return (
    <section className={styles.protegesSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridTop}>
            <div className={styles.gridTopLeft}> 
              <h1 className={styles.title}>Our proteges</h1>
              <div className={`${styles.item} ${styles.item1}`}>
                <Image src="/b1.png" alt="Protege 1" width={600} height={200} className={styles.image} />
              </div>
            </div>
            <div className={`${styles.item} ${styles.item2}`}>
              <Image src="/b2.png" alt="Protege 2" width={300} height={500} className={styles.image} />
            </div>
          </div>
          <div className={styles.gridBottom}>
            <div className={`${styles.item} ${styles.item3}`}>
              <Image src="/b3.png" alt="Protege 3"width={400} height={500}  className={styles.image} />
            </div>
            <div className={`${styles.item} ${styles.item4}`}>
              <FramedT />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protegees;
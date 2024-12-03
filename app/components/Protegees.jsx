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
                <Image src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbXx1TLbq8Pj0dIvZfGLuQetS7zlHkoEKqwWpJ" alt="Protege 1" width={600} height={200} className={styles.image} />
              </div> 
            </div>
            <div className={`${styles.item} ${styles.item2}`}>
              <Image src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpb5K5iyaze6uGOJ0BtMc4DiVwkNHZjKhgndCAl" alt="Protege 2" width={300} height={500} className={styles.image} />
            </div>
          </div>
          <div className={styles.gridBottom}>
            <div className={`${styles.item} ${styles.item3}`}>
              <Image src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbMH0UCKiEqIfG7xPcXuwkFtHeUmzaCV5yv0Js" alt="Protege 3"width={400} height={500}  className={styles.image} />
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
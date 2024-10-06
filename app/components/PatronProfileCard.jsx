import React from 'react';
import Image from 'next/image';
import styles from './PatronProfileCard.module.css';

const PatronProfileCard = ({ imageSrc, patronName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              alt={`Portrait of ${patronName}`}
            height={350}
            width={300}
              className={styles.image}
            />
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{patronName}</p>
      </div>
    </div>
  );
};

export default PatronProfileCard;
import React from 'react';
import Image from 'next/image';
import styles from './PatronProfileCard.module.css';

const PatronProfileCard = ({ imageSrc, patronName, patronLink }) => {
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
        <a href={patronLink} target='_blank'>
          <p className={styles.name}>{patronName}</p>
        </a>
      </div>
    </div>
  );
};

export default PatronProfileCard;
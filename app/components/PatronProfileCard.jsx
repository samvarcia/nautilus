import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PatronProfileCard.module.css';

const PatronProfileCard = ({ imageSrc, patronName, patronLink }) => {
  const isSpecialImage = imageSrc.includes('x.png');
  const isTylerCowen = patronName === "Tyler Cowen";
  const imageWidth = isSpecialImage ? 325 : 300;
  const dimensions = { height: 350, width: imageWidth };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc} 
          alt={`Portrait of ${patronName}`}
          height={dimensions.height}
          width={dimensions.width}
          className={`${styles.image} ${isSpecialImage ? styles.specialImage : ''}`}
        />
      </div>
      <div className={`${styles.nameContainer} ${isSpecialImage ? styles.specialName : ''}`}>
        <a href={patronLink} target='_blank' rel="noopener noreferrer">
          <p className={styles.name}>{patronName}</p>
        </a>
        {isTylerCowen && (
          <a 
            href="https://www.mercatus.org/emergent-ventures" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.emergentVentures}
          >
            via Emergent Ventures
          </a>
        )}
      </div>
    </div>
  );
};

export default PatronProfileCard;
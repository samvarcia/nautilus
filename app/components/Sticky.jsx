import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Sticky.module.css';

const imageSources = Array.from({ length: 20 }, (_, i) => `/Step ${i + 1}.png`);

const Sticky = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);
  const requestRef = useRef();

  const animate = () => {
    if (sectionRef.current) {
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      const index = Math.min(
        Math.floor(scrollPercentage * (imageSources.length - 1)),
        imageSources.length - 1
      );
      setCurrentImageIndex(index);
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section ref={sectionRef} className={styles.stickySection}>
      <div className={styles.stickyContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSources[currentImageIndex]}
            alt={`Step ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className={styles.sequenceImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Sticky;
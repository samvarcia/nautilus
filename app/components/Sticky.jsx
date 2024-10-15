import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Sticky.module.css';

const imageSources = Array.from({ length: 20 }, (_, i) => `/Step ${i + 1}.png`);

const Sticky = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstSectionOpacity, setFirstSectionOpacity] = useState(0);
  const [secondSectionOpacity, setSecondSectionOpacity] = useState(0);
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

      // Fade in first section from step 0 to 10
      if (index < 10) {
        setFirstSectionOpacity(index / 9);
      } else {
        setFirstSectionOpacity(0);
      }

      // Fade in second section from step 10 to 20
      if (index >= 10) {
        setSecondSectionOpacity((index - 10) / 9);
      } else {
        setSecondSectionOpacity(0);
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className={styles.programSection}>
    <h2 className={styles.title}>The program</h2>
    <p className={styles.desc}>
      Nautilus is designed as a 6-months program to give you a bit of your childhood
      wander back. Take a break from the noise of your life to follow your curiosity and
      get intense with your craft.
    </p>
    
    <section ref={sectionRef} className={styles.stickySection}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSources[currentImageIndex]}
            alt={`Step ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className={styles.sequenceImage}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textSection} style={{ opacity: firstSectionOpacity }}>
            <h2 className={styles.subtitle}>First 3 months:</h2>
            <div className={styles.description}>
              <p>Life at the Casa Nautilus (San Francisco, CA)</p>
              <ul className={styles.list}>
                <li>Kickoff</li>
                <li>Find yourself a rhythm</li>
                <li>Immerse yourself into your quest</li>
                <li>Teach your peers and be taught</li>
                <li>Celebration banquet</li>
              </ul>
            </div>
          </div>
          <div className={styles.textSection} style={{ opacity: secondSectionOpacity }}>
            <h2 className={styles.subtitle}>Last 3 months:</h2>
            <div className={styles.description}>
              <p>Your own quest</p>
              <ul className={styles.list}>
                <li>Dive into a new adventure</li>
                <li>Weekly online check-ins</li>
                <li>Deliver the documentation of your experience</li>
                <li>Closing ceremony</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  );
};

export default Sticky;
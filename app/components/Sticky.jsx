import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './Sticky.module.css';

const imageSources = Array.from({ length: 20 }, (_, i) => `/Step ${i + 1}.png`);

const Sticky = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstSectionOpacity, setFirstSectionOpacity] = useState(1); // Start at 1 to show from beginning
  const [secondSectionOpacity, setSecondSectionOpacity] = useState(0);
  const sectionRef = useRef(null);
  const requestRef = useRef();

  const animate = useCallback(() => {
    if (sectionRef.current) {
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
      const index = Math.min(
        Math.floor(scrollPercentage * (imageSources.length - 1)),
        imageSources.length - 1
      );
      setCurrentImageIndex(index);

      // Keep first section visible until middle, then fade out
      if (index < 10) {
        setFirstSectionOpacity(1); // Always fully visible for first half
      } else {
        // Fade out over steps 10-12
        const fadeOutProgress = (index - 10);
        setFirstSectionOpacity(Math.max(0, 1 - fadeOutProgress));
      }

      // Start fading in second section from step 8
      if (index >= 10) {
        // Fade in over steps 8-10
        const fadeInProgress = (index - 10) / 2;
        setSecondSectionOpacity(Math.min(1, fadeInProgress));
      } else {
        setSecondSectionOpacity(0);
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <section className={styles.programSection}>
      <h2 className={styles.title}>The program</h2>
      <p className={styles.desc}>
        Nautilus is designed to give you some of your childhood wonder back. Take a break from the noise of your life to follow your curiosity and master your craft.
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
                <p>Life at Casa Nautilus</p>
                <ul className={styles.list}>
                  <li>Meet your new friends</li>
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
                  <li>Take your craft on a new adventure</li>
                  <li>Weekly check-ins 1-1 and in group</li>
                  <li>Deliver the story of your experience</li>
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
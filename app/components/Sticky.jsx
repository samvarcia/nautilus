import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './Sticky.module.css';

const imageSources = Array.from({ length: 20 }, (_, i) => `/Step ${i + 1}.png`);

const Sticky = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstSectionOpacity, setFirstSectionOpacity] = useState(1);
  const [secondSectionOpacity, setSecondSectionOpacity] = useState(0);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const sectionRef = useRef(null);
  const requestRef = useRef();
  const loadedImages = useRef(new Set());
  const prevImageIndex = useRef(0);

  // Enhanced preloading strategy
  useEffect(() => {
    let mounted = true;
    const preloadedImages = new Map();

    const preloadImage = async (src, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (mounted) {
            preloadedImages.set(index, img);
            resolve(index);
          }
        };
        img.onerror = reject;
      });
    };

    // Preload images in sequence order
    const preloadSequentially = async () => {
      try {
        // First preload the first few images
        await Promise.all(
          imageSources.slice(0, 5).map((src, i) => preloadImage(src, i))
        );

        if (mounted) {
          setImagesLoaded(true);
          
          // Then preload the rest in background
          imageSources.slice(5).forEach((src, i) => {
            preloadImage(src, i + 5);
          });
        }
      } catch (error) {
        console.error('Error preloading images:', error);
        if (mounted) {
          setImagesLoaded(true);
        }
      }
    };

    preloadSequentially();

    return () => {
      mounted = false;
    };
  }, []);

  const animate = useCallback(() => {
    if (sectionRef.current && imagesLoaded) {
      const { top, height } = sectionRef.current.getBoundingClientRect();
      
      const scrollableHeight = height - window.innerHeight;
      const effectiveScrollableHeight = scrollableHeight * 0.85;
      const scrolled = -top;
      
      let scrollPercentage;
      if (scrolled >= effectiveScrollableHeight) {
        scrollPercentage = 1;
      } else {
        scrollPercentage = Math.max(0, Math.min(1, scrolled / effectiveScrollableHeight));
      }

      let index = Math.min(
        Math.floor(scrollPercentage * (imageSources.length - 1)),
        imageSources.length - 1
      );

      // Smooth index transitions for first animation
      if (isFirstAnimation && Math.abs(index - prevImageIndex.current) > 1) {
        index = prevImageIndex.current + (index > prevImageIndex.current ? 1 : -1);
      }
      
      prevImageIndex.current = index;
      setCurrentImageIndex(Math.max(0, index));

      if (index >= 13) {
        const scaleProgress = (index - 13) / 6;
        const newScale = Math.max(0.7, 1 - scaleProgress * 0.3);
        setImageScale(newScale);

        const xOffset = scaleProgress * 50;
        const yOffset = scaleProgress * 30;

      } else {
        setImageScale(1);
      }

      if (index < 10) {
        setFirstSectionOpacity(1);
        setSecondSectionOpacity(0);
      } else {
        const fadeOutProgress = (index - 10) / 2;
        setFirstSectionOpacity(Math.max(0, 1 - fadeOutProgress));
        setSecondSectionOpacity(Math.min(1, fadeOutProgress));
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [imagesLoaded, isFirstAnimation]);

  useEffect(() => {
    if (imagesLoaded) {
      requestRef.current = requestAnimationFrame(animate);
      
      // Remove first animation flag after initial scroll
      const handleScroll = () => {
        if (isFirstAnimation) {
          setIsFirstAnimation(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        cancelAnimationFrame(requestRef.current);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [animate, imagesLoaded, isFirstAnimation]);

  return (
    <section className={styles.programSection}>
      <h2 className={styles.title}>The program</h2>
      <p className={styles.desc}>
        Nautilus is designed to give you some of your childhood wonder back. Take a break from the noise of your life to follow your curiosity and master your craft.
      </p>
      
      <section ref={sectionRef} className={styles.stickySection}>
        <div className={styles.contentContainer}>
          <div 
            className={`${styles.imageContainer} ${imagesLoaded ? styles.loaded : ''}`}
            style={{
              }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={imageSources[currentImageIndex]}
                alt={`Step ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className={styles.sequenceImage}
                priority
                quality={100}
              />
            </div>
          </div>
          <div className={styles.textContainer}>
            <div 
              className={styles.textSection} 
              style={{ 
                opacity: firstSectionOpacity,
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
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
            <div 
              className={styles.textSection} 
              style={{ 
                opacity: secondSectionOpacity,
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
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
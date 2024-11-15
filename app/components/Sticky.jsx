import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './Sticky.module.css';

const Sticky = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstSectionOpacity, setFirstSectionOpacity] = useState(1);
  const [secondSectionOpacity, setSecondSectionOpacity] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const requestRef = useRef();
  const imagesRef = useRef([]);
  const loadedImagesCount = useRef(0);
  
  const imageSources = Array.from({ length: 20 }, (_, i) => `/Step ${i + 1}.png`);

  // Preload images and draw to canvas
  useEffect(() => {
    let mounted = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    const loadImage = (src, index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (mounted) {
            imagesRef.current[index] = img;
            loadedImagesCount.current++;
            setLoadingProgress((loadedImagesCount.current / imageSources.length) * 100);
            
            // Draw first image when it's loaded
            if (index === 0) {
              drawImageCentered(ctx, img, rect.width, rect.height);
            }
            
            // Set images loaded when all images are ready
            if (loadedImagesCount.current === imageSources.length) {
              setImagesLoaded(true);
            }
            resolve();
          }
        };
        img.onerror = reject;
      });
    };

    // Load first 5 images with high priority
    const loadHighPriority = async () => {
      await Promise.all(imageSources.slice(0, 5).map((src, i) => loadImage(src, i)));
      
      // Then load the rest in background
      imageSources.slice(5).forEach((src, i) => loadImage(src, i + 5));
    };

    loadHighPriority();

    return () => {
      mounted = false;
    };
  }, []);

  // Draw image centered in canvas
  const drawImageCentered = useCallback((ctx, img, width, height) => {
    ctx.clearRect(0, 0, width, height);
    const aspect = img.width / img.height;
    let drawWidth = width;
    let drawHeight = width / aspect;
    
    if (drawHeight > height) {
      drawHeight = height;
      drawWidth = height * aspect;
    }
    
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;
    
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    if (sectionRef.current && imagesLoaded && canvasRef.current) {
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      const effectiveScrollableHeight = scrollableHeight * 0.85;
      const scrolled = -top;
      
      const scrollPercentage = Math.max(0, Math.min(1, scrolled / effectiveScrollableHeight));
      const index = Math.min(
        Math.floor(scrollPercentage * (imageSources.length - 1)),
        imageSources.length - 1
      );
      
      setCurrentImageIndex(index);
      
      // Draw current image
      const ctx = canvasRef.current.getContext('2d');
      const rect = canvasRef.current.getBoundingClientRect();
      const currentImage = imagesRef.current[index];
      if (currentImage) {
        drawImageCentered(ctx, currentImage, rect.width, rect.height);
      }
      
      // Update text sections
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
  }, [imagesLoaded, drawImageCentered]);

  useEffect(() => {
    if (imagesLoaded) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [animate, imagesLoaded]);

  return (
    <section className={styles.programSection}>
      <h2 className={styles.title}>The program</h2>
      <p className={styles.desc}>
        Nautilus is designed to give you some of your childhood wonder back. Take a break from the noise of your life to follow your curiosity and master your craft.
      </p>
      
      <section ref={sectionRef} className={styles.stickySection}>
        <div className={styles.contentContainer}>
          <div className={`${styles.imageContainer} ${imagesLoaded ? styles.loaded : ''}`}>
            {!imagesLoaded && (
              <div className={styles.loadingOverlay}>
                <div 
                  className={styles.loadingBar} 
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            )}
            <canvas
              ref={canvasRef}
              className={styles.sequenceCanvas}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
          
          <div className={styles.textContainer}>
            <div 
              className={styles.textSection} 
              style={{ opacity: firstSectionOpacity }}
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
              style={{ opacity: secondSectionOpacity }}
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
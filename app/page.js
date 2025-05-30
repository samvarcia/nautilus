"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Explanation from "./components/Explanation";
import Program from "./components/Program";
import Protegees from "./components/Protegees";
import Patrons from "./components/Patrons";
import Footer from './components/Footer';
import NaHeaderAlt from './components/NaHeaderAlt';
import Sticky from "./components/Sticky";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const renderHeroContent = () => {
    if (isMobile) {
      return (
        <h1 className={styles.heroText}>
          <span className={styles.logoWrapper}>
            <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbBolgQUkVm4oRrJYnQMhBX8Gl5UL29gai7Izx" alt="Nautilus" width={150} height={40} className={styles.logoImage} loading="lazy" />
          </span>
          <span>gives you three months to</span>
          <span className={styles.textLine}>
            <span className={styles.feature}>explore</span>
            <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbJsF4179y3L9MdDvP8ApTmnUBwacrqYItRWf2" alt="Explore" width={150} height={80} className={styles.inlineImage} loading="lazy" />
            , <span className={styles.feature}>learn</span>
            <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpboRTbY3gwq0OplGu7W4PmbjzJr5kUC8L9TyEF" alt="Learn" width={150} height={80} className={styles.inlineImage} loading="lazy" />
          </span>
          <span className={styles.textLine}>
            and <span className={styles.feature}>create</span>
            <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbjgjfT18LfCnFZJv3lQNdMiOy709bpza6Y8k5" alt="Create" width={150} height={80} className={styles.inlineImage} loading="lazy" />
            in complete freedom.
          </span>
        </h1>
      );
    }

    return (
      <h1 className={styles.heroText}>
        <span className={styles.logoWrapper}>
          <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbBolgQUkVm4oRrJYnQMhBX8Gl5UL29gai7Izx" alt="Nautilus" width={150} height={40} className={styles.logoImage} loading="lazy" />
        </span>
        <span>gives you three months to</span>
        <span className={styles.textLine}>
          <span className={styles.feature}>explore</span>
          <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbJsF4179y3L9MdDvP8ApTmnUBwacrqYItRWf2" alt="Explore" width={150} height={80} className={styles.inlineImage} loading="lazy" />
          , <span className={styles.feature}>learn</span>
          <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpboRTbY3gwq0OplGu7W4PmbjzJr5kUC8L9TyEF" alt="Learn" width={150} height={80} className={styles.inlineImage} loading="lazy" />
          and <br />
        </span>
        <span className={styles.textLine}>
          <span className={styles.feature}>create</span>
          <img src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbjgjfT18LfCnFZJv3lQNdMiOy709bpza6Y8k5" alt="Create" width={150} height={80} className={styles.inlineImage} loading="lazy" />
          in complete freedom.
        </span>
      </h1>
    );
  };

  return (
    <div className={styles.page}>
      {showHeader && <NaHeaderAlt />}
      <motion.main
        ref={mainRef}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      > 
        <section ref={heroRef} className={styles.hero}>
          <motion.div 
            className={styles.heroContent}
            variants={fadeInVariants}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {renderHeroContent()}
            <motion.button 
              className={styles.applyButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://airtable.com/appcXBT6ZoSigrsI2/pagFQikWyq1CAVoSi/form" 
                target='_blank'
              >
                Apply 
              </Link>
            </motion.button>
          </motion.div>
        </section>
      </motion.main>
      <Explanation />
      <Protegees />
      <Patrons />
      <Footer />
    </div>
  );
}

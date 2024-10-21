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
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  const mainRef = useRef(null);
  const heroRef = useRef(null);

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
            <h1 className={styles.heroText}>
              <span className={styles.logoWrapper}>
                <Image src="/logo.png" alt="Nautilus" width={150} height={40} className={styles.logoImage} />
              </span>
              <span>gives you six months to</span>
              <span className={styles.textLine}>
                <span className={styles.feature}>
                explore
                </span>
                <Image src="/explore.png" alt="Explore" width={150} height={80} className={styles.inlineImage} />
                , <span className={styles.feature}>learn</span> 
                <Image src="/image3.png" alt="Learn" width={150} height={80} className={styles.inlineImage} />
                and <br />
              </span>
              <span className={styles.textLine}>
                <span className={styles.feature}>create</span>
                <Image src="/image2.png" alt="Create" width={150} height={80} className={styles.inlineImage} />
                in complete freedom.
              </span>
            </h1>
            <motion.button 
              className={styles.applyButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
                target='_blank'
              >
                Apply 
              </Link>
            </motion.button>
          </motion.div>
        </section>
      </motion.main>
      <Explanation />
      <Program />
      <Protegees />
      <Patrons />
      <Footer />
    </div>
  );
}
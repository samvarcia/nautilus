"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Explanation from "./components/Explanation";
import Sticky from "./components/Sticky";
import Protegees from "./components/Protegees";
import Patrons from "./components/Patrons";
import Footer from './components/Footer';
import NaHeaderAlt from './components/NaHeaderAlt';
import Link from "next/link";

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.querySelector('main');
      if (mainSection) {
        const mainSectionBottom = mainSection.getBoundingClientRect().bottom;
        setShowHeader(mainSectionBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      {showHeader && <NaHeaderAlt  />}
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
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
            <button className={styles.applyButton}>
              <Link 
                  href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
                  target='_blank'
                >
                Apply 
              </Link>
            </button>
          </div>
        </section>
      </main>
      <Explanation />
      <Sticky />
      <Protegees />
      <Patrons />
      <Footer />
    </div>
  );
}
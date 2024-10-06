"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated, config } from 'react-spring';
import styles from './NaHeader.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NaHeader = ({ showInitialHeader = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolledHeaderAnimation = useSpring({
    opacity: isScrolled || !showInitialHeader ? 1 : 0,
    transform: isScrolled || !showInitialHeader ? 'translateY(0)' : 'translateY(-100%)',
    config: { ...config.molasses, duration: 1000 } // Smoother and slower animation
  });

  const isLinkActive = (href) => pathname === href;

  return (
    <>
      {showInitialHeader && (
        <header className={styles.initialHeader}>
          <Link href="/">
            <Image 
              src="/nautilus-logo-full.png" 
              alt="Nautilus - Master Your Craft" 
              width={300} 
              height={100}
              className={styles.fullLogo}
            />
          </Link>
        </header>
      )}
      
      <animated.header className={styles.scrolledHeader} style={scrolledHeaderAnimation}>
        <div className={styles.scrolledHeaderContent}>
          <Link href="/">
            <Image 
              src="/nautilus-logo.png" 
              alt="Nautilus" 
              width={170} 
              height={50}
              className={styles.Logo}
            />
          </Link>
          <nav className={styles.nav}>
            <button className={styles.mobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              ☰
            </button>
            <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
              <li>
                <Link 
                  href="/manifesto" 
                  className={isLinkActive('/manifesto') ? styles.activeLink : ''}
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <Link 
                  href="/program" 
                >
                  <span className={isLinkActive('/program') ? styles.activeLink : ''}>Program</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/patrons" 
                >
                  <span className={isLinkActive('/patrons') ? styles.activeLink : ''}>Patrons</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                >
                  <span className={isLinkActive('/faq') ? styles.activeLink : ''}>FAQ</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/apply" 
                >
                  <span className={`${styles.applyButton} ${isLinkActive('/apply') ? styles.activeLink : ''}`}>Apply</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </animated.header>
    </>
  );
};

export default NaHeader;
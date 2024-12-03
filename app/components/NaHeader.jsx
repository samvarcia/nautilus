"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import styles from './NaHeader.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NaHeader = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initialHeaderAnimation = useSpring({
    opacity: isScrolled ? 0 : 1,
    transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const scrolledHeaderAnimation = useSpring({
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const isLinkActive = (href) => pathname === href;

  return (
    <>
      <animated.header className={styles.initialHeader} style={initialHeaderAnimation}>
        <Link href="/">
          <Image 
            src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbpFSUIbdaQA6nvXbsKFfIYje754JWVgiPBlqr" 
            alt="Nautilus - Master Your Craft" 
            width={300} 
            height={100}
            className={styles.fullLogo}
          />
        </Link>
      </animated.header>
      
      <animated.header className={styles.scrolledHeader} style={scrolledHeaderAnimation}>
        <div className={styles.scrolledHeaderContent}>
          <Link href="/">
            <Image 
              src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbv2EZoxFNI3qYrb7MzgTcBV1lFPnRGjC59huU" 
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
                  href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
                  target='_blank'
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
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ScrollAnimatedSpiral.module.css';

const frames = [
  '/spiral-0.png',
  '/spiral-0.05.png',
  '/spiral-0.1.png',
  '/spiral-0.1.5.png',
  '/spiral-0.2.png',
  '/spiral-0.2.5.png',
  '/spiral-0.3.png',
  '/spiral-0.3.5.png',
  '/spiral-0.4.png',
  '/spiral-0.4.5.png',
  '/spiral-0.5.png',
  '/spiral-0.5.5.png',
  '/spiral-0.6.png',
  '/spiral-0.6.5.png',
  '/spiral-0.7.png',
  '/spiral-0.7.5.png',
  '/spiral-0.8.png',
  '/spiral-0.8.5.png',
  '/spiral-0.9.png',
  '/spiral-1.png'
];

export default function ScrollAnimatedSpiral() {
  // const [scrollPercentage, setScrollPercentage] = useState(0);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = containerRef.current;
  //     if (!container) return;

  //     const rect = container.getBoundingClientRect();
  //     const scrollPercentage = 1 - (rect.bottom / rect.height);
  //     setScrollPercentage(Math.max(0, Math.min(1, scrollPercentage)));
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial call to set the initial state
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const currentFrame = Math.min(frames.length - 1, Math.floor(scrollPercentage * frames.length));

  return (
    <div  className={styles.container}>
      <div className={styles.stickyContainer}>
        <img
          src="/spiral-1.png"
          alt="Animated Spiral"
          width={500}
          height={500}
          className={styles.spiralImage}
        />
      </div>
    </div>
  );
}
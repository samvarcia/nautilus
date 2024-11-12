import React, { useState, useEffect } from 'react';
import styles from './Patrons.module.css';
import PatronProfileCard from './PatronProfileCard';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Patrons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { 
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const patrons = [
    { imageSrc: "/Danielle.png", patronName: "Danielle Strachman", patronLink: 'https://x.com/DStrachman' },
    { imageSrc: "/1517Fund.png", patronName: "1517 Fund", patronLink: "https://www.1517fund.com/" },
    { imageSrc: "/PatrickRodriguez.png", patronName: "Patrick Rodriguez", patronLink: 'https://x.com/stratospark' },
    { imageSrc: "/TylerCowen.png", patronName: "Tyler Cowen", patronLink: "https://x.com/tylercowen" },
    // { imageSrc: "/j.png", patronName: "Jim O’Shaughnessy", patronLink: "https://www.osv.llc/" },
    // { imageSrc: "/x.png", patronName: "Stephen Cole", patronLink: "https://x.com/sthenc" },
  ];

  return (
    <section className={styles.PatronsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our patrons</h2>
        <p className={styles.description}>
          Behind every talent is a supporter who believes in their journey. Our patrons provide the financial resources you need to elevate your craft.
        </p>
        <div className={styles.wrap}>
          {isMobile ? (
            <Slider {...settings} className={styles.mobileSlider}>
              {patrons.map((patron, index) => (
                <div key={index}>
                  <PatronProfileCard 
                    imageSrc={patron.imageSrc} 
                    patronName={patron.patronName} 
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className={styles.wrap2}>
            <div className={styles.patrons}>
              {patrons.map((patron, index) => (
                <PatronProfileCard 
                  key={index}
                  imageSrc={patron.imageSrc} 
                  patronName={patron.patronName} 
                  patronLink={patron.patronLink}
                />
              ))}
            </div>
            </div>
          )}
          <div className={styles.cta}>
            <button className={styles.applyButton}>
              <Link href="/patrons">
                Become a patron
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patrons;
"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import NaHeader from "../components/NaHeader";
import Footer from "../components/Footer";
import PatronProfileCard from "../components/PatronProfileCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Patrons() {
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
    centerMode: false,
    adaptiveHeight: true,
    className: styles.mobileSlider,
    lazyLoad: true
  };

  const patronsData = [
    { imageSrc: "https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbzbW95UmegoEjVt9x0LXQdrB2HWvfpAIicYFb", patronName: "Danielle Strachman", patronLink: 'https://x.com/DStrachman' },
    { imageSrc: "https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbGlaXgXfVC3cXRu9PWG7k4mHopJsMxnz0lZj1", patronName: "Patrick Rodriguez", patronLink: 'https://x.com/stratospark' },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbVB8VCO5XV8DsZMkcB1FvnoU0GuzqPmSYAJTO", patronName: "1517 Fund", patronLink: "https://www.1517fund.com/" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbiFgHfmo5AqkJzTR2XVxb3pfMj7aBU60DNOyw", patronName: "Tyler Cowen", patronLink: "https://x.com/tylercowen" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbVnIbJy5XV8DsZMkcB1FvnoU0GuzqPmSYAJTO", patronName: "Stephen Cole", patronLink: "https://x.com/sthenc" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpb4vswBmIwRhEea0HquBLjSbgf9VIYFs7Pnmi3", patronName: "Daylight", patronLink: "https://daylightcomputer.com/" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbOnROfwl5fRC6zevLJxuj37ymVAGsdlQY9gEZ", patronName: "Jim O'Shaughnessy", patronLink: "https://www.osv.llc/" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbgVInUQw7zSBRd6MawJFU2YDrKOQ9fXvsjAlH", patronName: "Luis Cuende", patronLink: "https://x.com/licuende" },
    { imageSrc: "", patronName: "", patronLink: "", isBlank: true },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpboU89u5gwq0OplGu7W4PmbjzJr5kUC8L9TyEF", patronName: "Amine Benjelloun", patronLink: "https://www.instagram.com/bengeekly/" },
    { imageSrc: "https://h8b8ligav2.ufs.sh/f/1HacuqBhXBpbrxoOSLAOuItV1wUG8gE3fnxavMXqTdieZFbB", patronName: "Michael Karnjanaprakorn", patronLink: "https://mikekarnj.com/" },
    // Add two invisible blank patrons to center the last row
    { imageSrc: "", patronName: "", patronLink: "", isBlank: true },
  ];
 
  return (
    <>
      <NaHeader/>
      <div className={styles.page}>
        <div className={styles.PatronsContent}>
          <h1 className={styles.PatronsTitle}>Patrons</h1>
          <p>Our patrons are the Medicis of the 21st Century. Prominent intellectuals, artists, founders or investors, they are taking action towards a brighter world by supporting the talents of Nautilus.</p>
          {isMobile ? (
            <div style={{ width: '100%', maxWidth: '300px', margin: '20px auto' }}>
              <Slider {...settings}>
                {patronsData.filter(patron => !patron.isBlank).map((patron, index) => (
                  <div key={index}>
                    <PatronProfileCard 
                      imageSrc={patron.imageSrc}
                      patronName={patron.patronName}
                      patronLink={patron.patronLink}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : ( 
            <div className={styles.patrons}>
              {patronsData.map((patron, index) => (
                patron.isBlank ? (
                  // Render an invisible spacer for blank patrons
                  <div key={`blank-${index}`} className={styles.invisiblePatron}></div>
                ) : (
                  // Render normal patron card
                  <PatronProfileCard 
                    key={index}
                    imageSrc={patron.imageSrc}
                    patronName={patron.patronName}
                    patronLink={patron.patronLink}
                  />
                )
              ))}
            </div>
          )}
          <div className={styles.becomeContainer}>
            <h3>Become a patron</h3>
            <p>Interested in supporting us on our mission to spark a new Renaissance? There are many advantages to supporting Nautilus:</p>
          </div>
          <div className={styles.cardsContainer}>
					<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbFqjZbEhMxWPRfVpO8zK1ShoFaJUELA09iwuy"
											alt="Grantee"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We're finding and matching you with a grantee,</span> based on your interests. This ensures your investment aligns with your passion.
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbGbCsZBfVC3cXRu9PWG7k4mHopJsMxnz0lZj1"
											alt="Community"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We're creating a community</span> of exceptional young talents and patrons. Come meet them at our banquets.
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbaJbJMycQHoAX5mO0UcaNY7IWDlCTE3tpsneP"
											alt="Guide"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We're guiding them,</span> to make the most of the experience and connect with peers. You get to mentor them too if you want!
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpb9YSG9PvWU61aXQibKJrFtBkjTR7p3hySCD0A"
											alt="Money"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>Your investment is fully tax deductible.</span> Nautilus Quest is a registered 501(c)3.
										</p>
									</div>
								</div>
          </div>
          <p className={styles.last}>Join us as a patron by <a href="https://airtable.com/appztBooHuqyfQcSt/pagcIJNkE5ppfxQeD/form"  target="_blank" rel="noopener noreferrer">filling out this quick form</a>. We'll get back to you asap.</p>
          <div className={styles.becomeContainer}>
            <h3>Make a small donation</h3>
            <div className={styles.donationText}>
              <div className={styles.donationContent}>
                <div className={styles.donate}>
                  <p className={styles.text}>Every contribution, big or small, makes a meaningful difference. If a larger donation isn't possible, your support at any level helps us nurture exceptional talent and keep the spirit of Nautilus alive. Every donation is tax-deductible, and we are truly grateful to have you as part of this journey.</p>
                  <Link 
                  href="https://hcb.hackclub.com/donations/start/nautilus" 
                  target='_blank'
                  >
                    <span className={styles.applyButton}>Donate</span>
                  </Link>
                </div>
                <Image
											src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbpXm3rLdaQA6nvXbsKFfIYje754JWVgiPBlqr"
											alt="Donate"
											width={600}
                      height={400}
                      // quality={100}
										/>
              </div>

            </div>
          </div>
        </div>	
        <Footer />
      </div>
    </>
  );
}
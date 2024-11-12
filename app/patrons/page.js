// import Image from "next/image";
// import styles from "./page.module.css";
// import NaHeader from "../components/NaHeader";
// import Footer from "../components/Footer";
// import PatronProfileCard from "../components/PatronProfileCard";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// export default function Patrons() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const patronsData = [
//     { imageSrc: "/Danielle.png", patronName: "Danielle Strachman" },
//     { imageSrc: "/PatrickRodriguez.png", patronName: "Patrick Rodriguez" },
//     { imageSrc: "/1517Fund.png", patronName: "1517 Fund" },
//     { imageSrc: "/TylerCowen.png", patronName: "Tyler Cowen" },
//   ];


//   return (
//     <>
// 		<NaHeader/>
//     <div className={styles.page}>
//         <div className={styles.PatronsContent}>
//             <h1 className={styles.PatronsTitle}>Patrons</h1>
// 						<p>Our patrons are the Medicis of the 21st Century. Prominent intellectuals, artists, founders or investors, they are taking action towards a brighter world by supporting the talents of Nautilus. </p>
// 						{isMobile ? (
//             <Slider {...settings} className={styles.mobileSlider}>
//               {patronsData.map((patron, index) => (
//                 <div key={index}>
//                   <PatronProfileCard 
//                     imageSrc={patron.imageSrc}
//                     patronName={patron.patronName}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           ) : (
//             <div className={styles.patrons}>
//               {patronsData.map((patron, index) => (
//                 <PatronProfileCard 
//                   key={index}
//                   imageSrc={patron.imageSrc}
//                   patronName={patron.patronName}
//                 />
//               ))}
//             </div>
//           )}
// 						<div className={styles.becomeContainer}>
// 							<h3>Become a patron</h3>
// 							<p>Interested in supporting us on our mission to spark a new Renaissance? There are many advantages to supporting Nautilus:</p>
// 						</div>
// 						<div className={styles.cardsContainer}>
// 								<div className={styles.card}>
// 									<div className={styles.imageContainer}>
// 										<Image
// 											src="/grantee.png"
// 											alt="Grantee"
// 											layout="fill"
// 											objectFit="cover"
// 											className={styles.image}
// 										/>
// 									</div>
// 									<div className={styles.textContainer}>
// 										<p className={styles.text}>
// 										<span className={styles.textAlt}>We’re finding and matching you with a grantee,</span> based on your interests. This ensures your investment aligns with your passion.
// 										</p>
// 									</div>
// 								</div>
// 								<div className={styles.card}>
// 									<div className={styles.imageContainer}>
// 										<Image
// 											src="/comunity.png"
// 											alt="Community"
// 											layout="fill"
// 											objectFit="cover"
// 											className={styles.image}
// 										/>
// 									</div>
// 									<div className={styles.textContainer}>
// 										<p className={styles.text}>
// 										<span className={styles.textAlt}>We’re creating a community</span> of exceptional young talents and patrons. Come meet them at our banquets.
// 										</p>
// 									</div>
// 								</div>
// 								<div className={styles.card}>
// 									<div className={styles.imageContainer}>
// 										<Image
// 											src="/guide.png"
// 											alt="Guide"
// 											layout="fill"
// 											objectFit="cover"
// 											className={styles.image}
// 										/>
// 									</div>
// 									<div className={styles.textContainer}>
// 										<p className={styles.text}>
// 										<span className={styles.textAlt}>We’re guiding them,</span> to make the most of the experience and connect with peers. You get to mentor them too if you want!
// 										</p>
// 									</div>
// 								</div>
// 								<div className={styles.card}>
// 									<div className={styles.imageContainer}>
// 										<Image
// 											src="/money.png"
// 											alt="Money"
// 											layout="fill"
// 											objectFit="cover"
// 											className={styles.image}
// 										/>
// 									</div>
// 									<div className={styles.textContainer}>
// 										<p className={styles.text}>
// 										<span className={styles.textAlt}>Your investment is fully tax deductible.</span> Nautilus Quest is a registered 501(c)3.
// 										</p>
// 									</div>
// 								</div>
// 						</div>
// 						<p className={styles.last}>Join us as a patron by <a href="https://airtable.com/appztBooHuqyfQcSt/pagcIJNkE5ppfxQeD/form"  target="_blank" rel="noopener noreferrer">filling out this quick form</a>. We’ll get back to you asap.</p>
//         </div>	
//       <Footer />
//     </div>
//     </>
//   );
// }

"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
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
  };

  const patronsData = [
    { imageSrc: "/Danielle.png", patronName: "Danielle Strachman", patronLink: 'https://x.com/DStrachman' },
    { imageSrc: "/1517Fund.png", patronName: "1517 Fund", patronLink: "https://www.1517fund.com/" },
    { imageSrc: "/PatrickRodriguez.png", patronName: "Patrick Rodriguez", patronLink: 'https://x.com/stratospark' },
    { imageSrc: "/TylerCowen.png", patronName: "Tyler Cowen", patronLink: "https://x.com/tylercowen" },
    { imageSrc: "/j.png", patronName: "Jim O’Shaughnessy", patronLink: "https://www.osv.llc/" },
    { imageSrc: "/x.png", patronName: "Stephen Cole", patronLink: "https://x.com/sthenc" },
  ];

  return (
    <>
      <NaHeader/>
      <div className={styles.page}>
        <div className={styles.PatronsContent}>
          <h1 className={styles.PatronsTitle}>Patrons</h1>
          <p>Our patrons are the Medicis of the 21st Century. Prominent intellectuals, artists, founders or investors, they are taking action towards a brighter world by supporting the talents of Nautilus.</p>
          {isMobile ? (
            <Slider {...settings} className={styles.mobileSlider}>
              {patronsData.map((patron, index) => (
                <div key={index}>
                  <PatronProfileCard 
                    imageSrc={patron.imageSrc}
                    patronName={patron.patronName}
                    patronLink={patron.patronLink}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className={styles.patrons}>
              {patronsData.map((patron, index) => (
                <PatronProfileCard 
                  key={index}
                  imageSrc={patron.imageSrc}
                  patronName={patron.patronName}
                  patronLink={patron.patronLink}

                />
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
											src="/grantee.png"
											alt="Grantee"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We’re finding and matching you with a grantee,</span> based on your interests. This ensures your investment aligns with your passion.
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="/comunity.png"
											alt="Community"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We’re creating a community</span> of exceptional young talents and patrons. Come meet them at our banquets.
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="/guide.png"
											alt="Guide"
											layout="fill"
											objectFit="cover"
											className={styles.image}
										/>
									</div>
									<div className={styles.textContainer}>
										<p className={styles.text}>
										<span className={styles.textAlt}>We’re guiding them,</span> to make the most of the experience and connect with peers. You get to mentor them too if you want!
										</p>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="/money.png"
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
        </div>	
        <Footer />
      </div>
    </>
  );
}
import Image from "next/image";
import styles from "./page.module.css";

import Footer from "../components/Footer";
import PatronProfileCard from "../components/PatronProfileCard";


export default function Patrons() {
  return (
    <div className={styles.page}>
        <div className={styles.PatronsContent}>
            <h1 className={styles.PatronsTitle}>Patrons</h1>
						<p>Our patrons are the Medicis of the 21st Century. Prominent intellectuals, artists, founders or investors, they are taking action towards a brighter world by supporting the talents of Nautilus. </p>
									<div className={styles.patrons}>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
									</div>
						<div className={styles.becomeContainer}>
							<h3>Become a patron</h3>
							<p>Interested in supporting us on our mission to spark a new Renaissance? There are many advantages to supporting Nautilus:</p>
						</div>
						<div className={styles.cardsContainer}>
								<div className={styles.card}>
									<div className={styles.imageContainer}>
										<Image
											src="/image1.png"
											alt="Group of people looking at a house"
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
											src="/image1.png"
											alt="Group of people looking at a house"
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
											src="/image1.png"
											alt="Group of people looking at a house"
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
											src="/image1.png"
											alt="Group of people looking at a house"
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
        </div>	
      <Footer />
    </div>
  );
}

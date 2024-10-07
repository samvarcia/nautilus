import Image from "next/image";
import styles from "./page.module.css";
import NaHeader from "../components/NaHeader";
import Footer from "../components/Footer";
import PatronProfileCard from "../components/PatronProfileCard";


export default function Patrons() {
  return (
    <>
		<NaHeader/>
    <div className={styles.page}>
        <div className={styles.PatronsContent}>
            <h1 className={styles.PatronsTitle}>Patrons</h1>
						<p>Our patrons are the Medicis of the 21st Century. Prominent intellectuals, artists, founders or investors, they are taking action towards a brighter world by supporting the talents of Nautilus. </p>
									<div className={styles.patrons}>
										<PatronProfileCard 
											imageSrc="/1517FundProfile.png" 
											patronName="1517 Fund"  
										/>
										<PatronProfileCard 
											imageSrc="/daniellesquare.png" 
											patronName="Danielle Strachman" 
										/>
										<PatronProfileCard 
											imageSrc="/TylerCowenProfile.png" 
											patronName="Tyler Cowen" 
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
						<p className={styles.last}>Join us as a patron by <a href="https://airtable.com/appztBooHuqyfQcSt/pagcIJNkE5ppfxQeD/form"  target="_blank" rel="noopener noreferrer">filling out this quick form</a>. We’ll get back to you asap.</p>
        </div>	
      <Footer />
    </div>
    </>
  );
}

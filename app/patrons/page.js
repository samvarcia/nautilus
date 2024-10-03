import Image from "next/image";
import styles from "./page.module.css";
// import Explanation from "./components/Explanation";
// import Program from "./components/Program";
// import Protegees from "./components/Protegees";
// import Patrons from "./components/Patrons";
import Footer from "../components/Footer";
import PatronProfileCard from "../components/PatronProfileCard";


export default function Patrons() {
  return (
    <div className={styles.page}>
        <div className={styles.PatronsContent}>
            <h1>Patrons</h1>
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
        </div>
      <Footer />
    </div>
  );
}

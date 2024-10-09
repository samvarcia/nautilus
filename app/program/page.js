import Image from "next/image";
import styles from "./page.module.css";

import Footer from "../components/Footer";
import PatronProfileCard from "../components/PatronProfileCard";
import Principles from "../components/Principles";
import Framed from "../components/Framed";
import NaHeader from "../components/NaHeader";

export default function Program() {
  return (
    <>
		<NaHeader/>

    <div className={styles.page}>
        <div className={styles.ProgramContent}>
            <h1 className={styles.ProgramTitle}>Program</h1>
						<p className={styles.ProgramDesc}>Dive into your craft. Inspired by art residencies, meditation retreats, and startup accelerators, Nautilus is designed as a time to break away from the noise of daily life. It’s for the artists, builders, misfits, researchers of this world.</p>
            <Principles />
            <div className={styles.Six}>
							<div className={styles.sixHeader}>
								<h1>Six months with us</h1>
								<p>You are free to spend your time mostly how you want, from doing this yoga class that makes you feel good in the morning, to reading 8 hours a day, painting a gigantic art piece, and building software for the beauty of it.</p>
							</div>
							<h3>Join the clan</h3>
							<p>We come together weekly, both as a group and 1-on-1. Your peers will be there to help you push through moments of challenge, spark your creativity, and make sure you have a lot of fun along the way.</p>
							<div className={styles.sixLayout}>
								<Image
									src="/house.png"
									alt="People looking at clouds"
									width={400}
									height={600}
									className={styles.image}
								/>
								<div className={styles.sixText}>
									<div className={styles.one}>
										<h3>Live at Casa Nautilus</h3>
										<p>For the first three months, Casa Nautilus will be your home, nestled in the heart of San Francisco. It’s a peaceful haven, offering you a place to retreat during the day. On Friday nights, join us for weekly salons and banquets, where you’ll connect with the patrons and mentors of our community.</p>
									</div>
									<div>
										<h3>Onto your own Odyssey</h3>
										<p>In the second half of the program, you’ll navigate mostly on your own. We’ll still sync up weekly, but the journey is yours to shape—whether that means traveling, heading back home, or exploring new paths as you continue your projects.</p>
									</div>
									<div>
										<h3>Create the tale of your quest</h3>
										<p>Throughout the program, you will document your experience, capturing the essence of your growth and discoveries. At the end of six months, you’ll present it in any format you choose, creating a lasting reflection of this transformative chapter—something to look back on for years to come.</p>
									</div>
									{/* <Image
										src="/future.png"
										alt="People looking at clouds"
										width={400}
										height={600}
										className={styles.image2}
									/> */}
								</div>
							</div>
							<h3>Create the tale of your quest</h3>
							<p>Throughout the program, you will document your experience, capturing the essence of your growth and discoveries. At the end of six months, you’ll present it in any format you choose, creating a lasting reflection of this transformative chapter—something to look back on for years to come.</p>
						</div>
						<div className={styles.ProgramCTA}>
							<div className={styles.cta}>
								<Framed />
							</div>
							<Image
									src="/program2.png"
									alt="TEEN"
									width={600}
									height={740}
									className={styles.teen}
								/>
						</div>
        </div>	
      <Footer />
    </div>
    </>
  );
}

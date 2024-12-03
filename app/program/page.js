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
								<h1>Three months with us</h1>
								<p>You are free to spend your time mostly how you want, from doing this yoga class that makes you feel good in the morning, to reading 8 hours a day, painting a gigantic art piece, and building software for the beauty of it.</p>
							</div>
							<div className={styles.sixLayout}>
								<div className={styles.sixLayoutBox}>
									<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbK4FApoXl3uXEP75sfLOz8W2FYryipob4QNMH"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.desktopImage}
										quality={100}

									/>
									<div>
										<h3>Join the clan</h3>
									<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbK4FApoXl3uXEP75sfLOz8W2FYryipob4QNMH"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.mobileImage}
										quality={100}

									/>
										<p>We come together weekly, both as a group and 1-on-1. Your peers will be there to help you push through moments of challenge, spark your creativity, and make sure you have a lot of fun along the way.</p>
									</div>
								</div>
								<div className={styles.sixLayoutBox}>
									<div>
										<h3>Live at Casa Nautilus</h3>
										<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbGP2yi0SfVC3cXRu9PWG7k4mHopJsMxnz0lZj"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.mobileImage}
										quality={100}
									/>
										<p>For three months, Casa Nautilus will be your home, nestled in the heart of San Francisco. It’s a peaceful haven, offering you a place to retreat during the day. On Friday nights, join us for weekly salons and banquets, where you’ll connect with the patrons and mentors of our community.</p>
									</div>
									<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbGP2yi0SfVC3cXRu9PWG7k4mHopJsMxnz0lZj"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.desktopImage}
										quality={100}
									/>
								</div>
								<div className={styles.sixLayoutBox}>
									<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbwU6Dw9aUKYbluhSotcZ5gp8Vs9veFqLMIGjH"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.desktopImage}
										quality={100}
									/>
									<div>
										<h3>Create the tale of your quest</h3>
										<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpbwU6Dw9aUKYbluhSotcZ5gp8Vs9veFqLMIGjH"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.mobileImage}
										quality={100}
									/>
										<p>Throughout the program, you will document your experience, capturing the essence of your growth and discoveries. At the end of the three months, you’ll present it in any format you choose, creating a lasting reflection of this transformative chapter—something to look back on for years to come.</p>
									</div>
								</div>
								<div className={styles.sixLayoutBox}>
									<div>
										<h3>Back home</h3>
										<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpb4cFtO9IwRhEea0HquBLjSbgf9VIYFs7Pnmi3"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.mobileImage}
										quality={100}
									/>
										<p>The month following the end of the program is a time for integration. You continue to take part in regular check ins with your peers so that you get the support you need to make your learnings long lasting. After that, you stay part of the Nautilus clan: we’re here to support you!</p>
									</div>
									<Image
										src="https://utfs.io/a/h8b8ligav2/1HacuqBhXBpb4cFtO9IwRhEea0HquBLjSbgf9VIYFs7Pnmi3"
										alt="Join the clan"
										width={500}
										height={400}
										className={styles.desktopImage}
										quality={100}
									/>
								</div>
							</div>
						
						</div>
						<div className={styles.ProgramCTA}>
							<div className={styles.cta}>
								<Framed />
							</div>
						</div>
        </div>	
      <Footer />
    </div>
    </>
  );
}

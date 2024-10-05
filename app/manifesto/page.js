import Image from "next/image";
import styles from "./page.module.css";
// import Explanation from "./components/Explanation";
// import Program from "./components/Program";
// import Protegees from "./components/Protegees";
// import Patrons from "./components/Patrons";
import Footer from "../components/Footer";

export default function Manifesto() {
  return (
    <div className={styles.page}>
        <div className={styles.manifestoContent}>
            <h1>Manifesto</h1>
						<div className={styles.firstParagraph}>
							<div className={styles.text}>
								<h2 className={styles.paraSub}>School has stolen your childhood</h2>
								<p>You were born a creative genius, eager to explore and learn.</p>
								<p>You deserved an infancy made of adventures driven by curiosity.</p>
								<p>Instead, they made you sit and shut in a classroom, draining your spirit and stripping your agency.</p>
								<p>They labeled you Inadequate, Agitated, ADHD, Disruptive, Too much, Special needs, Daydreamer, Lazy, Troublemaker, Problematic, or Autistic.</p>
							</div>
							<Image src="/manifesto1.png" alt="School has stolen your childhood" width={500} height={660} className={styles.curveImage} />
						</div>
						<div className={styles.secondParagraph}>
							<Image src="/manifesto2.png" alt="School has stolen your childhood" width={500} height={660} className={styles.curveImage} />
							<div className={styles.text}>
								<h2 className={styles.paraSub}>Becoming an adult doesn’t make it easier</h2>
								<p>By the time you are out of school, life’s responsibilities have caught up with you.</p>
								<p>Expected to sustain yourself, you’re set on yet another mind-numbing pathway.</p>
								<p>Ever wondered what your life could be if you had been given a chance to dive into your passions?</p>
							</div>
						</div>
						<div className={styles.thirdParagraph}>
							<div className={styles.text}>
								<h2 className={styles.paraSub}>We believe exploring your potential is a human right</h2>
								<p>We’re offering you six months to reclaim the freedom of childhood exploration.</p>
								<p>Nautilus will match you with a patron to pay your bills, and you’ll decide what to learn and create. No tests, no daily grind. Just unfiltered freedom, a community of peers, and the guidance you need.</p>
								<p>We’re here for you—whether you’re an artist, hacker, writer, scientist, community builder, or a founder.</p>
							</div>
							<Image src="/manifesto3.png" alt="School has stolen your childhood" width={1100} height={275} className={styles.curveImage} />
						</div>
						<div className={styles.fourthParagraph}>
							<div className={styles.text}>
								<h2 className={styles.paraSub}>Nautilus cares for the children of the 21st Century</h2>
								<p>One day, young people will flourish in a world that, by default, nurtures their potential to create and innovate—giving rise to millions of Einsteins and Da Vincis.</p>
								<p>Nautilus inspires a cultural shift to get closer to that vision, by proving how much the youth is capable of when given the chance.</p>
							</div>
							<Image src="/manifesto4.png" alt="School has stolen your childhood" width={500} height={660} className={styles.curveImage} />
						</div>
        </div>
      <Footer />
    </div>
  );
}

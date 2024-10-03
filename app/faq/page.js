import Image from "next/image";
import styles from "./page.module.css";
// import Explanation from "./components/Explanation";
// import Program from "./components/Program";
// import Protegees from "./components/Protegees";
// import Patrons from "./components/Patrons";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <div className={styles.page}>
        <div className={styles.faqContent}>
            <h1>FAQ</h1>
						<div className={styles.faqTextCont}>
							<div className={styles.faqText}>
								<h3>What is Nautilus?</h3>
								<p>Nautilus is a 6 months patronage program for young talent who want to master their craft, from arts, to science and entrepreneurship.</p>
							</div>
							<div className={styles.faqText}>
								<h3>How much is the monthly stipend I’ll be receiving?</h3>
								<p>Between 2.5 and 3.5k USD/ month depending on your individual equipment needs.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Can I be attending school or working a job during the program?</h3>
								<p>Nope, we want you all in. Dropout or take a gap year!</p>
							</div>
							<div className={styles.faqText}>
								<h3>How many protégés do you select?</h3>
								<p>We select between 5 and 10 protégés (our grantees) per cohort.</p>
							</div>
							<div className={styles.faqText}>
								<h3>What is the age limit to apply?</h3>
								<p>You need to be 22yo or under to apply.</p>
							</div>
							<div className={styles.faqText}>
								<h3>What kind of profile do you accept in the program?</h3>
								<p>We are interested in backing people crafting across fields, from art, to science, social technology, entrepreneurship, deep tech, literature… You name it, anything!</p>
							</div>
							<div className={styles.faqText}>
								<h3>Can I be attending school or working a job during the program?</h3>
								<p>Nope, we want you all in. Dropout or take a gap year!</p>
							</div>
							<div className={styles.faqText}>
								<h3>How many protégés do you select??</h3>
								<p>We select between 5 and 10 protégés (our grantees) per cohort.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Do you take equity?</h3>
								<p>We don’t take equity or expect you to pay us back. If we do our job well, once you are well off financially, maybe you’ll join us again as a patron!</p>
							</div>
							<div className={styles.faqText}>
								<h3>What if I can’t attend the whole program? Can I still join?</h3>
								<p>We select people who can commit to being part of the program for its entire duration (6 months).</p>
							</div>
							<div className={styles.faqText}>
								<h3>If I’m accepted, do I need to move to San Francisco?</h3>
								<p>Temporarily, yes. The first three months of the program are in-person at the Casa Nautilus. If needed, we’ll help you with your visa.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Is there an application deadline?</h3>
								<p>The application deadline for the next cohort (starting March 1st 2025) is December 31st 2024 at midnight PT. If you apply after that, we’ll consider you for the following cohort, starting on June 1st 2025.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Can I apply with my team?</h3>
								<p>We accept individuals only.</p>
							</div>
							<div className={styles.faqText}>
								<h3>How is the grant given to me?</h3>
								<p>Through monthly stipend wired to your bank account or via Paypal.</p>
							</div>
							<div className={styles.faqText}>
								<h3>What is the kind of guidance you provide?</h3>
								<p>Zelda, the founder of Nautilus, will be here with you every step of the way. From weekly group check ins, to supporting your individuals needs (while giving you as much freedom and agency as you want!), you won’t have to figured it all by yourself.

In addition, your patron may mentor you 1-1 too!</p>
							</div>
							<div className={styles.faqText}>
								<h3>What should I expect from the peers part of this program?</h3>
								<p>Expect the kindest, most brilliant and talented people you’ve met in your entire life.

We have a no asshole policy.</p>
							</div>
            </div>
        </div>
      <Footer />
    </div>
  );
}

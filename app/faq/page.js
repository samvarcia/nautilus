import Image from "next/image";
import styles from "./page.module.css";
// import Explanation from "./components/Explanation";
// import Program from "./components/Program";
// import Protegees from "./components/Protegees";
// import Patrons from "./components/Patrons";
import Footer from "../components/Footer";
import NaHeader from "../components/NaHeader";

export default function Faq() {
  return (

    <>
						<NaHeader/>

    <div className={styles.page}>
        <div className={styles.faqContent}>
            <h1>FAQ</h1>
						<div className={styles.faqTextCont}>
							<div className={styles.faqText}>
								<h3>What is Nautilus?</h3>
								<p>Nautilus is a 3 months patronage program for young talent who want to master their craft, from arts, to science and entrepreneurship.</p>
							</div>
							<div className={styles.faqText}>
								<h3>How much is the monthly stipend I’ll be receiving?</h3>
								<p>We cover your housing, food, and on top of that, we give you a stipend for your equipment needs.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Can I be attending school or working a job during the program?</h3>
								<p>Nope, we want you all in. Dropout or take a gap year!</p>
							</div>
							<div className={styles.faqText}>
								<h3>How many proteges do you select?</h3>
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
								<h3>Is it ok if I’m from outside the US?</h3>
								<p>Yes, we’ll help you get a short term visa for the first half of the program.</p>
							</div>
							<div className={styles.faqText}>
								<h3>What is the selection process like?</h3>
								<p><a href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" target="_blank">Fill this form</a> and we’ll be in touch with you within a week of applying.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Do you take equity?</h3>
								<p>We don’t take equity or expect you to pay us back. If we do our job well, once you are well off financially, maybe you’ll join us again as a patron!</p>
							</div>
							<div className={styles.faqText}>
								<h3>What if I can’t attend the whole program? Can I still join?</h3>
								<p>We select people who can commit to being part of the program for its entire duration (3 months + 1 month remote of integration).</p>
							</div>
							<div className={styles.faqText}>
								<h3>If I’m accepted, do I need to move to San Francisco?</h3>
								<p>Temporarily, yes. The program is in-person at the Casa Nautilus. If needed, we’ll help you with your visa.</p>
							</div>
							<div className={styles.faqText}>
								<h3>Is there an application deadline?</h3>
								<p>The application deadline for our first cohort (starting June 1st 2025) is January 20th at midnight PT. We'll announce the selected participants by March 1st. <br/>
								<br/>
If you apply after that deadline, we'll consider you for the following cohort (starting September 1st 2025).</p>
							</div>
							<div className={styles.faqText}>
								<h3>Can I apply with my team?</h3>
								<p>We accept individuals only.</p>
							</div>
							<div className={styles.faqText}>
								<h3>What is the kind of guidance you provide?</h3>
								<p>From weekly group check ins, to supporting your individuals needs (while giving you as much freedom and agency as you want!), you won’t have to figure it all by yourself.</p>
							</div>
            </div>
        </div>
      <Footer />
    </div>
    </>
  );
}

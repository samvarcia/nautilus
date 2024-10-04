import Image from "next/image";
import styles from "./page.module.css";
import Explanation from "./components/Explanation";
import Program from "./components/Program";
import Protegees from "./components/Protegees";
import Patrons from "./components/Patrons";
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
      <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroText}>
          <span className={styles.logoWrapper}>
            <Image src="/logo.png" alt="Nautilus" width={150} height={40} className={styles.logoImage} />
          </span>
          <span>gives you six months to</span>
          <span className={styles.textLine}>
            <span className={styles.feature}>
            explore
            </span>
            <Image src="/image1.png" alt="Explore" width={100} height={60} className={styles.inlineImage} />
            , <span className={styles.feature}>learn</span> 
            <Image src="/image3.png" alt="Learn" width={100} height={60} className={styles.inlineImage} />
            and <br />
          </span>
          <span className={styles.textLine}>
            <span className={styles.feature}>create</span>
            <Image src="/image2.png" alt="Create" width={100} height={60} className={styles.inlineImage} />
            in complete freedom.
          </span>
        </h1>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </section>
      </main>
      <Explanation />
      <Program />
      <Protegees />
      <Patrons />
      <Footer />
    </div>
  );
}

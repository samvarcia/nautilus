import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
      <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroText}>
          <span className={styles.textLine}>
            Nautilus gives you six months to <br />
          </span>
          <span className={styles.textLine}>
             explore
            <Image src="/image1.png" alt="Explore" width={100} height={60} className={styles.inlineImage} />
            , learn
            <Image src="/image3.png" alt="Learn" width={100} height={60} className={styles.inlineImage} />
            and <br />
          </span>
          <span className={styles.textLine}>
            create
            <Image src="/image2.png" alt="Create" width={100} height={60} className={styles.inlineImage} />
            in complete freedom.
          </span>
        </h1>
        <button className={styles.applyButton}>Apply</button>
      </div>
    </section>
      </main>
    </div>
  );
}

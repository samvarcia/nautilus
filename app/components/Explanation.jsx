import styles from './Explanation.module.css';

const Explanation = () => {
  return (
    <section className={styles.explanationSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Nautilus is a six months patronage program.</h2>
        <p className={styles.description}>
          We select a small group of talented individuals from art to science and entrepreneurship.
          We provide you a monthly stipend, guidance, and a community of wonderful people.
          The first 3 months, you stay in our house in San Francisco with the other participants.
          The following 3, you go on your own quest.
        </p>
        <p className={styles.supportText}>
          Through it all, we support you to make the most out of this experience.
        </p>
        <div className={styles.cohortInfo}>
          <span className={styles.cohortText}>NEXT COHORT STARTS ON MARCH 1ST.  APPLY</span>
        </div>
      </div> 
    </section>
  );
};

export default Explanation;
import styles from './Patrons.module.css';

const Patrons = () => {
  return (
    <section className={styles.PatronsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our patrons</h2>
        <p className={styles.description}>
        Behind every talent is a supporter who believes in their journey. Our patrons provide the financial resources you need to elevate your craft.
        </p>
       
      </div>
    </section>
  );
};

export default Patrons;
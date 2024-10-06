import styles from './Patrons.module.css';
import PatronProfileCard from './PatronProfileCard';
import Link from 'next/link';

const Patrons = () => {
  return (
    <section className={styles.PatronsSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our patrons</h2>
        <p className={styles.description}>
        Behind every talent is a supporter who believes in their journey. Our patrons provide the financial resources you need to elevate your craft.
        </p>
        <div className={styles.patrons}>
          {/* <PatronProfileCard 
            imageSrc="/Danielle2.png" 
            patronName="Danielle Strachman" 
          /> */}
          <PatronProfileCard 
            imageSrc="/1517Fund.png" 
            patronName="1517 Fund" 
          />
          <PatronProfileCard 
            imageSrc="/Danielle.png" 
            patronName="Danielle Strachman" 
          />
          <PatronProfileCard 
            imageSrc="/TylerCowen.png" 
            patronName="Tyler Cowen" 
          />
        </div>
        <div className={styles.cta}>
          <button className={styles.applyButton}>
            <Link href="/patrons">
              Become a patron
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Patrons;
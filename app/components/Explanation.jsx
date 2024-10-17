import styles from './Explanation.module.css';
import Link from 'next/link';

const Explanation = () => {
  return (
    <section className={styles.explanationSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get intense with your craft.</h2>
        <p className={styles.description}>
        Nautilus is a six-month program for young and quirky individuals. <br />
        <br />
        We select a small group of bright creatives from art, to science and entrepreneurship, providing them with a monthly stipend, personalized guidance, and a vibrant community of peers. <br />
        <br />
        For the first three months, you live in our San Francisco residence with fellow participants. Then, you venture out on your own, either traveling or going back home for the remaining three months. <br />
        <br />
        Through it all, we support you to make the most out of this experience. <br />
        </p>

        <div className={styles.cohortInfo}>
          <span className={styles.cohortText}>
              <Link 
                  href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
                  target='_blank'
                >
                APPLY TODAY. 
              </Link>
              {'   '} NEXT COHORT ON MARCH 1ST.               
            </span>
        </div>
      </div> 
    </section>
  );
};

export default Explanation;
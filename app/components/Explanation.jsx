import styles from './Explanation.module.css';
import Link from 'next/link';
import { motion } from "framer-motion";

const Explanation = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  return (
    <section className={styles.explanationSection}> 
      <motion.div className={styles.content}             variants={fadeInVariants}
            transition={{ duration: 1.5, delay: 0.5 }}>
        <h2 className={styles.title}>Get intense with your craft.</h2>
        <p className={styles.description}>
        Nautilus is a three-month program for young and quirky individuals. It is designed to give you some childhood wonder back. <br />
        <br />
        We select a small group of bright creatives from art, to science and entrepreneurship, that we receive in our San Francisco residence. <br />
        <br />
        For three months, you live together with your peers, receive a monthly stipend and personalized guidance.<br />
        <br />
        Take a break from the noise of your life to follow your curiosity and master your craft. <br />
        </p>

        <div className={styles.cohortInfo}>
          <span className={styles.cohortText}>
              <Link 
                  href="https://airtable.com/appcXBT6ZoSigrsI2/pagFQikWyq1CAVoSi/form" 
                  target='_blank'
                >
                 APPLY TODAY. 
              </Link>
              {'   '}  FOR COHORT 2 IN SEPTEMBER. 
              <br />             
              SUMMER COHORT CLOSED.
              {'   '} 
            </span>
        </div>
      </motion.div> 
    </section>
  );
};

export default Explanation;
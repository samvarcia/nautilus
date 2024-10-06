import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
            <div className={styles.leftFooter}>
                <div className="">
                    <nav>
                        <ul className="">
                            <li><Link href="/apply" className="">Apply</Link></li>
                            <li><Link href="/about" className="">About the program</Link></li>
                            <li><Link href="/faq" className="">FAQ</Link></li>
                            <li><Link href="/manifesto" className="">Manifesto</Link></li>
                            <li><Link href="/patron" className="">Become a patron</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <ul className="">
                        <li><a href="https://twitter.com/NautilusQuest" target="_blank" rel="noopener noreferrer" className="">Twitter</a></li>
                        <li><a href="https://www.instagram.com/nautilusquest" target="_blank" rel="noopener noreferrer" className="">Instagram</a></li>
                        <li><a href="https://substack.com/nautilusquest" target="_blank" rel="noopener noreferrer" className="">Substack</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p className="">&copy; Nautilus Quest - 2024, all rights reserved</p>
                <div className={styles.footerInput}>
                    <input
                        type="email"
                        placeholder="email"
                        className=""
                    />
                    <button
                        type="submit"
                        className=""
                    >
                        Stay updated
                    </button>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <img
              src="/CREAMLOGO.svg"
              alt="Nautilus Logo"
              
              className={styles.logo}
            />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
            <div className={styles.leftFooter}>
                <div className="">
                    <nav>
                        <ul className="">
                            <li><Link href="https://airtable.com/appcXBT6ZoSigrsI2/pagFQikWyq1CAVoSi/form" 
                  target='_blank' className="">Apply</Link></li>
                            <li><Link href="/program" className="">About the program</Link></li>
                            <li><Link href="/faq" className="">FAQ</Link></li>
                            <li><Link href="/manifesto" className="">Manifesto</Link></li>
                            <li><Link href="/patrons" className="">Become a patron</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <ul className="">
                        <li><a href="https://twitter.com/NautilusQuest" target="_blank" rel="noopener noreferrer" className="">Twitter</a></li>
                        <li><a href="https://www.instagram.com/nautilus.quest" target="_blank" rel="noopener noreferrer" className="">Instagram</a></li>
                        {/* <li><a href="https://substack.com/nautilusquest" target="_blank" rel="noopener noreferrer" className="">Substack</a></li> */}
                    </ul>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p className="">&copy; Nautilus Quest - 2025, all rights reserved</p>
                <SubscribeForm />
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
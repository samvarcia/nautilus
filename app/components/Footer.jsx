import styles from './Footer.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
            <div className={styles.leftFooter}>
                <div className="">
                    <nav>
                        <ul className="">
                            <li><Link href="https://airtable.com/appFK7duZA7g8BPxH/pagd34iOWzjCxeLzB/form" 
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
                        {/* <li><a href="https://www.instagram.com/nautilusquest" target="_blank" rel="noopener noreferrer" className="">Instagram</a></li>
                        <li><a href="https://substack.com/nautilusquest" target="_blank" rel="noopener noreferrer" className="">Substack</a></li> */}
                    </ul>
                </div>
            </div>
            <div className={styles.footerRight}>
                <p className="">&copy; Nautilus Quest - 2024, all rights reserved</p>
                <form
                    action="https://gmail.us22.list-manage.com/subscribe/post?u=3469c3c8b23cbc4638376dfcd&amp;id=7fd3f614d5&amp;f_id=00acd7e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    >
                    <div id="mc_embed_signup_scroll">
                        <div className={styles.inputWrapper}>
                        <input
                            type="email"
                            name="EMAIL"
                            className={`required email ${styles.emailInput}`}
                            id="mce-EMAIL"
                            required
                            placeholder="Your email address"
                        />
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="b_3469c3c8b23cbc4638376dfcd_7fd3f614d5" tabIndex="-1" value="" />
                        </div>
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={styles.subscribeButton}>
                            Subscribe
                        </button>
                        </div>
                    </div>
                    </form>
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
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
       <Script
       src="https://cdn-images.mailchimp.com/embedcode/classic-061523.css"
       strategy="lazyOnload"
     />
     <Script
       src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
       strategy="lazyOnload"
     />
     <Script id="mailchimp-inline-script" strategy="lazyOnload">
       {`
         (function($) {
           window.fnames = new Array();
           window.ftypes = new Array();
           fnames[0]='EMAIL';
           ftypes[0]='email';
           fnames[1]='FNAME';
           ftypes[1]='text';
           fnames[2]='LNAME';
           ftypes[2]='text';
           fnames[3]='ADDRESS';
           ftypes[3]='address';
           fnames[4]='PHONE';
           ftypes[4]='phone';
           fnames[5]='BIRTHDAY';
           ftypes[5]='birthday';
           fnames[6]='COMPANY';
           ftypes[6]='text';
         }(jQuery));
         var $mcj = jQuery.noConflict(true);
       `}
     </Script>
    </footer>
  );
};

export default Footer;
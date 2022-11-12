import React from 'react';
import FacebookLogo from '../assets/facebook_logo.png';
import InstagramLogo from '../assets/instagram_logo.png';
import YoutubeLogo from '../assets/youtube_logo.png';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.contactDesc}>
        <h3 className={styles.contactDesc_text1}>Contact Us</h3>
        <p className={styles.contactDesc_text2}>through emails or our socials</p>
      </div>
      
      <div>
        <div className={styles.contact}>
          <p className={styles.contact_email}>Email: notelovehouston@gmail.com</p>
          <div className={styles.contact_socials}>
            <a href='https://www.facebook.com/kaitlyn.phillips.3705157' target='_blank' rel='noreferrer noopener'>
              <img src={FacebookLogo} alt='Our Facebook' />
            </a>
            <a href='https://www.instagram.com/notelovehouston/' target='_blank' rel='noreferrer noopener'>
              <img src={InstagramLogo} alt='Our Instagram' />
            </a>
            <a href='https://www.youtube.com/channel/UCtDhCGYU9WN_nf5lBXS_PQA/videos?' target='_blank' rel='noreferrer noopener'>
              <img src={YoutubeLogo} alt='Our Youtube Channel' />
            </a>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.copyright}>&copy;2022 by Notelove. We are available in: Sunnyvale, San Jose, Saratoga, Mountain View, Cupertino, Los Altos, Palo Alto, Santa Clara, Boston, Dallas, and Houston</div>
      </div>
    </div>
  );
}
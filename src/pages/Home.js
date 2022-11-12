import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import HeartFigure from '../assets/heart_outline.png';
import DonateBox from '../assets/donate_box.webp';
import Footer from '../components/Footer';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />

      <section className={styles.banner}>
        <h1 className={styles.banner_text}>Note<u>love</u> Houston</h1>
      </section>

      <section className={styles.about}>
        <h3 className={styles.about_text}>Free music education for all</h3>
        <Button text='Learn More &rarr;' link='/about' />
      </section>

      <section className={styles.register}>
        <div className={styles.register_type}>
          <h3 className={styles.register_type_name}>Instructors</h3>
          <p className={styles.register_type_text}>Prospective instructors must be 14-18 years old, play their instrument for more than 2 years, and submit an audition video to be admitted</p>
          <div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfhbMebTT8119st8qhNLApKrnDm89ltA-ZE53uQYQN87T9ZMg/viewform?usp=sf_link' target='_blank' rel='noreferrer noopener'>
              <Button text='Instructor Sign Up' />
            </a>
          </div>
        </div>
        <div>
          <img src={HeartFigure} className={styles.register_image} alt='' />
        </div>
        <div className={styles.register_type}>
          <h3 className={styles.register_type_name}>Students</h3>
          <p className={styles.register_type_text}>Anyone ages 5-17 can take part in free lessons. Just sign up for an instrument and you will be matched with an instructor within 2 weeks.</p>
          <div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSecOBh7SCsQeQCMkBeyLGEZAdpJBd6Ojr89dJne6FV7CCLeRQ/viewform?usp=sf_link' target='_blank' rel='noreferrer noopener'>
                <Button text='Student Sign Up' />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.donate}>
        <div className={styles.donate_imgDiv}>
          <img src={DonateBox} alt='' className={styles.donate_img} />
        </div>
        <div className={styles.donate_info}>
          <h3 className={styles.donate_info_text}>Help us make Notelove better!</h3>
          <div>
            <Button text='Donate Now' link='/donate' />
          </div>
        </div>
      </section>

      <section className={styles.otherChapter}>
        <h3 className={styles.otherChapter_text}>Check out our main chapter</h3>
        <a href='https://www.notelove.org/' target='_blank' rel='noreferrer noopener'>
          <Button text='Notelove Bay Area' />
        </a>
      </section>

      <Footer />
    </div>
  );
}
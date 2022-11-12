import React from 'react';
import Navbar from '../components/Navbar';
import FounderPic from '../assets/omar_shohoud.webp';
import Footer from '../components/Footer';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.About}>
      <Navbar />

      <section className={styles.banner}>
        <h3 className={styles.banner_title}>
          Since 2018, Notelove has been giving out free music lessons to youth across the United States
        </h3>
      </section>

      <section className={styles.mission}>
        <h3 className={styles.mission_title}>Our Mission</h3>
        <div>
          <p className={styles.mission_text}>Notelove is a non-profit that gives free music lessons to youth in California, Massachusetts, and Texas. Our intention is to encourage participation in performing arts, which are often glossed over or underfunded.</p>
          <p className={styles.mission_text}>It can be expensive and difficult to pursue a musical education. Music teachers will typically charge between $50-150/hr for lessons, and school music programs are costly and can cost up to hundreds of dollars per student annually.</p>
          <p className={styles.mission_text}>Music education provides an environment for youth to develop necessary worldly skills, including perseverance, a strong work ethic, and cooperation, among many others. </p>
          <p className={styles.mission_text}>Schools that offer music programs have higher graduation and attendance rates compared to schools that don’t offer music education. Learning music can also improve reasoning, short-term memory, planning, and the ability to focus. </p>
          <p className={styles.mission_text}>Notelove was created to both close the gap between low and high income families, as well as to spread the joy of music to all youth. Join and support our cause today! </p>
        </div>
      </section>

      <section className={styles.origin}>
        <div className={styles.origin_content}>
          <h3 className={styles.origin_title}>How we started</h3>
          <p className={styles.origin_text}>Notelove was started by Omar Shohoud, Homestead High School alumni and current student at the University of Chicago in September 2018. His intention was to give low-income youth in the Bay Area the music education he was able to receive. Since then, Notelove has expanded and now offers lessons to youth regardless of household income.</p>
        </div>
        <div className={styles.origin_imgDiv}>
          <img src={FounderPic} alt='Omar Shohoud' className={styles.origin_img} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
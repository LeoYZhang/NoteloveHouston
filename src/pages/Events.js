import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Events.module.scss';

export default function Events() {
  return (
    <div className={styles.Home}>
      <Navbar />

      <section className={styles.banner}>
        <h1 className={styles.banner_text}>Note<u>love</u> Events</h1>
      </section>

      <section className={styles.events}>
        <p className={styles.events_noEvents}>No events yet. Check back later.</p>
      </section>

      <Footer />
    </div>
  );
}
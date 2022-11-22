import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styles from './Donate.module.scss';

export default function Donate() {
  return (
    <div className={styles.Home}>
      <Navbar />

      <section className={styles.banner}>
        <h1 className={styles.banner_text}>Donate</h1>
      </section>

      <section className={styles.donate}>
        <p className={styles.donate_text}>Please consider donating to Notelove. Every donation counts, and all our funds go towards improving the organization to benefit students and instructors.</p>
        <Button text='Donate' />
      </section>

      <Footer />
    </div>
  );
}
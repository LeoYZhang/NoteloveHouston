import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import styles from './Directors.module.scss';

export default function Directors() {
  return (
    <div className={styles.Directors}>
      <Navbar />

      <div className={styles.list}>
        <ProfileCard name='Raina Qiu' label='Executive Director' />
        <ProfileCard name='Lillian Yang' label='Associate Director' />
        <ProfileCard name='Melinda Yao' label='Recruitment Director' />
        <ProfileCard name='Kaitlyn Phillips' label='Marketing Director' />
        <ProfileCard name='Amanda Yee' label='Finance Director' />
        <ProfileCard name='Leo Zhang' label='Web Director' />
      </div>

      <Footer />
    </div>
  );
}
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../assets/logo_white.png';

export default function Navbar() {
  const [aboutDropState, setAboutDropState] = useState(false);

  return (
    <div className={styles.Navbar}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <img src={logo} alt='Notelove Logo' className={styles.logo} />
        </Link>
      </div>
      <div className={styles.pages}>
        <div className={styles.page}>
          <Link to='/' className={styles.link}>Home</Link>
        </div>

        <div className={styles.page}
          onMouseEnter={() => setAboutDropState(true)}
          onMouseLeave={() => setAboutDropState(false)}>
          <Link to='/about' className={styles.link}>About</Link>
          <div className={(aboutDropState) ? styles.aboutDropdown_open : styles.aboutDropdown_closed}>
            <Link to='/about/faq' className={styles.link}>FAQ</Link>
            <Link to='/about/directors' className={styles.link}>Directors</Link>
            <Link to='/about/instructors' className={styles.link}>Instructors</Link>
          </div>
        </div>

        <div className={styles.page}>
          <Link to='/register' className={styles.link}>Register</Link>
        </div>

        <div className={styles.page}>
          <Link to='/events' className={styles.link}>Events</Link>
        </div>

        <div className={styles.page}>
          <Link to='/donate' className={styles.link}>Support Us</Link>
        </div>
      </div>
    </div>
  );
}
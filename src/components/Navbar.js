import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../assets/logo_white.png';
import Div100vh from 'react-div-100vh';

export default function Navbar() {
  const [aboutDropState, setAboutDropState] = useState(false);
  const [hamburgerState, setHamburgerState] = useState(false);

  if(!hamburgerState)
    document.body.style.overflow = "visible";
  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
    if(!hamburgerState) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }else {
      document.body.style.overflow = "visible";
    }
  }

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

      <div className={`${styles.hamburger} ${hamburgerState && styles.hamburger_active}`} onClick={toggleHamburger}>
          <span className={`${styles.hamburger_line_1} ${styles.hamburger_line}`}></span>
          <span className={`${styles.hamburger_line_2} ${styles.hamburger_line}`}></span>
          <span className={`${styles.hamburger_line_3} ${styles.hamburger_line}`}></span>
      </div>

      <div className={`${styles.mobile} ${!hamburgerState && styles.mobile_hidden}`}>
        <Div100vh className={`${styles.mobile_pages} ${!hamburgerState && styles.mobile_pages_hidden}`}>
          <div className={styles.mobile_page}>
            <Link to='/' className={styles.mobile_link}>Home</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/about' className={styles.mobile_link}>About</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/about/faq' className={styles.mobile_link}>FAQ</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/about/directors' className={styles.mobile_link}>Directors</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/about/instructors' className={styles.mobile_link}>Instructors</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/register' className={styles.mobile_link}>Register</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/events' className={styles.mobile_link}>Events</Link>
          </div>

          <div className={styles.mobile_page}>
            <Link to='/donate' className={styles.mobile_link}>Support Us</Link>
          </div>
        </Div100vh>
      </div>
    </div>
  );
}
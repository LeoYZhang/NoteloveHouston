import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styles from './Register.module.scss';

export default function Register() {
  return (
    <div className={styles.About}>
      <Navbar />

      <section className={styles.banner}>
        <h3 className={styles.banner_title}>
          Register as a student or instructor
        </h3>
      </section>

      <section className={styles.students}>
        <h3 className={styles.students_title}>For Students</h3>
        <ol className={styles.students_steps}>
          <li>Sign up as a student by filling out the Google Form.</li>
          <li>Within 1-2 weeks, we will send a confirmation email and connect you with an instructor.</li>
          <li>Discuss with your instructor to set up meeting times and locations.</li>
        </ol>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSecOBh7SCsQeQCMkBeyLGEZAdpJBd6Ojr89dJne6FV7CCLeRQ/viewform?usp=sf_link' target='_blank' rel='noreferrer noopener'>
          <Button text='Student Sign Up' />
        </a>
      </section>

      <section className={styles.instructors}>
        <h3 className={styles.instructors_title}>For Instructors</h3>
        <ol className={styles.instructors_steps}>
          <li>Sign up as an instructor by filling out the Google Form.</li>
          <li>Submit your audition video through email to notelovehouston@gmail.com.</li>
          <li>Within 1-2 weeks, we will send an email with the results of the audition.</li>
          <li>If you are matched with any students, we will send you an email with their contact details. After this point, it is up to you to contact your student and discuss lesson details.</li>
        </ol>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfhbMebTT8119st8qhNLApKrnDm89ltA-ZE53uQYQN87T9ZMg/viewform?usp=sf_link' target='_blank' rel='noreferrer noopener'>
          <Button text='Instructor Sign Up' />
        </a>
      </section>

      <Footer />
    </div>
  );
}
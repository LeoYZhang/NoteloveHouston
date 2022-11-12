import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Faq.module.scss';

export default function Faq() {
  return (
    <div className={styles.Faq}>
      <Navbar /> 

      <section className={styles.banner}>
        <h1 className={styles.banner_text}>FAQs</h1>
      </section>

      <section className={styles.questions}>
        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>How does Notelove work?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>Students sign up for a music lesson, and we connect them with an instructor in their area. Students and instructors then coordinate times and locations to meet one other through email.</p>
            <p className={styles.questions_paragraph}>If both parties feel comfortable together, they can move lessons to private homes. Otherwise, school band rooms are always a great place to have a lesson, especially if the student is learning piano or a large instrument. Currently, all lessons are being held online through video conferencing apps.</p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>Who can sign up for a lesson?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>Any youth between the ages 5-17 can sign up for a music lesson. However, we will prioritize low-income or disenfranchised families.</p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>Who can apply to become an instructor?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>Instructors must be between the ages 14-18. They must demonstrate proficiency in their instrument, and have at least 2 years of playing experience. Although playing in an ensemble is recommended, it is not necessary.​</p>
            <p className={styles.questions_paragraph}>​Instructors can apply at our home or registration page. </p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>What do Notelove volunteer hours count toward?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>If your high school's service club is partnered with Notelove, you may receive hours for your club. Otherwise, hours can be used for college applications and count toward a President's Volunteer Service Award. Please email us if you need your hours confirmed.</p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>Why haven’t I received a lesson yet?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>We have less instructors available in the fall due to Marching Band and the start of a new school year. However, we receive every lesson request, and we are constantly looking for new instructors. You are automatically put on a waitlist after a lesson sign-up, and we will eventually give you a lesson.</p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>How are lessons structured?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>This is completely up to the student and the instructor! Some students have a musical background, while others may have never played an instrument. The instructor should pick off where the student last left off, and should ensure that the student understands the basics, as well as proper technique. </p>
          </div>
        </div>

        <div className={styles.questions_question}>
          <h4 className={styles.questions_title}>How can I ensure lessons are safe?</h4>
          <div className={styles.questions_answer}>
            <p className={styles.questions_paragraph}>Instructors and students always meet first in public. If either party feels uncomfortable, they can email us and we will assign them a different person.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import styles from './Instructors.module.scss';

export default function Instructors() {
  const list = [
    {name: 'John Doe', label: 'Piano - 10 years', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est qui quo dolorem illum, ut sapiente totam esse enim! Atque, perspiciatis delectus et laudantium ullam quod officiis alias sit!'},
    {name: 'Jane Doe', label: 'Voice - 7 years', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias est qui quo dolorem illum, ut sapiente totam esse enim! Atque, perspiciatis delectus et laudantium ullam quod officiis alias sit!'},
  ];

  return (
    <div className={styles.Directors}>
      <Navbar />

      <div className={styles.list}>
        {list.map((x) => (<ProfileCard name={x.name} label={x.label} description={x.description} />))}
      </div>

      <Footer />
    </div>
  );
}
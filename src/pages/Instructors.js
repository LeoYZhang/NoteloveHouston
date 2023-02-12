import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import styles from './Instructors.module.scss';

export default function Instructors() {
  const currYear = 2023;
  const getExperience = (initial, year) => {
    // initial: number of years listed on form, year: year form was submitted; ex: (6, 2023)
    return initial + (currYear - year);
  }

  const list = [
    {name: 'Joshua Sun', label: `Double Bass - ${getExperience(6, 2023)} years`},
    {name: 'Felix Shen', label: `Cello - ${getExperience(7, 2023)} years`},
    {name: 'Theresa Andrews', label: `Double Bass - ${getExperience(4, 2023)} years`},
    {name: 'Kyle Liu', label: `Flute - ${getExperience(5, 2023)} years`},
    {name: 'Qia (Michael) Yu', label: `Piano - ${getExperience(5, 2023)} years`},
    {name: 'Ali Rad', label: `Piano - ${getExperience(8, 2023)} years`},
    {name: 'Felix Shen', label: `Cello - ${getExperience(7, 2023)} years`},
    {name: 'Edith Chang', label: `Piano - ${getExperience(9, 2023)} years`},
    {name: 'Ryan Qiu', label: `Piano - ${getExperience(9, 2023)} years, Violin - ${getExperience(6, 2023)} years`},
    {name: 'Alexander Fernandez', label: `Tuba - ${getExperience(4, 2023)} years`},
    {name: 'Vivian Lee', label: `Viola - ${getExperience(5, 2023)} years`},
    {name: 'Isabelle Xue', label: `Viola`},
    {name: 'Myriam Acton', label: `Viola - ${getExperience(5, 2023)} years`},
    {name: 'Rynn Ma', label: `Violin - ${getExperience(7, 2023)} years`},
    {name: 'Amanda Li', label: `Violin - ${getExperience(9, 2023)} years`},
    {name: 'Henry Xu', label: `Violin - ${getExperience(7, 2023)} years`},
    {name: 'Elfi Van Kuilenburg', label: `Violin - ${getExperience(6, 2023)} years`},
    {name: 'Nova Mu', label: `Voice, Piano, Ukulele`},
  ];
  list.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className={styles.Directors}>
      <Navbar />

      <div className={styles.list}>
        {list.map((x) => (<ProfileCard name={x.name} label={x.label} description={x.description} disabled />))}
      </div>

      <Footer />
    </div>
  );
}
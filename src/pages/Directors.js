import React from 'react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';
import styles from './Directors.module.scss';

// images
import IMG1 from '../assets/profiles/directors/1.jpg';
import IMG3 from '../assets/profiles/directors/3.jpg';
import IMG4 from '../assets/profiles/directors/4.jpg';
import IMG5 from '../assets/profiles/directors/5.jpg';

export default function Directors() {
  return (
    <div className={styles.Directors}>
      <Navbar />

      <div className={styles.list}>
        <ProfileCard name='Raina Qiu' label='Executive Director' photoSrc={IMG1} description='Raina is currently a senior at Glenda Dawson High School. She has been playing the violin for 9 years. Throughout these years, she has stayed involved in music through the Bay Area Youth Symphony and the Houston Youth Symphony, as well as a community service music club she founded in high school. Additionally, she has placed in TMEA Region 19 Symphony Orchestra since middle school and recorded for TMEA All-State throughout high school. Outside of music, Raina enjoys cooking, arts and crafts, and spending time with her family.'/>
        <ProfileCard name='Lillian Yang' label='Associate Director' description='Lillian is currently a sophomore at Clements High School. She has been playing the piano for 12 years, and the double bass for 5 years. She is involved in Clement&#39;s varsity Sinfonia orchestra as a bassist and has been active in orchestra all throughout middle school. Additionally, she has placed in TMEA Region 13 String Orchestra and has recorded for TMEA All-State. Her piano accomplishments include annually competing and receiving top scores in the Rice Gold Cup Festival, and receiving a First Place with Special Honors award in the 2018 Sonatina and Sonata International Youth Piano Competition presented by the Fryderyk Chopin Society Of Texas, giving her the opportunity to perform a piano solo at Carnegie Hall. In her free time, Lillian enjoys building legos and puzzles or taking walks at night.' />
        <ProfileCard name='Melinda Yao' label='Recruitment Director' photoSrc={IMG3} description='Melinda is currently a junior at Glenda Dawson High School. She has been playing the flute for 6 years. She is actively involved in her school&#39;s band program, where she serves as a flute section leader in the marching band and a member of the wind ensemble. She is also a member of the Houston Youth Symphony, playing both flute and piccolo in the Symphony Orchestra. Additionally, she placed into the TMEA Region 19 Band and Orchestra and advanced to the area level. Outside of music, she enjoys going for walks outside and spending time with her two cats.' />
        <ProfileCard name='Kaitlyn Phillips' label='Marketing Director' photoSrc={IMG4} description='Kaitlyn is currently a senior at Glenda Dawson High School. She has been playing the Bb clarinet for 7 years. She has been a part of Dawson’s wind ensemble for all four years of high school and was a section leader in the marching band. Additionally, she has placed into the TMEA Region 19 Band for 6 consecutive years. Outside of music, Kaitlyn enjoys reading, watching movies, baking, and playing games with her family and friends.' />
        <ProfileCard name='Amanda Yee' label='Finance Director' photoSrc={IMG5} description='Amanda is currently a junior at Glenda Dawson High School. She has been playing the flute for 6 years and is a member of the Houston Youth Symphony. She is an active participant in her school&#39;s band, playing in the wind ensemble during concert season and being a flute section leader during marching season. Additionally, she is a member of the Tri-M Music Honor Society and orchestra club at her school. She placed into the TMEA Region 19 Band and has advanced to the area level throughout her high school career. Some of her additional hobbies include reading and figure skating.' />
        <ProfileCard name='Leo Zhang' label='Web Director' description='Leo is currently a junior at Clements High School. He has been playing the piano for 11 years and the violin for 7 years. He has been part of the Clements varsity orchestra throughout high school, as well as the Symphony Region Orchestra in middle and high school. Additionally, he has won the Grand Prix award for the 2022 Sonata and Sonatina competition in Corpus Christi. In his free time he likes to play soccer and make cool stuff with code.' />
      </div>

      <Footer />
    </div>
  );
}
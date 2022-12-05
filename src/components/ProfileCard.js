import { React, useState } from 'react';
import styles from './ProfileCard.module.scss';
import BlankProfile from '../assets/profiles/blank.png';

export default function ProfileCard({ name, photoSrc, label, description }) {
  const ProfilePic = photoSrc || BlankProfile;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={open ? styles.hidden : styles.compact} onClick={() => setOpen(true)}>
        <div>
          <img src={ProfilePic} alt={name} className={styles.compact_img}/>
        </div>
        <div className={styles.compact_text}>
          <h4 className={styles.compact_name}>{name}</h4>
          <p className={styles.compact_label}>{label}</p>
        </div>
      </div>
      <div className={open ? styles.expanded : styles.hidden}>
        <div className={styles.expanded_container}>
          <div className={styles.expanded_imgContainer}>
            <img src={ProfilePic} alt={name} className={styles.expanded_img} />
          </div>
          <div className={styles.expanded_text}>
            <h4 className={styles.expanded_name}>{name}</h4>
            <p className={styles.expanded_label}>{label}</p>
            <p className={styles.expanded_desc}>{description}</p>
          </div>
          <div className={styles.expanded_close} onClick={() => setOpen(false)}>x</div>
        </div>
      </div>
    </div>
  );
}

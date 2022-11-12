import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export default function Button({ text, link }) {
  if(link) {
    return (
      <Link to={link}>
        <button className={styles.Button}>{text}</button>
      </Link>
    )
  }else {
    return (
      <button className={styles.Button}>{text}</button>
    );
  }
}
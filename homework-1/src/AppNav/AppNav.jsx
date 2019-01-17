import React from 'react';
import styles from './AppNav.module.css';

const AppNav = () => (
  <ul className={styles.list}>
    <li className={styles.item}>Menu</li>
    <li className={styles.item}>About</li>
    <li className={styles.item}>Contact</li>
    <li className={styles.item}>Delivery</li>
  </ul>
);

export default AppNav;

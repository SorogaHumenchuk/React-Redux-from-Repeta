import React from 'react';
import styles from './UserMenu.module.css';
import avatar from './avatar.jpg';

const UserMenu = () => (
  <div className={styles.userMenu}>
    <span className={styles.name}>Statham Jason</span>
    <img className={styles.photo} src={avatar} alt="avatar" />
    <div className={styles.aboutUser}>
      <ul>
        <li>Account</li>
        <li>Order history</li>
        <li>Meal planner</li>
      </ul>
      <button type="button">Logout</button>
    </div>
  </div>
);

export default UserMenu;

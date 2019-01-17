import React from 'react';
import logoImg from './logoImg.png';
import styles from './Logo.module.css';

const Logo = () => <img className={styles.image} src={logoImg} alt="logo" />;

export default Logo;

import React from 'react';
import styles from './Order.module.css';

const Order = ({ date, price, address, rating }) => (
  <React.Fragment>
    <td className={styles.td}>{date}</td>
    <td className={styles.td}>{price}</td>
    <td className={styles.td}>{address}</td>
    <td className={styles.td}>{rating}</td>
  </React.Fragment>
);

export default Order;

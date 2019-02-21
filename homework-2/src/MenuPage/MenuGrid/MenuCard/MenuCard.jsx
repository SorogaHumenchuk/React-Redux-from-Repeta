import React from 'react';
import styles from './MenuCard.module.css';

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <img className={styles.photo} src={image} alt={name} />
    <p className={styles.price}>{price} грн</p>
    <div className={styles.actions}>
      <button type="button" onClick={onShowMoreInfo}>
        Больше инфо
      </button>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  </div>
);

export default MenuCard;

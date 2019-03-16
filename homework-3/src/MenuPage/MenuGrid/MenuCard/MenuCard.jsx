import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MenuCard.module.css'
import routes from '../../../configs/routes'

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => (
  <div className={styles.container}>
    <h2 className={styles.name}>{name}</h2>
    <img className={styles.photo} src={image} alt={name} />
    <p className={styles.price}>{price} грн</p>
    <div className={styles.actions}>
      <NavLink to={routes.MENU_ITEM}>Больше инфо</NavLink>
      <button onClick={onDelete}>Удалить</button>
    </div>
  </div>
)

export default MenuCard

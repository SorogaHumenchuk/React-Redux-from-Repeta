import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'

const AppNav = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} key={item.name}>
        <NavLink className={styles.link} to={item.path}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
)

export default AppNav

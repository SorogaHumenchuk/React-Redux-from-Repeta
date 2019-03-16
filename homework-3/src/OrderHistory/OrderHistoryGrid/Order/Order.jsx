import React from 'react'
import styles from './Order.module.css'

const Order = ({ date, price, address, rating, onDelete, onGetInfo }) => (
  <>
    <td className={styles.td}>{date}</td>
    <td className={styles.td}>{price}</td>
    <td className={styles.td}>{address}</td>
    <td className={styles.td}>{rating}</td>
    <td className={styles.td}>
      <button onClick={onGetInfo} type="button">
        Больше...
      </button>
    </td>
    <td className={styles.td}>
      <button onClick={onDelete} type="button">
        Удалить
      </button>
    </td>
  </>
)

export default Order

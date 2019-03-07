import React from "react";
import styles from "./Order.module.css";

const Order = ({
  date,
  price,
  address,
  rating,
  onDelete,
  onGetInfo,
  onOpenModal
}) => (
  <>
    <td className={styles.td}>{date}</td>
    <td className={styles.td}>{price}</td>
    <td className={styles.td}>{address}</td>
    <td className={styles.td}>{rating}</td>
    <td className={styles.td}>
      <button onClick={onOpenModal} type="button">
        Больше...
      </button>
    </td>
    <td className={styles.td}>
      <button onClick={onDelete && onGetInfo} type="button">
        Удалить
      </button>
    </td>
  </>
);

export default Order;

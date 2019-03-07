import React from "react";
import MenuCard from "./MenuCard/MenuCard";
import styles from "./MenuGrid.module.css";

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul className={styles.menuList}>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          image={item.image}
          price={item.price}
          onDelete={() => onDelete(item.id)}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;

import React from "react";
import styles from "./DropDown.module.css";

const DropDown = () => (
  <>
    <div className={styles.aboutUser}>
      <ul>
        <li>Account</li>
        <li>Order history</li>
        <li>Meal planner</li>
      </ul>
      <button type="button">Logout</button>
    </div>
  </>
);

export default DropDown;

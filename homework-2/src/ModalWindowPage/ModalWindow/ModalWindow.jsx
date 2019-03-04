import React from "react";
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ onClose }) => (
  <div className={styles.backdrop}>
    <div className={styles.modal}>
      <h2>Modal Window</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ipsum
        obcaecati maiores ipsam harum distinctio quia, soluta voluptatibus iste
        deserunt consectetur totam quas quidem, aliquid voluptatem nisi, nobis
        expedita quis?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Nihil ipsum obcaecati maiores ipsam harum distinctio quia, soluta
        voluptatibus iste deserunt consectetur totam quas quidem, aliquid
        voluptatem nisi, nobis expedita quis?
      </p>
      <button className={styles.btn__close} type="button" onClick={onClose}>
        X
      </button>
    </div>
  </div>
);

export default ModalWindow;

import React, { Component } from "react";
import styles from "./ModalWindow.module.css";

export default class ModalWindow extends Component {
  onOpen = () => {
    console.log("open");
  };

  onClose = () => {
    console.log("close");
  };

  render() {
    const { onClose } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <h2>Modal Window</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nihil ipsum obcaecati maiores ipsam
            harum distinctio quia, soluta voluptatibus iste deserunt consectetur
            totam quas quidem, aliquid voluptatem nisi, nobis expedita quis?
          </p>
          <button className="btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

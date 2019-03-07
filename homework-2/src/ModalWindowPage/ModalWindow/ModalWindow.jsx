import React, { Component, createRef } from "react";
import styles from "./ModalWindow.module.css";

export default class ModalWindow extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
    window.addEventListener("keydown", this.handleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
    window.removeEventListener("keydown", this.handleEscapeClick);
  }

  handleWindowClick = ({ target }) => {
    const { onClose } = this.props;
    if (this.modalRef.current === target) {
      onClose();
    }
  };

  handleEscapeClick = ({ keyCode }) => {
    const { onClose } = this.props;
    if (keyCode === 27) {
      onClose();
    }
  };

  render() {
    const { onClose } = this.props;
    return (
      <div className={styles.backdrop} ref={this.modalRef}>
        <div className={styles.modal}>
          <h2>Modal Window</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nihil ipsum obcaecati maiores ipsam
            harum distinctio quia, soluta voluptatibus iste deserunt consectetur
            totam quas quidem, aliquid voluptatem nisi, nobis expedita
            quis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>
          <button className={styles.btn__close} type="button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component, createRef } from "react";
import styles from "./ModalWindow.module.css";

export default class ModalWindow extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.props;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { onClose } = this.props;
    const isTargetInsideModal = this.modalRef.current.contains(e.target);
    const { isModalOpen } = this.props;
    if (!isModalOpen && !isTargetInsideModal) {
      onClose();
    }
  };

  render() {
    const { onClose } = this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal} ref={this.modalRef}>
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

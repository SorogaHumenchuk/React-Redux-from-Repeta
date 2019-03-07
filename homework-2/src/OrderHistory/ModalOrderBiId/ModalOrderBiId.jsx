import React, { Component, createRef } from "react";
import styles from "./ModalOrderBiId.module.css";

export default class ModalOrderById extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = ({ target }) => {
    const { onCloseModal } = this.props;
    if (this.backdropRef.current === target) {
      onCloseModal();
    }
  };

  render() {
    const { onCloseModal, order } = this.props;
    return (
      <div className={styles.backdrop} ref={this.backdropRef}>
        <div className={styles.modal}>
          <p>Жареный рис с яйцом по‑китайски</p>
          {console.log(order)}
          <button
            type="button"
            className={styles.btn__close}
            onClick={onCloseModal}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

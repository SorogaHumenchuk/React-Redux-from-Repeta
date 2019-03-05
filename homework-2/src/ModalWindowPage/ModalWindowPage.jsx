import React, { Component } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";

export default class ModalWindowPage extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  onClose = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <button type="button" onClick={this.openModal}>
          OpenModal
        </button>
        {isModalOpen && (
          <ModalWindow onClose={this.onClose} isModalOpen={isModalOpen} />
        )}
      </>
    );
  }
}

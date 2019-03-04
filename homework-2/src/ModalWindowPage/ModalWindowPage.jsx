import React, { Component } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";

export default class ModalWindowPage extends Component {
  state = {
    isModalOpen: false
  };

  render() {
    const { isModalOpen } = this.state;
    return <>{isModalOpen && ModalWindow}</>;
  }
}

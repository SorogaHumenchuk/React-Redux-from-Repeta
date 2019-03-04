import React, { Component, createRef } from "react";
import DropDown from "./DropDown/DropDown";
import styles from "./UserMenu.module.css";
import avatar from "./avatar.jpg";

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false
  };

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target
    );
    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.toggleDropDown();
    }
  };

  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen
    }));
  };

  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div
        onClick={this.toggleDropDown}
        className={styles.userMenu}
        ref={this.containerRef}
      >
        <span className={styles.name}>Statham Jason</span>
        <img className={styles.photo} src={avatar} alt="avatar" />
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}

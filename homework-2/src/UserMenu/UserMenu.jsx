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

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target
    );
    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropDown();
    }
  };

  // toggleDropDown = () => {
  //   this.setState(state => ({
  //     isDropDownOpen: !state.isDropDownOpen
  //   }));
  // };

  openDropDown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropDown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div
        onClick={this.openDropDown}
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

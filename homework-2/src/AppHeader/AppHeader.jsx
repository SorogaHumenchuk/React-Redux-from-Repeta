import React from "react";
import Logo from "./Logo/Logo";
import AppNav from "./AppNav/AppNav";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppHeader.module.css";

const AppHeader = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <Logo />
      <AppNav />
      <UserMenu />
    </div>
  </header>
);

export default AppHeader;

import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import styles from './Auth.module.css';

const Auth = () => (
  <div className={styles.container}>
    <SignIn />
    <SignUp />
  </div>
);
export default Auth;

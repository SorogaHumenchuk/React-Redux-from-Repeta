import React, { Component } from 'react';
import styles from './SignIn.module.css';

const SIGN_IN = {
  inEmail: '',
  inPass: '',
};

export default class SignIn extends Component {
  state = { ...SIGN_IN };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...SIGN_IN });
  };

  render() {
    const { inEmail, inPass } = this.state;

    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit} className={styles.signIn}>
          <input
            type="email"
            name="inEmail"
            value={inEmail}
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="inPass"
            value={inPass}
            placeholder="pass"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

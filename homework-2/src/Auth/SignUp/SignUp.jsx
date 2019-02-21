import React, { Component } from 'react';
import styles from './SignUp.module.css';

const SIGN_UP = {
  upName: '',
  upEmail: '',
  upPhone: '',
  upPass: '',
};

export default class SignUp extends Component {
  state = { ...SIGN_UP };

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
    this.setState({ ...SIGN_UP });
  };

  render() {
    const { upName, upEmail, upPhone, upPass } = this.state;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit} className={styles.signUp}>
          <input
            type="text"
            name="upName"
            value={upName}
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="upEmail"
            value={upEmail}
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="upPhone"
            value={upPhone}
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="upPass"
            value={upPass}
            placeholder="pass"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Sign Up as {upName}
          </button>
        </form>
      </div>
    );
  }
}

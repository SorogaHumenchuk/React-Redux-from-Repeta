import React, { Component } from 'react';
import styles from './MenuComents.module.css';

export default class MenuComents extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <form>
          <textarea name="" id="" cols="30" rows="10" />
          <select name="" id="" />
        </form>
      </div>
    );
  }
}

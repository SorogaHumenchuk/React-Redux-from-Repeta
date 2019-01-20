import React, { Component } from 'react';
import styles from './MenuComents.module.css';

export default class MenuComents extends Component {
  state = {
    rating: '',
    coment: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { coment, rating } = this.state;
    const { onSubmit } = this.props;
    onSubmit(coment, rating);
    this.setState({
      rating: '',
      coment: '',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { rating, coment } = this.state;
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="coment"
            value={coment}
            cols="40"
            rows="2"
            placeholder="Оставьте свой коментарий"
            onChange={this.handleChange}
          />
          <select name="rating" value={rating} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="button" onClick={this.handleSubmit}>
            Оставить коментарий
          </button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react'
import styles from './CreateOrder.module.css'

const uuidv4 = require('uuid/v4')

export default class CreateOrder extends Component {
  state = {
    newOrder: {},
    price: '',
    address: '',
    rating: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      price: '',
      address: '',
      rating: '',
    })
    const { price, address, rating } = this.state
    const { onSubmit } = this.props
    const newItem = {
      price,
      address,
      rating,
      id: uuidv4(),
      date: Date.now(),
    }
    onSubmit(newItem)
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  render() {
    const { rating, address, price } = this.state
    return (
      <>
        <div className={styles.container}>
          <h2>Создать заказ</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="price"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="address"
              value={address}
              placeholder="adress"
              onChange={this.handleChange}
            />
            <label>
              Рейтинг
              <select name="rating" value={rating} onChange={this.handleChange}>
                <option value="0">0</option>
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
            </label>
            <button type="submit" onClick={this.handleAddOrderItem}>
              Сделать заказ
            </button>
          </form>
        </div>
      </>
    )
  }
}

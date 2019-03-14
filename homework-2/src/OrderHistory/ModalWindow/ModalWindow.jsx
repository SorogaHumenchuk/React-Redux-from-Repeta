import React, { Component, createRef } from 'react'
import * as API from '../../services/api'
import styles from './ModalWindow.module.css'

export default class ModalWindow extends Component {
  backdropRef = createRef()

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick)
  }

  handleWindowClick = ({ target }) => {
    const { onCloseModal } = this.props
    if (this.backdropRef.current === target) {
      onCloseModal()
    }
  }

  getOrderItemById = id => {
    API.getOrderItemById(id)
  }

  render() {
    const { onCloseModal, order } = this.props
    return (
      <div className={styles.backdrop} ref={this.backdropRef}>
        <div className={styles.modal}>
          <ul>
            <li>{order.address}</li>
            <li>{order.price}</li>
            <li>{order.rating}</li>
            <li>{order.date}</li>
          </ul>
          <button type="button" className={styles.btn__close} onClick={onCloseModal}>
            X
          </button>
        </div>
      </div>
    )
  }
}

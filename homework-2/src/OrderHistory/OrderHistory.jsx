import React, { Component } from 'react'
import * as API from '../services/api'
import OrderHistoryGrid from './OrderHistoryGrid/OrderHistoryGrid'
import styles from './OrderHistory.module.css'
import ModalWindow from './ModalWindow/ModalWindow'
import Loading from '../Loading/Loading'

export default class OrderHistory extends Component {
  state = {
    isLoading: false,
    orders: [],
    isModalOpenOrderInfo: false,
    order: {},
  }

  componentDidMount() {
    API.getOrderHistory().then(orders => this.setState({ orders }))
  }

  componentDidUpdate(prevProps, prevState) {
    const { isLoading } = this.state
    if (prevState.isLoading === isLoading) {
      this.setState({ isLoading: true })
      console.log(isLoading)
    }
  }

  handleDeleteOrder = id => {
    API.deleteOrderItem(id).then(
      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id),
      })),
    )
  }

  openModalOrderInfo = () => {
    this.setState({
      isModalOpenOrderInfo: true,
    })
  }

  handleGetOrderInfo = id => {
    API.getOrderItemById(id).then(res =>
      this.setState({
        order: res,
        isLoading: false,
      }),
    )
    this.openModalOrderInfo()
  }

  closeModalOrderInfo = () => {
    this.setState({
      isModalOpenOrderInfo: false,
    })
  }

  render() {
    const { orders, isModalOpenOrderInfo, order, isLoading } = this.state
    return (
      <>
        <table className={styles.table}>
          <OrderHistoryGrid
            orders={orders}
            onGetInfo={this.handleGetOrderInfo}
            onDelete={this.handleDeleteOrder}
          />
        </table>
        {isModalOpenOrderInfo && (
          <ModalWindow onCloseModal={this.closeModalOrderInfo} order={order} />
        )}
        {isLoading && <Loading />}
      </>
    )
  }
}

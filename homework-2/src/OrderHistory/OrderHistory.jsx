import React, { Component } from 'react'
import * as API from '../services/api'
import OrderHistoryGrid from './OrderHistoryGrid/OrderHistoryGrid'
import styles from './OrderHistory.module.css'
import ModalWindow from './ModalWindow/ModalWindow'
import Loading from '../Loading/Loading'
import CreateOrder from './CreateOrder/CreateOrder'

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
    const nextIsLoading = this.state.isLoading
    const prevIsLoading = prevState.isLoading
    if (prevIsLoading !== nextIsLoading) {
      this.setState({ isLoading: true })
    }
  }

  handleAddOrderItem = item => {
    API.addOrderItem(item).then(newItem =>
      this.setState(state => ({
        orders: [newItem, ...state.orders],
      })),
    )
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
        isLoading: false,
        order: res,
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
        <CreateOrder onSubmit={this.handleAddOrderItem} />
        <table className={styles.table}>
          <OrderHistoryGrid
            orders={orders}
            onGetInfo={this.handleGetOrderInfo}
            onDelete={this.handleDeleteOrder}
          />
        </table>
        {isLoading ? (
          <Loading />
        ) : (
          isModalOpenOrderInfo && (
            <ModalWindow onCloseModal={this.closeModalOrderInfo} order={order} />
          )
        )}
      </>
    )
  }
}

import React, { Component } from "react";
import * as API from "../services/api";
import OrderHistoryGrid from "./OrderHistoryGrid/OrderHistoryGrid";
import styles from "./OrderHistory.module.css";
import ModalOrderById from "./ModalOrderBiId/ModalOrderBiId";

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isModalOpenOrderInfo: false,
    order: {}
  };

  componentDidMount() {
    API.getOrderHistory().then(orders => this.setState({ orders }));
  }

  handleDeleteOrder = id => {
    API.deleteOrderItem(id).then(
      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id)
      }))
    );
  };

  handleGetOrderInfo = id => {
    API.getOrderItemById(id).then(res =>
      this.setState({
        order: res
      })
    );
  };

  openModalOrderInfo = () => {
    this.setState({
      isModalOpenOrderInfo: true
    });
    this.handleGetOrderInfo();
  };

  closeModalOrderInfo = () => {
    this.setState({
      isModalOpenOrderInfo: false
    });
  };

  render() {
    const { orders, isModalOpenOrderInfo, order } = this.state;
    return (
      <>
        <table className={styles.table}>
          <OrderHistoryGrid
            orders={orders}
            onGetInfo={this.handleGetOrderInfo}
            onOpenModal={this.openModalOrderInfo}
            onDelete={this.handleDeleteOrder}
          />
        </table>
        {isModalOpenOrderInfo && (
          <ModalOrderById
            order={order}
            onCloseModal={this.closeModalOrderInfo}
          />
        )}
      </>
    );
  }
}

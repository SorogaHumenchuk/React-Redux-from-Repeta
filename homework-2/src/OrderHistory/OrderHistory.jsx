import React, { Component } from "react";
import * as API from "../services/api";
import OrderHistoryGrid from "./OrderHistoryGrid/OrderHistoryGrid";
import styles from "./OrderHistory.module.css";

export default class OrderHistory extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    API.getOrderHistory().then(orders => this.setState({ orders }));
  }

  render() {
    const { orders } = this.state;
    return (
      <table className={styles.table}>
        <OrderHistoryGrid orders={orders} />
      </table>
    );
  }
}

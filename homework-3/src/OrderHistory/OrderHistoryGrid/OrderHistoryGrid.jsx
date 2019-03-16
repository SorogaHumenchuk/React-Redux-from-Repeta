import React from 'react'
import Order from './Order/Order'

const OrderHistoryGrid = ({ orders, onDelete, onGetInfo }) => (
  <React.Fragment>
    <thead>
      <tr>
        <th>Дата</th>
        <th>Цена</th>
        <th>Адрксс</th>
        <th>Рейтинг</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <Order
            date={order.date}
            price={order.price}
            address={order.address}
            rating={order.rating}
            onDelete={() => onDelete(order.id)}
            onGetInfo={() => onGetInfo(order.id)}
          />
        </tr>
      ))}
    </tbody>
  </React.Fragment>
)

export default OrderHistoryGrid

import axios from "axios";

const menuUrl = "http://localhost:3004/menu";
const ORDER_HISTORY_URL = "http://localhost:3004/orderHistory";

const getAllMenuItems = () =>
  axios.get(menuUrl).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${menuUrl}/${id}`).then(response => console.log(response.data));

const deleteMenuItem = id =>
  axios.delete(`${menuUrl}/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post(menuUrl, item).then(response => response.data);

const getOrderHistory = () =>
  axios.get(ORDER_HISTORY_URL).then(response => response.data);

const deleteOrderItem = id =>
  axios
    .delete(`${ORDER_HISTORY_URL}/${id}`)
    .then(response => response.status === 200);

const getOrderItemById = id =>
  axios.get(`${ORDER_HISTORY_URL}/${id}`).then(response => response.data);

export {
  getAllMenuItems,
  getMenuItemById,
  deleteMenuItem,
  addMenuItem,
  getOrderHistory,
  deleteOrderItem,
  getOrderItemById
};

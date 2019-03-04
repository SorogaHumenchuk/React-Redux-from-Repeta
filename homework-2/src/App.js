import React from "react";
import AppHeader from "./AppHeader/AppHeader";
import MenuPage from "./MenuPage/MenuPage";
import OrderHistory from "./OrderHistory/OrderHistory";
import Auth from "./Auth/Auth";
import MenuComentsApp from "./MenuComentsApp/MenuComentsApp";
import ModalWindowPage from "./ModalWindowPage/ModalWindowPage";

const App = () => (
  <div>
    <AppHeader />
    <ModalWindowPage />
    <MenuPage />
    <OrderHistory />
    <Auth />
    <MenuComentsApp />
  </div>
);

export default App;

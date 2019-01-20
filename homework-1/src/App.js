import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import MenuPage from './MenuPage/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory';
import Auth from './Auth/Auth';
import MenuComentsApp from './MenuComentsApp/MenuComentsApp';

const App = () => (
  <div>
    <AppHeader />
    <MenuPage />
    <OrderHistory />
    <Auth />
    <MenuComentsApp />
  </div>
);

export default App;

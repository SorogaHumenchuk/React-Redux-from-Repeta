import React from 'react';
import AppHeader from './AppHeader/AppHeader';
import MenuPage from './MenuPage/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory';
import Auth from './Auth/Auth';
import MenuComents from './MenuComents/MenuComents';

const App = () => (
  <div>
    <AppHeader />
    <MenuPage />
    <OrderHistory />
    <Auth />
    <MenuComents />
  </div>
);

export default App;

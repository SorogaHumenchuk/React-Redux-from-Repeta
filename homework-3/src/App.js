import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'

import AppHeader from './AppHeader/AppHeader'
import MenuPage from './MenuPage/MenuPage'
import Auth from './Auth/Auth'
import MenuComentsApp from './MenuComentsApp/MenuComentsApp'
import OrderHistory from './OrderHistory/OrderHistory'

import routes from './configs/routes'

const App = () => (
  <div>
    <AppHeader />

    <Switch>
      <Route path={routes.MENU} component={MenuPage} />
      <Route path={routes.ORDER_HISTORY} component={OrderHistory} />
      <Route path={routes.CONTACT} component={MenuComentsApp} />
      <Route path={routes.AUTH} component={Auth} />
    </Switch>
  </div>
)

export default App

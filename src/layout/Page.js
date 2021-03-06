import React from 'react';
import { Switch, Route } from 'react-router-dom'
import menuData from '../data/menuData'

import ErrorPage from '../pages/ErrorPage'
import Header from '../pages/Header'
import News from '../pages/News'
import Women from '../pages/Women'
import Men from '../pages/Men'
import ItemPage from '../pages/ItemPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

const menuDataComponents = [<Header />, <News />, <Women />, <Men />]


const Page = () => {
  const menuDataList = menuData.map(item => (
    <Route path={item.path} key={item.id} exact>{menuDataComponents[item.id]}</Route>
  ))
  return (
    <div className='main-content'>
      <Switch>
        {menuDataList}
        <Route path={`/shop/items/:id`}><ItemPage /></Route>
        <Route path='/cart'><CartPage /></Route>
        <Route path='/checkout'><CheckoutPage /></Route>
        <ErrorPage />

      </Switch>
    </div>
  );
}

export default Page
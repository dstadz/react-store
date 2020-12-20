import React  from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { userState } from '../utils/store'

import HomePage from '../pages/HomePage/HomePage'
import ShopPage from '../pages/ShopPage/ShopPage'
import SignInUpPage from '../pages/SignInUpPage/SignInUpPage'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'



const Routes = () => {
  const user = useRecoilValue(userState)
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route
        exact
        path='/signin'
        render={() =>
          user ? <Redirect to='/' /> : <SignInUpPage />
        }
      />
    </Switch>
  )
}
export default Routes

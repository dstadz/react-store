import React  from "react";
// import { Route } from "react-router-dom";

import Home from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import SignInUpPage from '../pages/SignInUpPage'
// import Checkout from '../Pages/Checkout'

const routes = {
  '/': () => <Home />,
  '/shop': () => <ShopPage />,
  '/signin': () => <SignInUpPage/>,
  // '/checkout': () => <Checkout/>,
}
export default routes

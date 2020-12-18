import React  from "react";
// import { Route } from "react-router-dom";

import Home from '../pages/HomePage/HomePage'
import ShopPage from '../pages/ShopPage/ShopPage'
import SignInUpPage from '../pages/SignInUpPage/SignInUpPage'
// import Checkout from '../Pages/Checkout'

const routes = {
  '/': () => <Home />,
  '/shop': () => <ShopPage />,
  '/signin': () => <SignInUpPage/>,
  // '/checkout': () => <Checkout/>,
}
export default routes

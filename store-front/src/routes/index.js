import React  from "react";
// import { Route } from "react-router-dom";

import Home from '../pages/homepage'
import ShopPage from '../pages/shop'
// import SignInUpPage from '../Pages/SignInUpPage'
// import Checkout from '../Pages/Checkout'

const routes = {
  '/': () => <Home />,
  '/shop': () => <ShopPage />,
  // '/signin': () => <SignInUpPage/>,
  // '/checkout': () => <Checkout/>,
}
export default routes

import React  from "react";
import CollectionPreview from "../Components/CollectionPreview/CollectionPreview";

import Home from '../pages/HomePage/HomePage'
import ShopPage from '../pages/ShopPage/ShopPage'
import SignInUpPage from '../pages/SignInUpPage/SignInUpPage'

const routes = {
  '/': () => <Home />,
  '/shop': () => <ShopPage />,
  '/signin': () => <SignInUpPage/>,
  '/shop/:id': (id) => <CollectionPreview id={id} />,
  // '/checkout': () => <Checkout/>,
}
export default routes

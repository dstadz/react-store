import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { userState } from '../utils/store'
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'
import Spinner from '../Components/Spinner/Spinner'
const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('../pages/ShopPage/ShopPage'))
const SignInUpPage = lazy(() => import('../pages/SignInUpPage/SignInUpPage'))
const CheckoutPage = lazy(() => import('../pages/CheckoutPage/CheckoutPage'))



const Routes = () => {
  const user = useRecoilValue(userState)
  return (
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
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
        </Suspense>
      </ErrorBoundary>
    </Switch>
  )
}
export default Routes

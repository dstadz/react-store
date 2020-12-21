import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartListState, totalPriceState } from '../../utils/store'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './styles'



const CheckoutPage = () => {
  const cartList = useRecoilValue(cartListState)
  const total = useRecoilValue(totalPriceState)
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartList.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      {/* <StripeCheckoutButton price={total} /> */}
    </CheckoutPageContainer>
  );
}

export default CheckoutPage

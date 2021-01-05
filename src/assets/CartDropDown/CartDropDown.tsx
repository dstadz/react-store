import React from 'react'
import { useHistory } from "react-router-dom";
import CartItem from '../../Components/CartItem/Cartitem'
import { cartListState, isDropDownVisible } from '../../utils/store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './styles'

const CartDropDown = () => {
  const cart = useRecoilValue(cartListState)
  const setIsVisible = useSetRecoilState(isDropDownVisible)
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cart.length
          ? cart.map(item => ( <CartItem key={item.id} {...item} /> ))
          : <EmptyMessageContainer> Your cart is empty </EmptyMessageContainer>
        }
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
        history.push('/checkout')
        setIsVisible(false)
      }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  )
}

export default CartDropDown

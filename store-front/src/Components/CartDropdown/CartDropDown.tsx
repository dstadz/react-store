import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { CartDropDownContainer } from './styles'
import CartItem from '../CartItem/Cartitem'
import { cartListState } from '../../utils/store'
import { useRecoilValue } from 'recoil'


const CartDropDown = () => {
  const cart = useRecoilValue(cartListState)
  return (
    <CartDropDownContainer>
      <div className='cart-items'>
        {cart.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </CartDropDownContainer>
  )
}

export default CartDropDown

import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { CartDropDownContainer } from './styles'
const CartDropDown = () => {

  return (
    <CartDropDownContainer>
      <div className='cart-items'>

      </div>
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </CartDropDownContainer>
  )
}

export default CartDropDown

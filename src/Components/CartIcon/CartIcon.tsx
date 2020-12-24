import React from 'react'
// import {ReactComponent as Icon} from '../../assets/images/bag.svg'
import { CartIconContainer } from './styles'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isDropDownVisible, cartCountState } from '../../utils/store'

const CartIcon = () => {
  const setIsVisible = useSetRecoilState(isDropDownVisible)
  const cartAmount = useRecoilValue(cartCountState)
  return (
    <CartIconContainer  onClick={()=>setIsVisible(isVisible => !isVisible)}>
      <div className='shopping-icon'/>
      <span> {cartAmount} </span>
    </CartIconContainer>
  )
}

export default CartIcon

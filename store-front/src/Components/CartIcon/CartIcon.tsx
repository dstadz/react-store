import React from 'react'
import {ReactComponent as Icon} from '../../assets/images/shopping-bag.svg'
import { CartIconContainer } from './styles'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isDropDownVisible, cartCountState } from '../../utils/store'





const CartIcon = () => {
  const [isVisible, setIsVisible] = useRecoilState(isDropDownVisible)
  const cartAmount = useRecoilValue(cartCountState)
  return (
    <CartIconContainer  onClick={()=>setIsVisible(isVisible => !isVisible)}>
      <Icon className='shopping-icon'/>
      <span> {cartAmount} </span>
    </CartIconContainer>
  )
}

export default CartIcon

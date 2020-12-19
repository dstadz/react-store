import React from 'react'
import {ReactComponent as Icon} from '../../assets/images/shopping-bag.svg'
import { CartIconContainer } from './styles'
import { useRecoilState } from 'recoil'
import { isDropDownVisible } from '../../utils/store'





const CartIcon = () => {
  const [isVisible, setIsVisible] = useRecoilState(isDropDownVisible)

  return (
    <CartIconContainer  onClick={()=>setIsVisible(isVisible => !isVisible)}>
      <Icon className='shopping-icon'/>
      <span> 0 </span>
    </CartIconContainer>
  )
}

export default CartIcon

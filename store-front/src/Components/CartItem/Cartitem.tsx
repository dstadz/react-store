import React, { FC } from 'react'
import CartItemInterface from '../../utils/interfaces/CartItem'
import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer
} from './styles'

const Cartitem: FC<CartItemInterface> = ({ name, price, imageUrl, quantity }) => {

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
}

export default Cartitem

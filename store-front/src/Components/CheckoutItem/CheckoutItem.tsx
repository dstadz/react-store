import React, { FC } from 'react'
import CartItemInterface from '../../utils/interfaces/CartItem'


import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './styles'

const CheckoutItem: FC<CartItemInterface> = ({ imageUrl, name, quantity, price }) => {
  // const { imageUrl, name, quantity, price } = item
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      {/* <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer> */}
    </CheckoutItemContainer>
  );
}

export default CheckoutItem

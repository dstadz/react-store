import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { cartListState } from '../../utils/store'
import CartItemInterface from '../../utils/interfaces/CartItem'
import clearItemFromCart from '../../utils/functions/clearItemfromCart'
import addItemToCart from '../../utils/functions/addItemToCart'
import removeItemFromCart from '../../utils/functions/removeItemFromCart'
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './styles'

const CheckoutItem: FC<CartItemInterface> = ({ id, imageUrl, name, quantity, price }) => {
  const item = { id, imageUrl, name, quantity, price }
  const [cart, setCart] = useRecoilState(cartListState)
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemFromCart(id,cart,setCart)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(item,cart,setCart)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(id,cart,setCart)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem

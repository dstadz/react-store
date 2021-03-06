import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { cartListState } from '../../utils/store'
import addItemToCart from '../../utils/functions/addItemToCart'
import CartItemInterface from '../../utils/interfaces/CartItem'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './styles';

const CollectionItem: FC<CartItemInterface> = ({ id, name, price, imageUrl }) => {
  const item = { id, name, price, imageUrl }
  const [cart, setCart] = useRecoilState(cartListState)

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item, cart, setCart)} >
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem

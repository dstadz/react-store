import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { cartListState } from '../../utils/store'
import addItemToCart from '../../utils/functions/addItemToCart'
import CollectionItemInterface from '../../utils/interfaces/CollectionItem'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './styles.js';




const CollectionItem: FC<CollectionItemInterface> = ({ item }) => {
  const { name, price, imageUrl } = item
  const [cart, setCart] = useRecoilState(cartListState)

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
      <h1>{item.quantity}</h1>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemToCart(item, cart, setCart)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem

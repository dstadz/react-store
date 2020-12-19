import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../../utils/store'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './styles.js';

export interface CollectionItemInterface {
  item: {
    id: number,
    name: string,
    imageUrl: string,
    price: number
  }
}

const CollectionItem: FC<CollectionItemInterface> = ({item}) => {
  const { name, price, imageUrl } = item
  const [cart, setCart] = useRecoilState(cartState)

  const addItem:FC<CollectionItemInterface> = item => {
    console.log(cart)
    console.log(item)
    setCart([...cart, item])
    console.log(cart)
  }

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem

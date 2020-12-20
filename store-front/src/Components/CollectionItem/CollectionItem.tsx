import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { cartListState } from '../../utils/store'
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
    price: number,
    quantity?: number
  }
}

export interface CartItemInterface {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity?: number
}



const CollectionItem: FC<CollectionItemInterface> = ({item}) => {
  const { name, price, imageUrl } = item
  const [cart, setCart] = useRecoilState(cartListState)

  const addItem = (newItem:CartItemInterface) => {
    const existingCartItemIndex = cart.findIndex(cartItem => cartItem.id === newItem.id);
    if (0 <= existingCartItemIndex) {
      const addedItem = Object.assign({},{...cart[existingCartItemIndex]})
      addedItem.quantity += 1
      console.log('addedItem', addedItem)
      const newList:CartItemInterface[] = []
      for (let idx in cart) {
        if (idx != existingCartItemIndex.toString()) newList.push(cart[idx])
        else newList.push(addedItem)
      }
      console.log('newList', newList)
      setCart(newList)
    } else {
      const newestCartItem = Object.assign({quantity:1}, newItem);
      setCart([...cart, newestCartItem])
    }
    console.log(cart)
  }

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
      <h1>{item.quantity}</h1>
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

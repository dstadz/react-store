import React, { FC } from 'react'
import { CollectionItemContainer } from './styles'
import { Url } from 'url';

interface CollectionItemInterface {
  props: {
    name: string,
    imageUrl: string,
    price: number
  }
}

const CollectionItem: FC<CollectionItemInterface> = ({props}) => {
  const { name, price, imageUrl } = props

  return (
    <CollectionItemContainer imageUrl={imageUrl}>
      <div className='background-image'/>
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <button onClick={() => console.log('click')}>
        Add to cart
      </button>
    </CollectionItemContainer>
  )
}

export default CollectionItem

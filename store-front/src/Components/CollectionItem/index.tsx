import React, { FC } from 'react'
import { Url } from 'url';

interface CollectionItemInterface {
  name: string,
  imageUrl: string,
  price: number
}

const CollectionItem: FC<CollectionItemInterface> = ({name, imageUrl, price}) => {
  return (
    <div>
      <div data-imageUrl={imageUrl} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <button onClick={() => console.log('click')}>
        Add to cart
      </button>
    </div>
  )
}

export default CollectionItem

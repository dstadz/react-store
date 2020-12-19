import React, { useState } from 'react'
import  SHOP_DATA from '../../assets/shop.data'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview'


const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  if(!collections) setCollections(SHOP_DATA)
  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default Shop

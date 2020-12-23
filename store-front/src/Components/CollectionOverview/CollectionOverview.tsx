import React, { useState } from 'react'
import  SHOP_DATA from '../../assets/shop.data'

import { CollectionsOverviewContainer } from './collections-overview.styles';
import CollectionPreview from '../CollectionPreview/CollectionPreview'

const CollectionOverview = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  if(!collections) setCollections(SHOP_DATA)

  return (
    <CollectionsOverviewContainer>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview

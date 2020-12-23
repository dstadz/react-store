import React, { useState } from 'react'
import CollectionItem from '../../Components/CollectionItem/CollectionItem'
import { withRouter } from "react-router-dom";
import  SHOP_DATA from '../../assets/shop.data'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './styles'


const CollectionPage = ( match ) => {
  const route = match.match.params.collectionId
  // console.log('collectionId', collectionId)
  const [collection,setCollection] = useState(SHOP_DATA.find(section => section.routeName == route))
  const { title, items } = collection
  console.log(collection)
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


export default withRouter(CollectionPage)

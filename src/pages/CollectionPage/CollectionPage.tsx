import React, { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { withRouter } from "react-router-dom";
import { collectionState } from '../../utils/store';
import CollectionItem from '../../Components/CollectionItem/CollectionItem'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './styles'


const CollectionPage = ( match ) => {
  const route = match.match.params.collectionId
  const collections = useRecoilValue(collectionState)
  const [collection,setCollection] = useState([])

  const getCollection = async() => {
      await setCollection(x)
    }

    console.log(match)
    console.log(collections)


  useEffect(() => { getCollection() },[])

  const x = collections.find(col => route === col.routeName)
  const { title, items } = x
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

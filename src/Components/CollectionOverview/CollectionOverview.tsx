import React from 'react'
import {useRecoilValue } from 'recoil'
import { collectionState } from '../../utils/store'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { CollectionsOverviewContainer } from './styles';

const CollectionOverview = () => {
  const collections = useRecoilValue(collectionState)

  return (
    <CollectionsOverviewContainer>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview

import React, { FC } from 'react'
import {useRecoilValue } from 'recoil'
import { collectionState } from '../../utils/store'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import CollectionPreviewInterface from '../../utils/interfaces/CollectionPreview'

import { CollectionsOverviewContainer } from './styles';

interface CollectionOverviewInterface {
  collections: CollectionPreviewInterface[]
}

const CollectionOverview: FC<CollectionOverviewInterface> = () => {
  const collections = useRecoilValue(collectionState)
  console.log(collections)
  return (
    <CollectionsOverviewContainer>
      {collections.map(collection => (
        <CollectionPreview {...collection} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview

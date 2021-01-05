import React, { FC } from 'react'
import {useRecoilValue } from 'recoil'
import { collectionState } from '../../utils/store'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import CollectionPreviewInterface from '../../utils/interfaces/CollectionPreview'

import { CollectionsOverviewContainer } from './styles';
import { title } from 'process'

interface CollectionOverviewInterface {
  collections: CollectionPreviewInterface[]
}

const CollectionOverview: FC<CollectionOverviewInterface> = ({ collections }) => {
  console.log(collections)
  // const collections = useRecoilValue(collectionState)
  return (
    <CollectionsOverviewContainer>
      {collections.map(collection => (
        <CollectionPreview {...collection} />
      ))}
    </CollectionsOverviewContainer>
  )
}

export default CollectionOverview

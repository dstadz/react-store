import React, { FC } from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { CollectionPreviewContainer } from './styles'
import CollectionPreviewInterface from '../../utils/interfaces/CollectionPreview'

const CollectionPreview: FC<CollectionPreviewInterface> = ({title, items}) => {

  return (
    <CollectionPreviewContainer>
      <h2> {title.toUpperCase()} </h2>
      <div className='preview'>
        {items
          .filter((_,idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview

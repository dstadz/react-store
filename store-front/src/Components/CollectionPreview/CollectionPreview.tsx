import React, { FC } from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { CollectionPreviewContainer } from './styles'
import { CollectionItemInterface } from '../CollectionItem/CollectionItem'

interface CollectionPreviewInterface {
  // props : {
    title:string,
    items: CollectionItemInterface[]
  // }
}

const CollectionPreview: FC<CollectionPreviewInterface>= ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <h2> {title.toUpperCase()} </h2>
      <div className='preview'>
        {items
          .filter((items,idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview

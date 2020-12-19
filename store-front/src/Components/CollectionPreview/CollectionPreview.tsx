import React, { FC } from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { CollectionPreviewContainer } from './styles'

interface CollectionPreviewInterface {
  // props : {
    title:string,
    items: {
      id: number,
      name:string
    }[]
  // }
}

const CollectionPreview: FC<CollectionPreviewInterface>= ({title, items}) => {
  return (
    <CollectionPreviewContainer>
      <h2> {title.toUpperCase()} </h2>
      <div className='preview'>
        {items
          .filter((items,idx) => idx < 4)
          .map(({id, ...props}) => (
            <CollectionItem key={id} props={props} />
          ))}
      </div>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview

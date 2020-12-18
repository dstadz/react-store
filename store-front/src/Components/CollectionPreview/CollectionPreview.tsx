import React, { FC } from 'react'

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
    <div>
      <h2> {title.toUpperCase()} </h2>
      <div>
        {items
          .filter((item,idx) => idx < 4)
          .map(item => (
            <div key={item.id}> {item.name} </div>
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview

import React, { useState } from 'react'
import MenuItem from '../MenuItem'


const sectionList= [{
  title: 'hats',
  imageUrl:'',
  id:1
},{
  title: 'jackets',
  imageUrl:'',
  id:2
},{
  title: 'sneakers',
  imageUrl:'',
  id:3
},{
  title: 'womens',
  imageUrl:'',
  id:4
},{
  title: 'mens',
  imageUrl:'',
  id:5
},]

const Directory = () => {
  const [sections, setSections] = useState(sectionList)

  return (
    <div>
      {sections.map(({title, imageUrl, id}) => (
        <MenuItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  )
}

export default Directory

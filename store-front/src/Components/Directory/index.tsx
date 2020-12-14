import React, { useState } from 'react'
import MenuItem from '../MenuItem'
import SECTIONS_DATA from '../../assets/crwn-clothing_sct6_local_images/sections.data.js'

const Directory = () => {
  const [sections, setSections] = useState(SECTIONS_DATA)

  return (
    <div>
      {sections.map(({title, imageUrl, id}) => (
        <MenuItem key={id} imageUrl={imageUrl} title={title} />
      ))}
    </div>
  )
}

export default Directory

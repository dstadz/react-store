import React, { useState } from 'react'
import MenuItem from '../MenuItem'
import SECTIONS_DATA from '../../assets/crwn-clothing_sct6_local_images/sections.data.js'
import { DirectoryMenuContainer } from './styles'

const Directory = () => {
  const [sections, setSections] = useState(SECTIONS_DATA)

  return (
    <DirectoryMenuContainer>
      {sections.map(({id, ...props}) => (
        <MenuItem key={id} props={props} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory

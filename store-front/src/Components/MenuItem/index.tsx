import React, { FC } from 'react'
import { Url } from 'url'
import { MenuItemContainer } from './styles'

interface MenuItemInterface {
  props: {
    title:string,
    imageUrl: string,
    size?:string
  }
}



const MenuItem: FC<MenuItemInterface> = ({ props }) => {
  const { title, imageUrl, size } = props
  return (
    // <MenuItemContainer data-size={size}  data-imageUrl={imageUrl}>
    <MenuItemContainer size={size} imageUrl={imageUrl}>
      <div className='background-image'/>
      <div className='contentContainer'>
        <h2>{title}</h2>
        <span> SHOP NOW </span>
      </div>
    </MenuItemContainer>
  )
}

export default MenuItem

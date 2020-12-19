import React, { FC } from 'react'
// import { Url } from 'url'
import { MenuItemContainer } from './styles'
import { A } from 'hookrouter'

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
    <A href='/shop/' style={{  all: 'unset'}}>
    <MenuItemContainer
      size={size}
      imageUrl={imageUrl}
      onClick={()=> console.log(title)}
    >
      <div className='background-image'/>
      <div className='contentContainer'>
        <h2>{title.toUpperCase()}</h2>
        <span> SHOP NOW </span>
      </div>
    </MenuItemContainer>
    </A>
  )
}

export default MenuItem

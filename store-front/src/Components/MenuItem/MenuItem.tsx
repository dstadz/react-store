import React, { FC } from 'react'
import { useHistory } from "react-router-dom";
import { MenuItemContainer } from './styles'

interface MenuItemInterface {
  title:string,
  imageUrl: string,
  size?:string
}

const MenuItem: FC<MenuItemInterface> = ({ title, imageUrl, size }) => {
  // const { title, imageUrl, size } = props
  const history = useHistory();

  return (
    <MenuItemContainer
      size={size}
      imageUrl={imageUrl}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
      <div className='background-image'/>
      <div className='contentContainer'>
        <h2>{title.toUpperCase()}</h2>
        <span> SHOP NOW </span>
      </div>
    </MenuItemContainer>
  )
}

export default MenuItem;

import React, { FC } from 'react'


interface MenuItemInterface {
  // props : {
    title:string,
    imageUrl: string
    // id: number
  // }
}



const MenuItem: FC<MenuItemInterface> = ({ title, imageUrl }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <span> SHOP NOW </span>
      </div>
    </div>
  )
}

export default MenuItem

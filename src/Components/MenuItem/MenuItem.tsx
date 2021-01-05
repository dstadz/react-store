import React, { FC } from 'react'
import { withRouter, RouteComponentProps , useHistory } from "react-router-dom";
import { MenuItemContainer } from './styles'

interface MenuItemInterface {
  title:string,
  imageUrl: string,
  linkUrl:string,
  size?:string,
  match: string,
  history: string,
}

const MenuItem: FC<MenuItemInterface & RouteComponentProps > = ({
  title,
  imageUrl,
  linkUrl,
  size,
  match,
  // history
}) => {
  // const { title, imageUrl, size } = props
  const history = useHistory();

  return (
    <MenuItemContainer
      size={size}
      imageUrl={imageUrl}
      onClick={() => history.push(`${linkUrl}`)}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
      <div className='background-image'/>
      <div className='contentContainer'>
        <h2>{title.toUpperCase()}</h2>
        <span> SHOP NOW </span>
      </div>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);
// export default withRouter(MenuItem);

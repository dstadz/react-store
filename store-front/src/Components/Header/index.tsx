import React, { FC } from 'react'
import { A } from 'hookrouter'
import { auth } from '../../utils/firebase'
import { HeaderContainer } from './styles'

interface HeaderInterface {
  currentUser: {} | null
}

const Header: FC<HeaderInterface> = ({ currentUser }) => {
  return (
    <HeaderContainer>
      <A className='Logo' href='/'> <div> LOGO </div> </A>
      <div>
        <A href='/shop'> SHOP </A>
        <A href='/collections'> CONTACT </A>
        { currentUser
          ? <span onClick={()=> auth.signOut()}> Sign Out </span>
          : <A href='/signin'> Sign In </A>
        }
      </div>

    </HeaderContainer>
  )
}

export default Header

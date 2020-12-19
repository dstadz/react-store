import React, { FC } from 'react'
import { A } from 'hookrouter'
import { auth } from '../../utils/firebase/firebase'
import { HeaderContainer } from './styles'

interface HeaderInterface {
  currentUser: {} | null
}

const Header: FC<HeaderInterface> = ({ currentUser }) => {
  console.log({currentUser})
  return (
    <HeaderContainer>
      <A className='Logo' href='/'> <div> LOGO </div> </A>
      <div>
        <A href='/shop'> SHOP </A>
        <A href='/collections'> CONTACT </A>
        { currentUser
          ? <span onClick={()=> {
            auth.signOut()
            console.log('sign out')
          }}> Sign Out </span>
          : <A href='/signin'> Sign In </A>
        }
      </div>

    </HeaderContainer>
  )
}

export default Header

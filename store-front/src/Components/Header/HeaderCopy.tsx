import React, { FC } from 'react'
import { A } from 'hookrouter'
import { useRecoilValue } from 'recoil'
import { userState } from '../../utils/store'
import { auth } from '../../utils/firebase/firebase'
import { HeaderContainer } from './styles'

interface HeaderInterface {
  currentUser: {} | null | undefined
}

const Header: FC<HeaderInterface> = () => {
  const user = useRecoilValue(userState)
  return (
    <HeaderContainer>
      <A className='Logo' href='/'> <div> LOGO </div> </A>
      <div>
        <A href='/shop'> SHOP </A>
        <A href='/collections'> CONTACT </A>
        { user
          ? <span onClick={()=> auth.signOut()}> Sign Out </span>
          : <A href='/signin'> Sign In </A>
        }
      </div>

    </HeaderContainer>
  )
}

export default Header

import React, { FC } from 'react'
import { A } from 'hookrouter'
import { useRecoilValue, useRecoilState } from 'recoil'
import { userState, isDropDownVisible } from '../../utils/store'
import { auth } from '../../utils/firebase/firebase'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropdown/CartDropDown'
import { HeaderContainer } from './styles'


interface HeaderInterface {
  currentUser: {} | null | undefined
}

const Header: FC<HeaderInterface> = () => {
  const user = useRecoilValue(userState)
  const isVisible = useRecoilValue(isDropDownVisible)

  return (
    <HeaderContainer>
      <A className='Logo' href='/'> <div> LOGO </div> </A>
      <div className='links'>
        <A href='/shop'> SHOP </A>
        <A href='/collections'> CONTACT </A>
        { user
          ? <span onClick={()=> auth.signOut()}> Sign Out </span>
          : <A href='/signin'> Sign In </A>
        }
        <CartIcon/>
      </div>
      {isVisible ? <CartDropDown /> : null}

    </HeaderContainer>
  )
}

export default Header

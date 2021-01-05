import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState, isDropDownVisible } from '../../utils/store'
import { auth } from '../../utils/firebase/firebase'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import { HeaderContainer } from './styles'


interface HeaderInterface {
  currentUser: {} | null | undefined
}

const Header: FC<HeaderInterface> = () => {
  const user = useRecoilValue(userState)
  const isVisible = useRecoilValue(isDropDownVisible)

  return (
    <HeaderContainer>
      <Link className='Logo' to='/'> <div> LOGO </div> </Link>
      <div className='links'>
        <Link to='/shop'> SHOP </Link>
        <Link to='/collections'> CONTACT </Link>
        { user
          ? <span onClick={()=> auth.signOut()}> Sign Out </span>
          : <Link to='/signin'> Sign In </Link>
        }
        <CartIcon/>
      </div>
      {isVisible ? <CartDropDown /> : null}

    </HeaderContainer>
  )
}

export default Header

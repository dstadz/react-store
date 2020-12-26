import React from 'react'
import SignUp from '../../Components/SignInUp/SignUp'
import SignIn from '../../Components/SignInUp/SignIn'
import { SignInAndSignUpContainer } from './styles';

const SignInUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInUpPage

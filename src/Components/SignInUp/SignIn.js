import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../utils/firebase/firebase'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './styles'

const SignIn = () => {
  const [user,setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser({ email: '', password: '' });
    } catch (error) { console.log(error); }
  };

  const handleChange = e => setUser({
    [e.target.name]: e.target.value
  });

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
      <FormInput
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isgooglesignin>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}


export default SignIn;

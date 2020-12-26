import React, { useState } from 'react';


import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../utils/firebase/firebase';
import { SignUpContainer, SignUpTitle } from './styles';


const SignUp = () => {
  const [user,setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      alert("passwords don't match",{password},{confirmPassword});
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = e => setUser({ [e.target.name]: e.target.value });

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={user.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
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
        <FormInput
          type='password'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;

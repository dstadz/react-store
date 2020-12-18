import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../utils/firebase';

import './sign-in.styles.scss';

const SignIn = () =>  {
  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const handleSubmit = event => {
    event.preventDefault();

    setUser({ email: '', password: '' });
  };

  // const updateValue: <T extends keyof string, K extends string[T]> = (name: T, value: K): void => setUser({ [name]: value });

  const handleChange = event => {
    const { value, name } = event.target;
   setUser({ name: value });
  };



  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={user.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={user.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

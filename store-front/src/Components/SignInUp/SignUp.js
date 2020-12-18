import React, { useState } from 'react';

import { auth, createUserProfileDocument } from '../../utils/firebase/firebase';


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
      alert("passwords don't match");
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
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='displayName'
          value={user.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <input
          type='password'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <button type='submit'>SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;

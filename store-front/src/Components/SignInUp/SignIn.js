import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../utils/firebase/firebase'


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

  const handleChange = e => setUser({ [e.target.name]: e.target.value });

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div className='buttons'>
          <button type='submit'> Sign in </button>
          <button onClick={signInWithGoogle} isgooglesignin>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}


export default SignIn;

import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { SignInUpContainer } from './styles'
import CustomButton from '../CustomButton'
import { auth, createUserProfileDocument, SignInWithGoogle } from '../../utils/firebase'

type FormData = {
  email: string;
  password: string;
  confirmPassword?: string
};



const SignInUp = () => {
  const [signIn, setSignIn] = useState(true)
  const [isPassVis, setPassVis] = useState(false)
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();


  const onSubmit = handleSubmit(async ({ email, password, confirmPassword }) => {
    if (signIn) console.log(email, password);

    else {
      if (password !== confirmPassword) alert('passwords do not match')
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        await createUserProfileDocument(user)
      }
      catch{}
    }
  });

  return (
    <SignInUpContainer>
      <h3> {signIn ?"Log In" : "Sign Up"} </h3>

      <form onSubmit={onSubmit}>


        <label> Email </label>
        <div>
          <input
            type="text"
            placeholder="email"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>


        <label> Password </label>
        <div>
          <input
            type={isPassVis ? "text" : "password" }
            placeholder="password"
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
          <span onClick={() => setPassVis(isPassVis => !isPassVis)}>{isPassVis ? "👓" : "🕶️" }</span>
        </div>


        {!signIn && <>
          <label> Confirm Password </label>
          <div>
            <input
              type="password"
              placeholder="password"
              name="confirmpassword"
              ref={register({required: true, maxLength: 80})}
            />
          </div>
        </> }


        <br />

        {/* <input type="submit" value={signIn ? "Log In" : "Lets get started!"} />
        <button onClick={SignInWithGoogle}> Sign in with Google </button> */}



      <div className='Buttonbar'>
        <CustomButton type='submit'> Sign in </CustomButton>
        <CustomButton
          type='button'
          onClick={SignInWithGoogle}
          isGoogleSignIn
        >
          Sign in with Google
        </CustomButton>
      </div>


        <br/>

        {signIn
        ? <span>
            Don"t have an account?
            <span onClick={()=>setSignIn(signIn => !signIn)}> Sign Up </span>
          </span>
        : <span>
            Already have an account?
            <span onClick={()=>setSignIn(signIn => !signIn)}> Sign In </span>
          </span>
        }

      </form>
    </SignInUpContainer>
  )
}

export default SignInUp

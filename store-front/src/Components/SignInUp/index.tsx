import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { SignInUpContainer } from './styles'
import CustomButton from '../CustomButton'
import { auth, createUserProfileDocument, signInWithGoogle } from '../../utils/firebase'

type FormData = {
  email: string;
  password: string;
  confirmPassword?: string
};



const SignInUp = () => {
  const [signIn, setSignIn] = useState(true)
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  const [isPassVis, setPassVis] = useState(false)
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();


  const onSubmit = handleSubmit(async ({ email, password, confirmPassword }) => {
    if (signIn) console.log(email, password, confirmPassword);

    else {
      if (password !== confirmPassword) alert(`passwords do not match:,${password},${confirmPassword}`)
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )
        await createUserProfileDocument(user)
      }
      catch { }
    }
  });

  return (
    <SignInUpContainer>
      <div>
        <h3> {signIn ? "Log In" : "Sign Up"} </h3>

        <form onSubmit={onSubmit}>


          <label> Email </label>
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              ref={register({ required: true, maxLength: 80 })}
            />
          </div>


          <label> Password </label>
          <div>
            <input
              type={isPassVis ? "text" : "password"}
              placeholder="password"
              name="password"
              ref={register({ required: true, maxLength: 80 })}
            />
            <span onClick={() => setPassVis(isPassVis => !isPassVis)}>
              {isPassVis ? "👓" : "🕶️"}
            </span>
          </div>


          {!signIn && <>
            <label> Confirm Password </label>
            <div>
              <input
                type="password"
                placeholder="password"
                name="confirmPassword"
                ref={register({ required: true, maxLength: 80 })}
              />
            </div>
          </>}


          <br />

          {/* <input type="submit" value={signIn ? "Log In" : "Lets get started!"} />
        <button onClick={SignInWithGoogle}> Sign in with Google </button> */}



          <div className='Buttonbar'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
        </CustomButton>
          </div>


          <br />

          {signIn
            ? <span>
              Don"t have an account?
            <span onClick={() => setSignIn(signIn => !signIn)}> Sign Up </span>
            </span>
            : <span>
              Already have an account?
            <span onClick={() => setSignIn(signIn => !signIn)}> Sign In </span>
            </span>
          }

        </form>
      </div>
    </SignInUpContainer>
  )
}

export default SignInUp

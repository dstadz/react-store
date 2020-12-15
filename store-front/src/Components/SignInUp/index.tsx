import React, { useState } from "react";
import { useForm } from "react-hook-form"

type FormData = {
  email: string;
  password: string;
};



const SignInUp = () => {
  const [signIn, setSignIn] = useState(true)
  const [isPassVis, setPassVis] = useState(false)
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();


  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <div>
      <h3> {signIn ?"Log In" : "Sign Up"} </h3>

      <form onSubmit={onSubmit}>
        <label> Email </label>
        <div>
          <input
            type="text"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <label> Password </label>
        <div>
          <input
            type={isPassVis ? "text" : "password" }
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
          <span onClick={() => setPassVis(isPassVis => !isPassVis)}>{isPassVis ? "👓" : "🕶️" }</span>
        </div>


        {!signIn && <>
          <label> Confirm Password </label>
          <div> <input type="password"
            placeholder="password"
            name="password"
            ref={register({required: true, maxLength: 80})}
          /> </div>
        </> }

        <br />

        <input type="submit" value={signIn ? "Log In" : "Lets get started!"} />
        <br/>

        {signIn
        ? <span>
            Don"t have an account?
            <span onClick={()=>{setSignIn(!signIn)}}> Sign Up </span>
          </span>
        : <span>
          Already have an account?
          <span onClick={()=>setSignIn(!signIn)}> Sign In </span>
        </span>}

      </form>
    </div>
  )
}

export default SignInUp

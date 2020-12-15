import React from 'react'
import { A } from 'hookrouter'


const index = () => {
  return (
    <div>
      <A href='/'> <div> LOGO </div> </A>
      <div>
        <A href='/shop'> SHOP </A>
        <A href='/collections'> CONTACT </A>
        <A href='/signin'> Sign In </A>
      </div>

    </div>
  )
}

export default index

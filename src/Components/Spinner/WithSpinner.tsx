import React from 'react'
import {
  SpinnerOverlay,
  SpinnerContainer
} from './styles.js'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props}) => {
  // console.log(isLoading, props)
  console.log('SPINNER', isLoading, props)
  return isLoading
    ? <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    : <WrappedComponent {...props} />
}

export default WithSpinner

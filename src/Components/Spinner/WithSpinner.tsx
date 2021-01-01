import React from 'react'
import {
  SpinnerOverlay,
  SpinnerContainer
} from './styles.js'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...props}) => {

  return (
    isLoading
    ? <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    : <WrappedComponent {...props} />
  )
}

export default WithSpinner

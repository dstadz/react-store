import React, { FC } from 'react'
import {
  SpinnerOverlay,
  SpinnerContainer
} from './styles'

interface WithLoadingProps {
  isLoading: boolean;
}
// const WithSpinner: FC = (WrappedComponent:FC) => ({ isLoading, ...props}) => { }
const WithSpinner = <P extends object>(WrappedComponent: React.ComponentType<P>):
FC<P & WithLoadingProps> => ({ isLoading, ...props}) => {

  return (
    isLoading
    ? <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>
    : <WrappedComponent {...props as P} />
  )
}

export default WithSpinner



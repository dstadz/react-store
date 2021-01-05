import React from 'react'
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './styles'



class ErrorBoundary extends React.Component<any, {hasErrored:boolean}> {
  constructor(props:any) {
    super(props)
    this.state = { hasErrored: false }
  }

  static getDerivedStateFromError(err:any) {
    return { hasErrored: true}
  }

  componentDidCatch(err:any, info:any) {
    console.log(err)
  }

  render() {
    if (this.state.hasErrored) {
      return(
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/flHudHE.png'/>
        <ErrorImageText>
          You bought a little bracelet for the express purpose of not losing your keys. You put a hook on your door specifically meant for keeping your keys. You briefly attempted to attach your keys to your phone. But here they are. In the dirt. In the park across the street from that bar you used to like but decided the last time you went that you probably wouldn’t go again. You’ll never find them.
        </ErrorImageText>
      </ErrorImageOverlay>)
    }
    return this.props.children
  }
}

export default ErrorBoundary

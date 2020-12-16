import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import Header from './Components/Header'
import { auth } from './utils/firebase/index'

import './App.css';
import routes from './Routes'


const App = () => {
  const [currentUser, setCurrentUser] = useState({}||null)
  let match = useRoutes(routes)

  let unsubscribeFromAuth: {}

  //componentDidMount
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  },[])

  //componentWillUnmount
  // useEffect(() => {
  //   return unsubscribeFromAuth()
  // },[])

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      {match}
    </div>
  );
}

export default App;

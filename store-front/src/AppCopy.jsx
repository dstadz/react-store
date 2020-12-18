import React, { useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import { useSetRecoilState, useRecoilValue } from 'recoil'
import Header from './Components/Header/Header'
import { auth, createUserProfileDocument } from './utils/firebase/firebase'
import './App.css';
import { userState } from './utils/store'
import routes from './Routes/routes'

const App = () => {
  // const [user, setUser] = useRecoilState(userState)

  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)
  let match = useRoutes(routes)

  let unsubscribeFromAuth = null

  //componentDidMount
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('useeffect')
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log(user);
        });
      }
      // setUser(userAuth);
    });
  },[])



  // // componentWillUnmount
  // useEffect(() => {
  //   return unsubscribeFromAuth()
  // },[])

  // console.log({user},unsubscribeFromAuth)
  return (
    <div className="App"  onClick={()=> console.log(user, unsubscribeFromAuth)}>
      <Header currentUser={user} />
      {match}
    </div>
  );
}
export default App;




/*

  let unsubscribeFromAuth = null

  //componentDidMount
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('useeffect')
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log(user);
        });
      }
      setUser(userAuth);
    });
  },[])


  // componentWillUnmount
  useEffect(() => {
    return unsubscribeFromAuth()
  },[])
  
  */
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import Header from './Components/Header/Header'
import { auth, createUserProfileDocument } from './utils/firebase/firebase'
import './App.css';
import { userState } from './utils/store'
import Routes from './Routes/routes'

const App = () => {
  const [user, setUser] = useRecoilState(userState)
  let unsubscribeFromAuth = null

  //componentDidMount
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
    });
  },[])


  return (
    <div className="App">
    {/* onClick={()=> console.log(user, unsubscribeFromAuth)}> */}
      <Header/>
      <Routes />
    </div>
  );
}
export default App;

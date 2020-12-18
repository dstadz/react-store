import React, { useState, useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import Header from './Components/Header'
import { auth, createUserProfileDocument } from './utils/firebase/index'
import SignInUp from './Components/SignInUp'
import './App.css';
import routes from './Routes'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
   
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
// const App = () => {
//   const [currentUser, setCurrentUser] = useState({}||null)
//   let match = useRoutes(routes)

//   let unsubscribeFromAuth = null
//   // let unsubscribeFromAuth: {}

//   //componentDidMount
//   useEffect(() => {
//     unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth)
//         userRef?.onSnapshot(snapShot => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data()
//           })
//         })
//         console.log(currentUser)
//       }
//     })
//   },[])

//   //componentWillUnmount
//   // useEffect(() => {
//   //   return unsubscribeFromAuth()
//   // },[])

    return (
      <div className="App">
        <Header currentUser={this.currentUser} />
        <SignInUp/>

        {/* {match} */}
      </div>
    );
  }
}
export default App;

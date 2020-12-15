import React from 'react';
import { useRoutes } from 'hookrouter';
import Header from './Components/Header'

import './App.css';
import routes from './Routes'


const App = () => {
  let match = useRoutes(routes)

  return (
    <div className="App">
      <Header />
      {match}
    </div>
  );
}

export default App;

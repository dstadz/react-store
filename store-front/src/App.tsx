import React from 'react';
import { useRoutes } from 'hookrouter';

import './App.css';
import routes from './Routes'


const App = () => {
  let match = useRoutes(routes)

  return (
    <div className="App">
      {match}
    </div>
  );
}

export default App;

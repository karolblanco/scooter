import NavBar from './navbar.jsx'
import React from 'react'
import Principal from '../paginas/principal.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
       <Switch>
         <Route exact path='/' component={Principal}/>
       </Switch>
      </BrowserRouter>
  );
}

export default App;

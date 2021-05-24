import logo from './logo.svg';
import './App.css';
import AuthComp from './auth'
import Home from './home';
import { BrowserRouter, Route } from 'react-router-dom'
import { useState } from 'react';
function App() {
  
  const [authStatus, setauthStatus] = useState(false)
  const [user, setuser] = useState({
    email : '',
    password : ""
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={AuthComp}>

        </Route>
        <Route exact path="/home" component={Home} >

        </Route>
      </BrowserRouter>


    </div>
  );
}

export default App;

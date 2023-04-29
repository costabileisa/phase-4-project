import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import NavBar from './NavBar';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const history = useHistory();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    setUser(null)
    history.push("/")
  }

  function onLogin(login) {
    setUser(login)
    history.push("/")
  }

  console.log(user)

  if (user) {
    return (
      <div className="App">
          <NavBar user={user} onLogout={onLogout} />
          <Switch>
              <Route exact path ="/">
                  <Home />
              </Route>
          </Switch>
      </div>
  )
  } else {
    return (
      <div className="App">
          <NavBar  />
          <Switch>
              <Route exact path ="/">
                  <Home />
              </Route>
              <Route path ="/login">
                  <Login onLogin={onLogin} />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
          </Switch>
      </div>
  )
  }
}

export default App;
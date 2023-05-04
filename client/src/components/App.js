import React, { useEffect, useContext, useState } from 'react';
import { Switch, Route, useHistory } from "react-router-dom";

import NavBar from './NavBar';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Dogs from "./Dogs"
import Profile from "./Profile"

import { UserContext } from "../context/user";

function App() {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  const [errors, setErrors] = useState([])

  console.log("Errors:", errors)
  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user));
      } else {
        r.json()
        .then(err => setErrors(err.errors))
      }
    });
  }, []);

  function onLogout() {
    setUser(null)
    history.push("/login")
  }

  function onLogin(login) {
    setUser(login)
    history.push("/")
  }

  if (user) {
    return (
      <div className="App">
          <NavBar onLogout={onLogout} />
          <Switch>
              <Route exact path ="/">
                <Home />
              </Route>
              <Route path ="/dogs">
                <Dogs />
              </Route>
              <Route path="/profile">
                <Profile />
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
                <SignUp  onLogin={onLogin} />
              </Route>
          </Switch>
      </div>
  )
  }
}

export default App;
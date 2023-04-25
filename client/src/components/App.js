import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import NavBar from './NavBar';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route path ="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
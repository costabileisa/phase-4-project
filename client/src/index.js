import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "./context/user";

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
    <App />
  </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js'

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from "./context/user";
import { DogsProvider } from "./context/dogs";

ReactDOM.render(
  <BrowserRouter>
  <UserProvider>
  <DogsProvider>
    <App />
  </DogsProvider>
  </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
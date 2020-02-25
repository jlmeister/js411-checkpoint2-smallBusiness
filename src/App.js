import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './containers/Navigation';
import Router from './Router'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

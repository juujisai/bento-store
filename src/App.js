import React from 'react';
import Navigation from './layout/Navigation'
import Page from './layout/Page'
import Footer from './layout/Footer'
import { createStore } from 'redux'
import reducer from './redux/reducers/reducer'

import { Provider } from 'react-redux'

import { initialStore } from './redux/initialStore'

import { BrowserRouter as Router } from 'react-router-dom'



const store = createStore(reducer, initialStore)

localStorage.setItem('cartBento', JSON.stringify([]))


function App() {


  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <div className="main">
            <Page />
          </div>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;

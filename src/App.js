import React from 'react';
import Navigation from './layout/Navigation'
import Page from './layout/Page'
import Footer from './layout/Footer'
import { createStore } from 'redux'
import reducer from './redux/reducers/reducer'

import { Provider } from 'react-redux'

import { initialStore } from './redux/initialStore'





const store = createStore(reducer, initialStore)



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <Page />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

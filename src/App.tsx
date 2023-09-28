import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import Nav from './components/Nav';
import View from './components/View';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <View />
      </div>
    </Provider>
  );
}

export default App;

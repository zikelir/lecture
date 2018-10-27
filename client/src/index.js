import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './reducers';
import Main from './components/Main/Main';
import './index.scss';

// const store = createStore();

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
  // </Provider>,
  document.getElementById('root')
);

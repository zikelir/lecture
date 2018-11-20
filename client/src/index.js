import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers/reducers';
import Main from './components/Main/Main';
import './index.scss';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store creation with redux and thunk
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
  // composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
// import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
// import rootSaga from './sagas/sagas';
import Main from './components/Main/Main';
import './index.scss';

// const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(sagaMiddleware))
  composeEnhancers(applyMiddleware(thunk))
);
// sagaMiddleware.run(rootSaga);
console.log(store.getState(), 'GS');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

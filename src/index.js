import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import CurrencyAPI from './services/currency-api';
import './index.scss';
import App from './components/app/app';
import {initApp} from './store/action';

import {reducer} from './store/reducer';

const api = new CurrencyAPI();

const store = createStore(reducer, 
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(initApp());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


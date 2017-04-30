import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppRoutes from './AppRoutes';
import reducers from './reducers';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
  	<AppRoutes/>
  </Provider>,
  document.getElementById('root')
);

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducer';
import { fetchCryptos } from './action/CryptoAction';

const store = createStore(reducers,
  applyMiddleware(thunk, logger));
store.dispatch(fetchCryptos());

export default store;

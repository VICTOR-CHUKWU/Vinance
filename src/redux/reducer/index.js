import { combineReducers } from 'redux';
import { CryptoReducer, SingleCryptoReducer } from './CryptoReducer';
import sideBarCheck from './SideBarReducer';

const reducers = combineReducers({
  CryptoReducer,
  SingleCryptoReducer,
  sideBarCheck,
});

export default reducers;

import { CryptoConst } from '../constant/Constant';

const initiaState = {
  cryptos: [],
};

export const CryptoReducer = (state = initiaState, { type, payload }) => {
  let search = '';
  if (type === CryptoConst.FETCH_CRYPTO) {
    return {
      ...state,
      cryptos: [...state.cryptos, payload],
    };
  }
  if (type === CryptoConst.FILTER_CRYPTOS) {
    search = payload.toLowerCase();
    const serched = state.cryptos.forEach((val) => {
      const searching = val.filter((item) => item.name.includes(search));
      return searching;
    });
    return {
      cryptos: [serched],
    };
  }
  return state;
};

export const SingleCryptoReducer = (state = {}, { type, payload }) => {
  if (type === CryptoConst.FETCH_ONE_CRYPTO) {
    return { ...state, payload };
  }
  return state;
};

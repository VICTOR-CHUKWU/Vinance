import { CryptoConst } from '../constant/Constant';
import { fetchCrypto, getCryptoFromApi } from '../../Service';

export const fetchCryptos = () => (async (dispatch) => {
  const crypto = await fetchCrypto();
  dispatch({
    type: CryptoConst.FETCH_CRYPTO,
    payload: crypto.data,
  });
});

export const singleCrypto = (id) => (async (dispatch) => {
  const data = await getCryptoFromApi(id);
  dispatch({
    type: CryptoConst.FETCH_ONE_CRYPTO,
    payload: data[0],
  });
});

export const filterCRYPTOS = (payload) => (async (dispatch) => {
  dispatch({
    type: CryptoConst.FILTER_CRYPTOS,
    payload,
  });
});

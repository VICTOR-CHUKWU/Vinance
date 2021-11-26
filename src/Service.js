import axios from 'axios';

const baseUrl = 'https://api.coinlore.net/api';

export const fetchCrypto = async () => {
  try {
    const response = await axios.get(`${baseUrl}/tickers/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getCryptoFromApi = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/ticker/?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

// import axios from 'axios';

// const BaseUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// const fetchCrypto = async () => {
//   const resp = await axios.get(BaseUrl, {
//     qs: {
//       start: '1',
//       limit: '5000',
//       convert: 'USD',
//     },
//     headers: {
//       'X-CMC_PRO_API_KEY': '6ee5126a-6305-4890-8230-364ea1564767',
//     },
//     json: true,
//     gzip: true,
//   });
//   const data = await resp.json();
//   console.log(data, 'data');
//   return data;
// };

// export default fetchCrypto;

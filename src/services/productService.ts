import axios from 'axios';

export const fetchProducts = () => {
  return axios.get(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
  );
};

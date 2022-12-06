import axios from 'axios';
import config from '../config';

const client = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  headers: {},
});

const getArtworks = async (): Promise<any> =>
  client.get('/artworks').then(({data}) => data);

const appClient = {
  getArtworks,
};

export default appClient;

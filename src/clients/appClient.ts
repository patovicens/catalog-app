import axios from 'axios';
import config from '../config';

const client = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  headers: {},
});

const getArtworks = async (): Promise<any> =>
  client.get('/artworks?page=3&limit=20').then(({data}) => data);

const getArtworkById = async (id: number): Promise<any> =>
  client.get(`/artworks/${id}`).then(({data}) => data);

const appClient = {
  getArtworks,
  getArtworkById,
};

export default appClient;

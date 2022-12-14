import axios from 'axios';
import config from '../config';
import {Artwork, PaginatedResponse} from '../types/Collections';

const client = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  headers: {},
});

const getArtworks = async (
  page: number,
  limit: number,
): Promise<PaginatedResponse<Artwork>> =>
  client.get(`/artworks?page=${page}&limit=${limit}`).then(({data}) => data);

const getArtworkById = async (id: number): Promise<Artwork> =>
  client.get(`/artworks/${id}`).then(({data}) => data);

const appClient = {
  getArtworks,
  getArtworkById,
};

export default appClient;

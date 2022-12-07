import packageJSON from '../package.json';
import {API_URL, IIIF_BASE_URL} from '@env';

const config = {
  API_URL,
  IIIF_BASE_URL,
  appName: packageJSON.name,
};

export default config;

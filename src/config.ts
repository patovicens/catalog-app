import packageJSON from '../package.json';
import {API_URL} from '@env';

const config = {
  API_URL,
  appName: packageJSON.name,
};

export default config;

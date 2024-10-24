import axios from 'axios';
import { AuthApi, Configuration } from './openapi';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const config = new Configuration();

const axiosInstance = axios.create({
  headers: {
    Authorization: 'YOUR_TOKEN',
  },
});

const authApi = new AuthApi(config, apiUrl, axiosInstance);

export { authApi };

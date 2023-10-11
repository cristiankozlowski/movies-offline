import { boot } from 'quasar/wrappers'
import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.API_URL;
    config.headers["Accept"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

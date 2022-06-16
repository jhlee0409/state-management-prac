import axios from "axios";

const mainAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {},
});

mainAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return err;
  }
);

mainAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { mainAxios };

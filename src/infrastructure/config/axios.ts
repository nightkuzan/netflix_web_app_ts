import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const baseURL = process.env.NEXT_PUBLIC_APP_BASEURL
  ? `${process.env.NEXT_PUBLIC_APP_BASEURL}/api`
  : "http://localhost:1337/api";

const config: AxiosRequestConfig = {
  baseURL,
  paramsSerializer: {
    serialize: (params) =>
      qs.stringify(params, {
        encodeValuesOnly: true,
      }),
  },
};

const axiosInstance = axios.create(config);

export { axiosInstance };

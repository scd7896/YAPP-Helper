import * as qs from "qs";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getCookie } from "./cookie";

const preRequestSet = (config: AxiosRequestConfig) => {
  config.headers.common["Authorization"] = getCookie();
  return config;
};

const preErrorSet = (err: any) => {
  return Promise.reject(err);
};

interface IUseBodyReuqestOption {
  body?: any;
  query?: any;
}
class RequestObject {
  private static _instance: RequestObject;
  private client: AxiosInstance;
  private constructor() {
    this.client = axios.create({
      baseURL: "/",
    });
    this.client.interceptors.request.use(preRequestSet, preErrorSet);
  }
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  get(url: string, query?: object) {
    return this.client.get(`${url}?${qs.stringify(query)}`);
  }

  post(url: string, { body, query }: IUseBodyReuqestOption) {
    return this.client.post(`${url}?${qs.stringify(query)}`, body);
  }

  delete(url: string, query?: object) {
    return this.client.delete(`${url}?${qs.stringify(query)}`);
  }

  put(url: string, { body, query }: IUseBodyReuqestOption) {
    return this.client.put(`${url}?${qs.stringify(query)}`, body);
  }

  patch(url: string, { body, query }: IUseBodyReuqestOption) {
    return this.client.patch(`${url}?${qs.stringify(query)}`, body);
  }
}

export default RequestObject.Instance;

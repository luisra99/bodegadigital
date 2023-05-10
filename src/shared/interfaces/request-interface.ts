import { AxiosHeaders } from 'axios';

export interface RequestData {
  method: string;
  params: object;
  url: string;
  data: object;
}
export interface RequestOptions {
  method: string;
  url: string;
  data: RequestData;
}
export interface GetDataParams {
  key: string;
  api: string;
  action: string;
  method?: 'GET' | 'POST' | 'get' | 'post';
  params?: object;
  data?: object;
}
export interface ApiConfig {
  AM_PROTOCOL: string;
  AM_IP: string;
  AM_PORT: string;
  AM_CONSUMER_KEY: string;
  AM_CONSUMER_SECRET: string;
  AM_TOKEN_ENDPOINT: string;
  GW_PROTOCOL: string;
  GW_IP: string;
  GW_PORT: string;
  API: string;
}
type AxiosHeaderValue = AxiosHeaders | string | string[] | number | boolean | null;
export interface RawAxiosHeaders {
  [key: string]: AxiosHeaderValue;
}

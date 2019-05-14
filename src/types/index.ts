export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string;
  method?: string;
  data?: any;
  param?: any;
}

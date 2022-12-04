import axios, { AxiosInstance } from 'axios';

interface HttpClientType {
  httpClient: AxiosInstance;
}

const URL = 'https://sample-posts.coderockr.com/api';

export function httpClient(ctx?: any): HttpClientType {
  const httpClient = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { httpClient };
}

import axios, { AxiosInstance } from 'axios';

interface HttpClientType {
  apiClient: AxiosInstance;
}

const URL = 'https://sample-posts.coderockr.com/api';

export function httpClient(): HttpClientType {
  const apiClient = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { apiClient };
}

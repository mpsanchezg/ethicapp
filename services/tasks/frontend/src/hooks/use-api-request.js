import { useState } from 'react';
import axios from 'axios';

const api = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: 'http://localhost:3034/api/',
});

const usePostApiRequest = (endpoint, body) => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState('');

  const doFetch = async () => {
    setError();
    setResponse();
    try {
      const response = await api.post(endpoint, body);
      setResponse(response);
    } catch (err) {
      setError(err);
    }
  };

  return [response, error, doFetch];
};

const useGetApiRequest = (endpoint, params) => {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState('');

  const doFetch = async () => {
    setError();
    setResponse();
    try {
      const response = await api.get(endpoint, );
      setResponse(response);
    } catch (err) {
      setError(err);
    }
  };

  return [response, error, doFetch];
};

export { usePostApiRequest, useGetApiRequest};

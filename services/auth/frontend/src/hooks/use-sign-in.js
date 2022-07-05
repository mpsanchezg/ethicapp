import { useApiRequest } from './use-api-request';

const signInEndpoint = 'auth/signin';

const useSignIn = (body) => {
  const [
    response,
    error,
    doFetch,
  ] = useApiRequest(
    signInEndpoint,
    body,
  );

  return [response, error, doFetch];
};

export default useSignIn;
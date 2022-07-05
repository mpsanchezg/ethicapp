import { useApiRequest } from './use-api-request';

const signInEndpoint = 'auth/signup';

const useSignUp = (body) => {
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

export default useSignUp;
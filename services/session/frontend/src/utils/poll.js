// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const poll = async ({ fn, attr, interval, maxAttempts }) => {
  let attempts = 0;

  const executePoll = async (resolve, reject) => {
    let result;
    try {
      result = await fn(attr);
    } catch(error) {
      result = error;
    }
    attempts++;

    if (result?.status === 200) {
      return resolve(result);
    } else if (maxAttempts && attempts === maxAttempts) {
      return reject(new Error('Exceeded max attempts'));
    } else {
      setTimeout(executePoll, interval, resolve, reject);
    }
  };

  return new Promise(executePoll);
};

export { poll };

import { getToken } from '@/helpers/local-storage';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const isPromise = func => func && typeof func.then === 'function';

const getResetter = api =>
  typeof api === 'object' && api.resetter(['data', 'error']);

const getHeaders = (options = {}) =>
  Object.assign(
    {},
    {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    options,
  );
export default {
  sleep,
  isPromise,
  getResetter,
  getHeaders,
};

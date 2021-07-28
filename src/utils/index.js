import { getToken } from '@/helpers/local-storage';
import { isEqual } from 'lodash';

export const compareTwoObject = (object1 = {}, object2 = {}) => {
  return isEqual(object1, object2);
};

export const isEmptyObject = object => {
  !object ||
    (Object.keys(object).length === 0 && object.constructor === Object);
};

export const isObject = obj =>
  obj && typeof obj === 'object' && !Array.isArray(obj);

export const ensureArray = data => (Array.isArray(data) ? data : []);

export const ensureObject = (obj, defaultValue) =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const parseBoolean = val =>
  !val ||
  val === 'false' ||
  val === 'null' ||
  val === 'undefined' ||
  val === '0'
    ? false
    : true;

export const validateEmail = email => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const DATE_FORMAT = 'MM/DD/YYYY';

export const TIME_FORMAT = 'hh:mm:ss A';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const isPromise = func => func && typeof func.then === 'function';

export const getHeaders = (options = {}) =>
  Object.assign(
    {},
    {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    options,
  );

export const isBrowser = typeof window !== 'undefined';

import { isEmptyObject } from '@/utils';
import { history } from '@/store';

export const goURL = (path = '/', state) => {
  history.push(path, state);
};

export const replaceURL = (path = '/', state) => {
  history.push(path, state);
};

export const generatePath = (paths = [], queryParams = {}) => {
  if (!paths?.length) {
    return '/';
  }

  let queryString,
    arrayPath = paths;
  if (!isEmptyObject(queryParams)) {
    queryString = Object.keys(queryParams)
      .map(param => `${param}=${queryParams[param]}`)
      .join('&');
  }

  if (!Array.isArray(paths)) {
    arrayPath = [paths];
  }

  const exactPaths = arrayPath.filter(Boolean);
  let fullPath = `${exactPaths.join('/')}${
    queryString ? '?' + queryString : ''
  }`;

  if (!fullPath.startsWith('/')) {
    fullPath = '/' + fullPath;
  }
  return fullPath;
};

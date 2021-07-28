import { isBrowser } from '../utils';

const TOKEN_NAME = '_ut';

export const saveToken = token =>
  isBrowser && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = () =>
  isBrowser ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = () =>
  isBrowser ? localStorage.removeItem(TOKEN_NAME) : null;

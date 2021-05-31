import HttpRequest from '@/services/http-request';

export const getTodoList = payload =>
  HttpRequest.get('https://jsonplaceholder.typicode.com/todos', payload);

export const getTodoDetails = (id, payload) =>
  HttpRequest.get(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    ...payload,
  });

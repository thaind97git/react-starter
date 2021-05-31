import { lazy } from 'react';

const TodoFeature = lazy(() => import('./index'));
const TodoDetails = lazy(() => import('./components/details'));

export default [
  {
    name: 'todo-list',
    path: '/todos',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: TodoFeature,
  },
  {
    name: 'todo-details',
    path: '/todos/details/:id',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: TodoDetails,
  },
];

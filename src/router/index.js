import NotFound from '@/components/not-found';
import RouteModules from '../features/**/route.js';

export default [
  ...RouteModules.reduce((prev, module) => {
    prev.push(...module.default);
    return prev;
  }, []),
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];

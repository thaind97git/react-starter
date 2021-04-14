// const context = require.context('.', true, /.js$/);

// const utils = context
//   .keys()
//   .filter(path => path !== './index.js')
//   .reduce((prev, path) => {
//     return { ...prev, ...require(`${path}`).default };
//   }, {});

// module.exports = utils;

const arrayPaths = [
  './array',
  './boolean',
  './object',
  './string',
  './time',
  './util',
];

const utils = arrayPaths.reduce((prev, path) => {
  return { ...prev, ...require(`${path}`).default };
}, {});

module.exports = utils;

# Getting Started with RW-Starter

The RW-Starter was config with React and Webpack without CRA

## Quick Start

Commands to run scripts

```
yarn start // Run the project with DEV environment
yarn build // Builds the app for production to the build folder
```

The boilerplate project's structure will look similar to this:

```bash
RW-Starter
├── .husky
├── .vscode
├── .babelrc
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postinstall
├── .prettierignore
├── jsconfig.js
├── package-lock.json
├── package.json
├── config
│  ├── jest
│  │  ├── babelTransform.js
│  │  ├── createJestConfig.js
│  │  ├── cssTransform.js
│  │  ├── fileTransform.js
│  │  └── index.js
│  ├── common.js
│  ├── env.js
│  └── paths.js
│
├── public
│  ├── static
│  │  ├── image
│  │  └── ...
│  ├── favicon.ico
│  ├── index.html
│  └── manifest.json
│
├── build
│  ├── favicon.ico
│  ├── index.html
│  ├── manifest.json
│  ├── service-worker.js
│  └── ...
├── webpack
│  ├── webpack.common.js
│  ├── webpack.dev.js
│  └── webpack.prod.js
└── src
   ├── App.js
   ├── App.test.js
   ├── index.js
   ├── setupTests.js
   ├── apis
   ├── components
   │  ├── button
   │  │  ├── index.js
   │  │  └── style.scss
   │  ├── input
   │  │  ├── index.js
   │  │  └── style.scss
   │  └── ...
   ├── features
   │  ├── core  # core feature
   │  │  ├── components
   │  │  │  ├── login
   │  │  │  │  ├── index.js
   │  │  │  │  └── style.scss
   │  │  │  └── ... # other components for core feature like 404, 403, 500, register, ...
   │  │  └── route.js # core routes
   │  ├── todo  # todo feature
   │  │  ├── components
   │  │  │  ├── detail
   │  │  │  │  ├── index.js
   │  │  │  │  └── style.scss
   │  │  │  ├── list
   │  │  │  │  ├── index.js
   │  │  │  │  └── style.scss
   │  │  │  └── ... # other components for todo feature
   │  │  └── route.js # todo routes
   │  └── ... # other feature like user, transaction, ...
   ├── helpers
   │  ├── local-storage.js
   │  ├── router.js
   │  ├── toast.js
   │  └── ...
   ├── hooks
   │  ├── useShallowEqualSelector.js
   │  ├── useGetRequest.js
   │  ├── useQueryParam.js
   │  ├── useShallowEqualSelector.js
   │  ├── useWindowSize.js
   │  └── ...
   ├── layout
   │  ├── footer
   │  │  ├── index.js
   │  │  └── style.scss
   │  ├── header
   │  │  ├── index.js
   │  │  └── style.scss
   │  ├── main
   │  │  ├── index.js
   │  │  └── style.scss
   │  └── index.js
   ├── locales
   ├── router
   │  └── index.js # merge all page-route to one root-route
   ├── services
   │  ├── axios-base.js
   │  ├── http-request.js
   │  └── ...
   ├── store  # redux configuration
   │  ├── actions
   │  │  ├── auth.js
   │  │  ├── index.js
   │  │  ├── layout.js
   │  │  └── ...
   │  ├── reducers
   │  │  ├── auth.js
   │  │  ├── index.js
   │  │  ├── layout.js
   │  │  └── ...
   │  ├── selectors
   │  │  ├── auth.js
   │  │  ├── index.js
   │  │  ├── layout.js
   │  │  └── ...
   │  └── index.js
   ├── styles  # app style configuration
   │  ├── _breakpoints_.scss
   │  ├── _color.scss
   │  ├── _container_.scss
   │  ├── _grid_.scss
   │  ├── _size_.scss
   │  ├── _utils_.scss
   │  ├── ...
   │  └── App.scss
   └── utils  # Utilities function
```

## Other References

- Webpack Plugins
  - [import-glob](https://www.npmjs.com/package/import-glob) // dynamic import like `import RouteModules from '../pages/**/route.js'`
  - [eslint-loader](https://www.npmjs.com/package/eslint-loader)
  - [sass](https://www.npmjs.com/package/sass), [sass-loader](https://www.npmjs.com/package/sass-loader) // Use Sass
  <!-- - [less](https://www.npmjs.com/package/less), [less-loader](https://www.npmjs.com/package/less-loader) // Use Less -->
  - [file-loader](https://www.npmjs.com/package/file-loader) // Use files import
  - [html-loader](https://www.npmjs.com/package/html-loader) // Use Html files import
  - [alias](https://webpack.js.org/configuration/resolve/) // Shorten import
  - [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin) // Dynamic loader for lodash
  - [webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin) // Use Manifest
  - ...
- [React-scripts CRA](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/config)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://github.com/okonet/lint-staged)

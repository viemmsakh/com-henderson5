import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from './pages/404';

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });

const routes = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  if (!fileName) continue;
  const normalizedPathNames = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '');
  routes.push({
    path: fileName.toLowerCase() === 'index' ? '/' : `/${normalizedPathNames.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <Element />,
    errorElement: <Error404 />,
  })),
);

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}


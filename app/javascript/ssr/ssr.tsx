import ReactDOMServer from 'react-dom/server';
import {
  createInertiaApp,
  InertiaAppOptionsForCSR,
  ReactComponent,
  ReactInstance,
} from '@inertiajs/inertia-react';
import type { Page, PageProps } from '@inertiajs/core';
import cjsCreateServer from '@inertiajs/server';
import Layout from '../components/Layout';
import { ComponentType } from 'react';
import { Props } from '../inertia';

const pages = import.meta.glob('../pages/**/*.tsx', { eager: true });

// Unwrap the CJS module in @inertiajs/server.
const createServer =
  typeof cjsCreateServer === 'function' ? cjsCreateServer : cjsCreateServer['default'];

createServer((page: Page) =>
  createInertiaApp<InertiaAppOptionsForCSR<Props>>({
    page,
    render: ReactDOMServer.renderToString,
    resolve: async (name: string) => {
      // const page = (await pages[`../pages/${name}.tsx`]()).default;
      // page.layout = page.layout || Layout
      // return page

      // const page = pages[`../pages/${name}.tsx`];
      // page.layout = page.layout || Layout
      // return page

      const page = ((await pages[`../pages/${name}.tsx`]) as { default: { layout: ComponentType } })
        .default;
      page.layout = page.layout || Layout;
      return page;

      // const module = (await pages[`../pages/${name}.tsx`]) as { default: { layout: ComponentType } };
      // const page = module.default
      // if (!page) {
      //   throw Error('Page not found');
      // }
      // page.layout = page.layout || Layout;

      // // return Object.assign({ layout: Layout }, page);
      // return page;
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
);

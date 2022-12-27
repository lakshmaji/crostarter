import ReactDOMServer from 'react-dom/server';
import { createInertiaApp, InertiaAppOptionsForCSR } from '@inertiajs/inertia-react';
import type { Page } from '@inertiajs/core';
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
      const currentPage = (
        (await pages[`../pages/${name}.tsx`]) as { default: { layout: ComponentType } }
      ).default;
      currentPage.layout = currentPage.layout || Layout;
      return currentPage;
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
);

import ReactDOMServer from 'react-dom/server';
import {
  createInertiaApp,
  CreateInertiaAppSSRContent,
  InertiaAppOptionsForSSR,
  ReactComponent,
  ReactInstance,
  SetupOptions,
} from '@inertiajs/inertia-react';
import type { Page, PageProps } from '@inertiajs/core';
import cjsCreateServer from '@inertiajs/server';
import Layout from '../components/Layout';
import { ComponentType } from 'react';

const pages = import.meta.glob('../pages/**/*.tsx', { eager: true });

// Unwrap the CJS module in @inertiajs/server.
const createServer =
  typeof cjsCreateServer === 'function' ? cjsCreateServer : cjsCreateServer['default'];

type PageResolverResponse = ReactComponent & { layout?: ComponentType };

const resolve = async (name: string): Promise<PageResolverResponse> => {
  const currentPage = (
    (await pages[`../pages/${name}.tsx`]) as { default: { layout: ComponentType } }
  ).default;
  currentPage.layout = currentPage.layout || Layout;
  return currentPage as PageResolverResponse;
};

const setup = ({ App, props }: SetupOptions<null, PageProps>) =>
  (<App {...props} />) as ReactInstance;

const cb = (page: Page): Promise<CreateInertiaAppSSRContent> =>
  createInertiaApp<InertiaAppOptionsForSSR<PageProps>>({
    page,
    render: ReactDOMServer.renderToString,
    resolve: resolve,
    setup,
  });

createServer(cb);

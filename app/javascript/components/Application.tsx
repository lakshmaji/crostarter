import React, { ReactFragment } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createInertiaApp,
  InertiaAppOptionsForCSR,
  ReactComponent,
} from '@inertiajs/inertia-react';
import Layout from './Layout';
import { Props } from '../inertia';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();
const pages = import.meta.glob('../pages/**/*.tsx');

type PageResolverResponse = ReactComponent & { layout?: ReactFragment };

const resolve = async (name: string): Promise<PageResolverResponse> => {
  const module = await pages[`../pages/${name}.tsx`]();
  const page = (module as never as { default: { layout: React.ReactFragment } }).default;
  page.layout = page.layout || Layout;
  return page as PageResolverResponse;
};
const app = () => {
  return createInertiaApp<InertiaAppOptionsForCSR<Props>>({
    resolve,
    setup({ el, App, props }) {
      const container = document.getElementById(el.id) as HTMLElement;
      const root = createRoot(container);
      root.render(<App {...props} />);
    },
  });
};
export default app;

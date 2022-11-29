import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp, InertiaAppOptionsForCSR } from '@inertiajs/inertia-react';
import Layout from './Layout';
import axios from 'axios';
import { Props } from '../inertia';

const pages = import.meta.glob('../pages/**/*.tsx');

const app = () => {
  const csrfToken = document.querySelector<HTMLMetaElement>('meta[name=csrf-token]')?.content;
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

  return createInertiaApp<InertiaAppOptionsForCSR<Props>>({
    resolve: async (name) => {
      const module = await pages[`../pages/${name}.tsx`]();
      const page = (module as never as { default: { layout: React.ReactFragment } }).default;
      page.layout = page.layout || Layout;
      return page;
    },
    setup({ el, App, props }) {
      const container = document.getElementById(el.id);
      const root = createRoot(container!);
      root.render(<App {...props} />);
    },
  });
};
export default app;

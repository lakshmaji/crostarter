import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import Layout from './Layout';
import axios from 'axios';

const pages = import.meta.glob('../pages/**/*.tsx')

const app = () => {
  const csrfToken = document.querySelector('meta[name=csrf-token]')?.content;
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

  return createInertiaApp({
  resolve: async (name) => {
    const page = (await pages[`../pages/${name}.tsx`]()).default;
    page.layout = page.layout || Layout

    return page
    // return import(`./${name}`);
  },
  setup({ el, App, props }) {
    const container = document.getElementById(el.id);
    const root = createRoot(container!);
    root.render(<App {...props} />);
  },
});
}
export default app
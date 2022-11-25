import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'
import cjsCreateServer from '@inertiajs/server'
import Layout from '../components/Layout'

const pages = import.meta.globEagerDefault('../pages/**/*.tsx')

// Unwrap the CJS module in @inertiajs/server.
const createServer = typeof cjsCreateServer === 'function' ? cjsCreateServer : cjsCreateServer.default

createServer((page) => createInertiaApp({
  page,
  render: ReactDOMServer.renderToString,
  resolve: name => {
    const page = pages[`../pages/${name}.tsx`];
    page.layout = page.layout || Layout

    return page
  },
  setup: ({ App, props }) => <App {...props} />,
}))

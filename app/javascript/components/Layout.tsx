import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import React, { FC, Fragment, ReactNode } from 'react';
import { Flash } from './Flash';
import Footer from './Footer';
import Header from './Header';
import NewsLetter from './NewsLetter';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  const { auth } = usePage().props;
  const { flash } = usePage<any>().props;

  return (
    <>
      <Flash />
      <Header />

      <div
        style={{
          marginTop: 70,
        }}
      >
        {children}
      </div>

      <section style={{ background: '#1e266d' }}>
        <NewsLetter />
        <Footer />
      </section>
    </>
  );
};

const Wrapper = (
  page:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
) => <Layout>{page}</Layout>;
Wrapper.displayName = 'LayoutWrapper';
export default Wrapper;

import React, { FC, ReactNode } from 'react';
import { Flash } from './Alerts/Flash';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NewsLetter from './NewsLetter/NewsLetter';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Flash />

      <div
        style={{
          // marginTop: 70,
          background:
            'background: rgb(249, 249, 249) none no-repeat scroll 50% 50% / cover padding-box border-box',
        }}
      >
        {children}
      </div>

      <section style={{ background: '#1e266d' }}>
        {<NewsLetter />}
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

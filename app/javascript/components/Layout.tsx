import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";
import React, { Fragment } from "react";
import { Flash } from "./Flash";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";

const Layout = ({ children }) => {
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

      <section style={{ background: "#1e266d" }}>
        <NewsLetter />
        <Footer />
      </section>
    </>
  );
};

export default (page) => <Layout>{page}</Layout>;

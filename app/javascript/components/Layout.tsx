import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";
import React, { Fragment } from "react";
import { Flash } from "./Flash";
import Footer from "./Footer";
import Header from "./Header";

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
      >{children}</div>

      <Footer />
    </>
  );
};

export default (page) => <Layout>{page}</Layout>;

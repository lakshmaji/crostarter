import React, { FC, Fragment } from "react";
import styles from "./header.module.scss";
import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";
import { classNames } from "../utils/styles";
import Greeting from "./Greeting";



const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <InertiaLink
          href="/categories"
          className={classNames(
            styles.nav_item,
            styles.explore,
            styles["green-hover"]
          )}
        >
          <i
            className={classNames(styles.icon, "fa fa-compass  compass")}
            aria-hidden="true"
          ></i>
          <span>Explore</span>
        </InertiaLink>

        <InertiaLink
          href="/projects/new"
          className={classNames(
            styles.nav_item,
            styles.start,
            styles["green-hover"]
          )}
        >
          <span>Start a project</span>
        </InertiaLink>
      </div>

      <InertiaLink
        href="/"
        className={classNames(styles.logo, styles.nav_item)}
      >
        <span id="logo">
          Crank<span className={styles.crank}>starter</span>
        </span>
      </InertiaLink>

      <div className={classNames(styles.right)}>
        <InertiaLink href="/search" className={classNames(styles.search)}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </InertiaLink>

        <div className={classNames(styles.nav_item, "greeting")}>
          <Greeting />
        </div>
      </div>
    </div>
  );
};

export default Header;

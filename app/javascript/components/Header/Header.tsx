import React from 'react';
import styles from './header.module.scss';
import { Link, usePage } from '@inertiajs/inertia-react';
import { IoLogoLinkedin } from '@react-icons/all-files/io5/IoLogoLinkedin';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub';
import Logo from '../logo/Logo';
import { Page } from '@inertiajs/inertia';
import { UsePageProps } from '../../inertia';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Header = () => {
  const { auth } = usePage<Page<UsePageProps>>().props;

  return (
    <header>
      <div className={styles.logo_category}>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div className={styles.user}>
        <ul className={styles.menu}>
          <li>
            <Link href='/categories' className={styles.menu_item}>
              Explore
            </Link>
          </li>
          <li>
            <Link href='/projects/new' className={styles.menu_item}>
              Start project
            </Link>
          </li>
        </ul>

        {auth ? (
          <>
            <a className={styles.icon_btn} href='https://github.com/lakshmaji'>
              <IoLogoGithub className={styles.ionicon} />
            </a>
            <a className={styles.icon_btn} href='https://in.linkedin.com/in/lakshmajee'>
              <IoLogoLinkedin className={styles.ionicon} />
            </a>

            <DropdownMenu />
          </>
        ) : (
          <>
            <a className={styles.icon_btn} href='https://github.com/lakshmaji'>
              <IoLogoGithub className={styles.ionicon} />
            </a>
            <a className={styles.icon_btn} href='https://in.linkedin.com/in/lakshmajee'>
              <IoLogoLinkedin className={styles.ionicon} />
            </a>
            <div className={styles.logout_btn}>
              <Link href='/sessions/new' className={styles.link}>
                Get started
                <span className={styles.icon}>
                  <IoChevronForwardCircle />
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

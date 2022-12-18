import React from 'react';
import styles from './header.module.scss';
import { Link, usePage } from '@inertiajs/inertia-react';
import {
  // IoChevronForwardCircle,
  // IoLockClosedOutline,
  // IoLogoGithub,
  IoLogoLinkedin,
} from '@react-icons/all-files/io5/IoLogoLinkedin';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import { IoLockClosedOutline } from '@react-icons/all-files/io5/IoLockClosedOutline';
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub';
import Logo from './logo/Logo';
import { Page } from '@inertiajs/inertia';
import { UsePageProps } from '../inertia';

const Header = () => {
  const { auth } = usePage<Page<UsePageProps>>().props;

  return (
    <header>
      {/* <img
        src='https://uidesigndaily.com/public/img/uidesigndaily-logo.svg'
        alt=''
        className={styles.logo}
      /> */}
      <div className={styles.logo_category}>
        <Link href='/'>
          <Logo />
        </Link>
        {/* <ul className={styles.menu}>
          <li>
            <a href='https://lakki.com' className={styles.menu_item}>
              Explore
            </a>
          </li>
          <li>
            <a href='https://lakki.com' className={styles.menu_item}>
              Start project
            </a>
          </li>
        </ul> */}
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

        {/* <div className={styles.notification}>
          <IoNotificationsOutline className={styles.ionicon} />
          <div className={styles.notification_status} />
        </div> */}
        {auth ? (
          <>
            <img
              src='https://avatars.githubusercontent.com/u/14037682?v=4'
              alt=''
              className={styles.user_image}
            />

            <div className={styles.logout_btn}>
              <Link className={styles.link} href='/exit' method='get' as='button' type='button'>
                Logout
                <span className={styles.icon}>
                  <IoLockClosedOutline />
                </span>
              </Link>
            </div>
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
        {/* <div className={styles.upload_image}>
          <div className={styles.logout}>
          <IoCloudUploadOutline className={styles.ionicon} />
            Logout
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;

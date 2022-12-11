import React from 'react';
import styles from './header.module.scss';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { classNames } from '../utils/styles';
import Greeting from './Greeting';
import {
  IoChevronForwardCircle,
  IoCloudUploadOutline,
  IoLockClosedOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoNotificationsOutline,
  IoNotificationsSharp,
} from 'react-icons/io5';
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
        <Logo />
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
            <a href='https://lakki.com' className={styles.menu_item}>
              Explore
            </a>
          </li>
          <li>
            <a href='https://lakki.com' className={styles.menu_item}>
              Start project
            </a>
          </li>
        </ul>

        {/* <div className={styles.notification}>
          <IoNotificationsOutline className={styles.ionicon} />
          <div className={styles.notification_status} />
        </div> */}
        {auth ? (
          <>
            <img
              src='https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
              alt=''
              className={styles.user_image}
            />

            <div className={styles.logout_btn}>
              <a href='/' className={styles.link}>
                Logout
                <span className={styles.icon}>
                  <IoLockClosedOutline />
                </span>
              </a>
            </div>
          </>
        ) : (
          <>
            <IoLogoGithub className={styles.ionicon} />
            <IoLogoLinkedin className={styles.ionicon} />
            <div className={styles.logout_btn}>
              <a href='/' className={styles.link}>
                Get started
                <span className={styles.icon}>
                  <IoChevronForwardCircle />
                </span>
              </a>
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

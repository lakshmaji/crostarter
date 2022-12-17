import React, { FC } from 'react';
import styles from './greeting.module.scss';
import { Link, usePage } from '@inertiajs/inertia-react';
import { UsePageProps } from '../inertia';
import { Page } from '@inertiajs/inertia';

const SessionLinks = () => {
  return (
    <nav className={styles.auth}>
      <Link className={styles.item} href='/users/new'>
        Sign Up
      </Link>
      <Link className={styles.item} href='/sessions/new'>
        Sign In
      </Link>
    </nav>
  );
};

const PersonalGreeting = () => {
  const { auth } = usePage<Page<UsePageProps>>().props;

  return (
    <div className={styles.dropdown}>
      <i className='fa fa-user' aria-hidden='true'></i>

      <div className={styles['dropdown-content']}>
        <div className={styles.background} />
        <p>
          My Projects
          <Link
            href='/myprojects'
            method='get'
            as='button'
            type='button'
            className={styles['header-button']}
          >
            Manage
          </Link>
        </p>
        <p>
          My Profile
          <Link
            href='/profile'
            method='get'
            as='button'
            type='button'
            className={styles['header-button']}
          >
            Profile
          </Link>
        </p>
        <p>
          You&apos;re logged in as <span>{auth.user.name}</span>
          <Link
            href='/exit'
            method='get'
            as='button'
            type='button'
            className={styles['header-button']}
          >
            Log Out
          </Link>
        </p>
      </div>
    </div>
  );
};

const Greeting: FC<any> = () => {
  const { auth } = usePage().props;

  return auth ? <PersonalGreeting /> : <SessionLinks />;
};

export default Greeting;

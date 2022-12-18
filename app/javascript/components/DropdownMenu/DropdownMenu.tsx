import { classNames } from '../../utils/styles';
import React, { PointerEvent, useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import { Link, usePage } from '@inertiajs/inertia-react';
import { IoLockClosedOutline } from '@react-icons/all-files/io5/IoLockClosedOutline';
import { Page } from '@inertiajs/inertia';
import { UsePageProps } from '../../inertia';

const DropdownMenu = () => {
  const { auth } = usePage<Page<UsePageProps>>().props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLUListElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (linkRef?.current) {
      const linkClickEvent = (event: Event) => {
        setIsActive(false);
      };

      linkRef.current.addEventListener('click', linkClickEvent);

      return () => {
        linkRef.current?.removeEventListener('click', linkClickEvent);
      };
    }
  }, [isActive]);

  useEffect(() => {
    const pageClickEvent = (event: Event) => {
      if (isActive) {
        if (dropdownRef.current && event?.target) {
          const within = dropdownRef.current.contains(event.target as Node);

          if (!within) {
            setIsActive(false);
          }
        }
      }
    };
    window.addEventListener('click', pageClickEvent);

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button onClick={onClick} className={styles.trigger}>
        <span>{auth.user.name}</span>
        <img
          src='https://avatars.githubusercontent.com/u/14037682?v=4'
          alt=''
          className={styles.user_image}
        />
      </button>
      <div className={classNames(styles.menu, isActive ? styles.active : styles.inactive)}>
        <ul ref={linkRef}>
          <li>
            <Link href='/myprojects'>
              <div className={styles.title}>My Projects</div>
              <div className={styles.subtitle}>
                Manage your projects, add new, update project details etc.
              </div>
            </Link>
          </li>
          <li>
            <Link href='/profile'>
              <div className={styles.title}>Profile</div>
              <div className={styles.subtitle}>
                Manage your profile, change password, update notification settings etc.
              </div>
            </Link>
          </li>
          <li>
            <Link href='/exit' method='get' as='a' type='button'>
              <div className={styles.title}>
                <IoLockClosedOutline />
                Logout
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

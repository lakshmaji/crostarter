import { classNames } from '../../utils/styles';
import React, { useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import { Link } from '@inertiajs/inertia-react';
import { IoLockClosedOutline } from '@react-icons/all-files/io5/IoLockClosedOutline';

const DropdownMenu = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive((prev) => !prev);
  };

  // TODO: handle outside click
  // useEffect(() => {
  //   const pageClickEvent = (e: any) => {
  //     // If the active element exists and is clicked outside of
  //     if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
  //       setIsActive((prev) => !prev);
  //     }
  //   };

  //   // If the item is active (ie open) then listen for clicks
  //   if (isActive) {
  //     window.addEventListener('click', pageClickEvent);
  //   }

  //   return () => {
  //     window.removeEventListener('click', pageClickEvent);
  //   };
  // }, [isActive]);

  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.trigger}>
        <span>User</span>
        <img
          src='https://avatars.githubusercontent.com/u/14037682?v=4'
          alt=''
          className={styles.user_image}
        />
      </button>
      <div
        ref={dropdownRef}
        className={classNames(styles.menu, isActive ? styles.active : styles.inactive)}
      >
        <ul>
          <li>
            <Link href='/myprojects'>My Projects</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/exit' method='get' as='a' type='button'>
              <IoLockClosedOutline />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

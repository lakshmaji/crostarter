import { classNames } from '../../../utils/styles';
import React from 'react';
import styles from './profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.container}>
      <section className={styles.sidebar}>
        <h3 className={styles.heading}>Settings</h3>
        <ul>
          <li>
            <a href='http://l.com'>Public Profile</a>
          </li>
          <li>
            <a href='http://l.com'>Account Settings</a>
          </li>
          <li>
            <a href='http://l.com'>Notifications</a>
          </li>
          <li>
            <a href='http://l.com'>PRO Account</a>
          </li>
        </ul>
      </section>
      <section className={styles.account_setting}>
        <h1 className={styles.heading}>Account Settings</h1>
        <div className={classNames(styles.email, styles.section)}>
          <h3 className={styles.sub_heading}>Email address</h3>
          <div className={styles.row}>
            <p>
              Your email address is <span>emailis@private.com</span>
            </p>
            <a href='https://lakki.com'>Change</a>
          </div>
        </div>
        <hr />
        <div className={classNames(styles.password, styles.section)}>
          <div className={styles.row}>
            <h3 className={styles.sub_heading}>Password</h3>
            <div>
              <a href='http://l.com' id='change'>
                Change
              </a>
              <a href='http://l.com' id='hide'>
                Hide
              </a>
            </div>
          </div>
          <div className={styles.row} id='input'>
            <div className={styles.col}>
              <label htmlFor='pwd1'>New password</label>
              <input className={styles.form_input} type='password' name='' id='pwd1' />
            </div>
            <div className={styles.col}>
              <label htmlFor='pwd'>Current password</label>
              <input className={styles.form_input} type='password' name='' id='pwd' />
            </div>
          </div>
          <p id='reset'>
            Can&apos;t remember your current passowrd?{' '}
            <a href='https://lakki.com'>Reset your password</a>
          </p>
          <button type='submit' id='btn'>
            Save password
          </button>
        </div>
        <hr />
        <div className={classNames(styles.delete, styles.section)}>
          <h3 className={styles.sub_heading}>Delete account</h3>
          <p>
            Would you like to delete your account? <br />
            This account contains 1388 posts. Deleting your account will remove all the content
            associated with it.
          </p>
          <a href='https://lakki.com'>I want to delete my account</a>
        </div>
      </section>
    </div>
  );
};

export default Profile;

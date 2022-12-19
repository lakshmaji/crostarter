import React from 'react';
import styles from './newsletter.module.scss';

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cta_box}>
        <div className={styles.cta_box_inner}>
          <div className={styles.col}>
            <h4>Receive Updates</h4>
            <h2>
              CroStarter is designed to fund all your needs. Forgot to mention company or project
              idea, may be your own idea ?
            </h2>
            <div className={styles.form}>
              <form
                id='chimp-form'
                className={styles['subscribe-form']}
                action='assets/php/subscribe.php'
                method='post'
                acceptCharset='UTF-8'
                encType='application/x-www-form-urlencoded'
                autoComplete='off'
                noValidate
              >
                <input
                  className={styles.mail}
                  id='chimp-email'
                  type='email'
                  name='email'
                  placeholder='Type your email address'
                  autoComplete='off'
                />
                <input className={styles['submit-button']} type='submit' value='Subscribe' />
              </form>
              <div id='response'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

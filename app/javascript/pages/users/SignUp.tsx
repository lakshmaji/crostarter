import React, { useEffect } from 'react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, Link } from '@inertiajs/inertia-react';
import styles from './signin.module.scss';
import { classNames } from '../../utils/styles';

interface Props {
  errors: Array<Record<string, string>>;
}

const SignUp: FC<Props> = ({ errors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<{ username: string; password: string }>();

  const onSubmit = (data) => {
    Inertia.post('/users', {
      user: { ...data, password_confirmation: data.password },
    });
  };

  useEffect(() => {
    if (errors) {
      if (Object.keys(errors).length) {
        errors.forEach((err) => {
          const key = Object.keys(err).toString();
          setError(key as 'username' | 'password', {
            type: 'manual',
            message: err[key],
          });
        });
      }
    }
  }, [errors, setError]);

  return (
    <section className={styles.section}>
      <div className={styles.container} id='container'>
        <div className={classNames(styles.form_container, styles.log_in_container)}>
          {JSON.stringify(errors)}
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Create new account</h1>
            <div className={styles.social_container}>
              <InertiaLink href='#' className='social'>
                <i className='fa fa-facebook fa-2x'></i>
              </InertiaLink>
              <InertiaLink href='#' className='social'>
                <i className='fab fa fa-twitter fa-2x'></i>
              </InertiaLink>
            </div>
            <span>or use your account</span>
            <input
              type='text'
              placeholder='user name'
              {...register('username', { required: 'provide user name' })}
            />
            {formErrors.username && <span>{formErrors?.username?.message}</span>}
            <input
              type='password'
              placeholder='Password'
              {...register('password', { required: 'provide password' })}
            />
            {formErrors.password && <span>{formErrors?.password?.message}</span>}
            <Link href='/sessions/new'>login</Link>

            <button>Sign Up</button>
          </form>
        </div>
        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={classNames(styles.overlay_panel, styles.overlay_right)}>
              <h1>HTML CSS Sign up Form</h1>
              <p>
                This login form is created using pure HTML and CSS. For social icons, FontAwesome is
                used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

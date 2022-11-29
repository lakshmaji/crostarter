import React from 'react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import styles from './signin.module.scss';
import { classNames } from '../../utils/styles';

interface Props {
  errors: string;
}

interface SignInFormData {
  username: string;
  password: string;
}
const SignIn: FC<Props> = ({ errors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    Inertia.post('/sessions', { user: data } as unknown as RequestPayload);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} id='container'>
        <div className={classNames(styles.form_container, styles.log_in_container)}>
          {JSON.stringify(errors)}
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div className={styles.social_container}>
              <Link href='#' className='social'>
                <i className='fa fa-facebook fa-2x'></i>
              </Link>
              <Link href='#' className='social'>
                <i className='fab fa fa-twitter fa-2x'></i>
              </Link>
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
            <Link href='/users/new'>New? Create account</Link>
            <button>Log In</button>
          </form>
        </div>
        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={classNames(styles.overlay_panel, styles.overlay_right)}>
              <h1>HTML CSS Login Form</h1>
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

export default SignIn;

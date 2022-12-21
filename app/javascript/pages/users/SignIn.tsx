import React from 'react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import styles from './signin.module.scss';
import { classNames } from '../../utils/styles';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';

interface Props {
  errors: string;
}

interface SignInFormData {
  username: string;
  password: string;
}
const SignIn: FC<Props> = () => {
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
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div className={styles.social_container}>
              <Link href='/' className={styles.social}>
                <IoLogoFacebook size={40} />
              </Link>
              <Link href='/' className={styles.social}>
                <IoLogoTwitter size={40} />
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

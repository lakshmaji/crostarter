import React, { useEffect } from 'react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { InertiaLink, Link } from '@inertiajs/inertia-react';
import styles from './signin.module.scss';
import { classNames } from '../../utils/styles';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';

interface Props {
  errors: Array<Record<string, string>>;
}

interface SignUpFormData {
  username: string;
  password: string;
}
const SignUp: FC<Props> = ({ errors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    const payload = {
      user: {
        username: data.username,
        password: data.password,
        password_confirmation: data.password,
      },
    } as unknown as RequestPayload;
    Inertia.post('/users', payload);
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
              <InertiaLink href='/' className={styles.social}>
                <IoLogoFacebook size={40} />
              </InertiaLink>
              <InertiaLink href='/' className={styles.social}>
                <IoLogoTwitter size={40} />
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

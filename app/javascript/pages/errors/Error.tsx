import React, { FC } from 'react';
import styles from './error.module.scss';

const title: Record<number, string> = {
  503: '503: Service Unavailable',
  500: '500: Server Error',
  404: '404: Page Not Found',
  403: '403: Forbidden',
};

const description: Record<number, string> = {
  503: 'Sorry, we are doing some maintenance. Please check back soon.',
  500: 'Whoops, something went wrong on our servers.',
  404: 'Sorry, the page you are looking for could not be found.',
  403: 'Sorry, you are forbidden from accessing this page.',
};

const NO_OF_PARTICLES = 40;
interface Props {
  status: number;
}
const Error: FC<Props> = ({ status }) => {
  const particles = status
    .toString()
    .split('')
    .reduce<string[]>((acc, num) => {
      if (acc.includes(num)) {
        return acc;
      }
      return [...acc, num];
    }, [])
    .map((num) => Array(NO_OF_PARTICLES).fill(num))
    .flat();
  return (
    <main className={styles.container}>
      {particles.map((particle) => {
        return (
          <span key={particle} className={styles.particle}>
            {particle}
          </span>
        );
      })}

      <article className={styles.content}>
        <p>{title[status]},</p>
        <p>{description[status]}</p>
        <p>
          <button>Go back to earth.</button>
        </p>
      </article>
    </main>
  );
};

export default Error;

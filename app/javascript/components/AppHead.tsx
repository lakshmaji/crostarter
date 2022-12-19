import React, { FC, ReactNode } from 'react';
import { Head } from '@inertiajs/inertia-react';

const APP_NAME = 'Crostarter';
interface Props {
  title: string;
  children: ReactNode;
}
const AppHead: FC<Props> = ({ title, children }) => {
  //   TODO: once react 18 types had fix, will uncomment following code
  // https://github.com/framer/motion/issues/1509
  return React.createElement(
    Head,
    null,
    React.createElement('title', null, title ? `${title} - ${APP_NAME}` : APP_NAME),
    children,
  );
};

export default AppHead;

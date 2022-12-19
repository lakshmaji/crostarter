import { Link } from '@inertiajs/inertia-react';
import { IPagy } from '../../models/pagination';
import React, { FC } from 'react';
import styles from './pagination.module.scss';

interface Props {
  meta: IPagy;
}
const Pagination: FC<Props> = ({ meta }) => {
  const url = (pageNumber: number) => {
    return pageNumber ? meta.scaffold_url.replace(/__pagy_page__/, pageNumber.toString()) : null;
  };
  const active = (pageNumber: number) => {
    return meta.page == pageNumber;
  };

  const links = [
    {
      label: 'Previous',
      url: url(meta.prev),
    },
    ...meta.series.map((page) => {
      return {
        label: page,
        url: url(+page),
        active: active(+page),
      };
    }),
    {
      label: 'Next',
      url: url(meta.next),
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <div key={link.label} className={styles.element}>
            {link.label === 'gap' && <div>...</div>}
            {link.url === null && <div>{link.label}</div>}
            {link.url !== null && <Link href={link.url}>{link.label}</Link>}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;

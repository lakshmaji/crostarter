import React, { FC } from 'react';
import styles from './featured-categories.module.scss';
import { Category } from '../../../models/category';
import { Link } from '@inertiajs/inertia-react';

interface Props {
  categories: Category[];
}
const FeaturedCategories: FC<Props> = ({ categories }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div className={styles.title_wrapper}>
              <span className={styles.subtitle}>here are available what you need</span>
              <h2 className={styles.title}>Popular Categories</h2>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          {categories.map((category) => {
            return (
              <div className={styles.card} key={category.id}>
                <div className={styles.container}>
                  <div className={styles.header}>
                    <Link href='/categories' className={styles.picture_link}>
                      <img
                        src='https://themezhub.net/odex-live/odex/assets/img/c-1.png'
                        alt=''
                        className={styles.picture}
                      />
                    </Link>
                  </div>
                  <div className={styles.link_wrapper}>
                    <h4 className={styles.category}>
                      <Link href='/' className={styles.link_text}>
                        {category.name}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}

          <div className={styles.footer}>
            <Link as='button' className={styles.explore} href='/categories'>
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

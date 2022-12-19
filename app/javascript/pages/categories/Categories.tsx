import React from 'react';
import type { FC } from 'react';
import styles from './categories.module.scss';
import Masonry from 'react-masonry-css';
import { IoTrainOutline } from '@react-icons/all-files/io5/IoTrainOutline';
import { faker } from '@faker-js/faker';
import AppHead from '../../components/AppHead';
import { ICategory } from '../../models/category';

const COLOR_CODES = [
  '#ff9f00',
  '#ff5f8b',
  '#0197f6',
  '#8922d5',

  '#E5BA73',
  '#6D67E4',
  '#DBA39A',
  '#DBA39A',
  '#C539B4',
  '#FF8FB1',
  '#3A8891',
  '#FF5858',
  '#31E1F7',
  '#002B5B',
];

interface Props {
  categories: ICategory[];
}

const Categories: FC<Props> = (props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <AppHead title='Home'>
        <meta
          name='description'
          content='Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. Explore categories.'
        />
      </AppHead>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <div className={styles.slider_wrapper}>
              Categories
              {/* <div className={styles.slider}>
                {props.categories.map((item, i) => {
                  return (
                    <div
                      className={classNames(
                        i === 0 ? styles.slider_text1 : '',
                        styles.slider_text2,
                      )}
                      key={item.id}
                      style={{
                        // background: faker.helpers.arrayElement(COLOR_CODES),
                        color: faker.helpers.arrayElement(COLOR_CODES),
                        // borderBottom: `2px dashed ${faker.helpers.arrayElement(COLOR_CODES)}`,
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div> */}
            </div>
            <p>Lorem ipsum adipisicing elit. Reprehenderit magnam laboriosam, , minima laborum.</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.my_masonry_grid}
            columnClassName={styles.my_masonry_grid_column}
          >
            {props.categories.map((item) => {
              return (
                <div
                  key={item.id}
                  className={styles.item}
                  style={{
                    background: faker.helpers.arrayElement(COLOR_CODES),
                  }}
                >
                  <IoTrainOutline size={82} className={styles.icon} />
                  <div className={styles.text}>{item.name}</div>
                  <p className={styles.desc}>{faker.lorem.sentence()}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
      </section>
    </>
  );
};

export default Categories;

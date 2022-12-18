import { Category } from '../../models/category';
import React, { FC } from 'react';
import { IoChevronForwardCircle } from '@react-icons/all-files/io5/IoChevronForwardCircle';
import CompaniesList from './CompaniesList';
import FaeturedCat from './FaeturedCat';
import FeaturedProjects from './FeaturedProjects';
import styles from './home.module.scss';
import HowItWorks from './HowItWorks';
import RecommendedProjects from './RecommendedProjects';
import Stats from './stats';
import { IProject } from '../../models/project';

interface Props {
  categories: Category[];
  trending_projects: IProject[];
  recommended_projects: IProject[];
}

const Home: FC<Props> = ({ categories, trending_projects, recommended_projects }) => {
  // function renderIcon(step: any) {
  //   const Com = step.icon;
  //   return (
  //     <div className={styles.icon}>
  //       <Com />
  //     </div>
  //   );
  // }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.header_body}>
                <h1 className={styles.title}>Crowd funding</h1>
                <p className={styles.tag_line}>
                  Lorem ipsum sit amet consectetur dolor, adipiscing elit.
                </p>
                <div className={styles.footer}>
                  <a href='/projects' className={styles.btn}>
                    {/* <span className={styles.icon} > */}
                    {/* </span> */}
                    Get Started
                    <IoChevronForwardCircle className={styles.btn_icon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.picture}>
              <img
                src='https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg'
                alt='Mobirise'
                className={styles.avatar}
              />
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <FeaturedProjects trending_projects={trending_projects} />
      <HowItWorks />
      {/* <section>
        <div className={styles.how_it_works}>
          {[
            {
              title: 'register',
              description: faker.commerce.productDescription(),
              icon: IoAddCircleSharp,
              btnText: '',
              btnAction: '',
            },
            {
              title: 'post',
              description: faker.commerce.productDescription(),
              icon: IoBusiness,
              btnText: '',
              btnAction: '',
            },
            {
              title: 'fund',
              description: faker.commerce.productDescription(),
              icon: IoLogoUsd,
              btnText: '',
              btnAction: '',
            },
          ].map((step) => {
            return (
              <div key={step.title} className={styles.card_wrapper}>
                <div className={styles.card}>
                  <div className={styles.header}>{renderIcon(step)}</div>
                  <div className={styles.body}>
                    <h4 className={styles.title}>{step.title}</h4>
                    <p>{step.description}</p>
                    <a href='/' className={styles.btn}>
                    read more
                  </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}
      <FaeturedCat categories={categories} />

      <RecommendedProjects recommended_projects={recommended_projects} />
      <CompaniesList />
    </>
  );
};

export default Home;

import { faker } from '@faker-js/faker';
import React from 'react';
import {
  IoAddCircleSharp,
  IoBusiness,
  IoChevronForwardCircle,
  IoCloudUploadOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoUsd,
  IoNotificationsOutline,
  IoNotificationsSharp,
} from 'react-icons/io5';
import CompaniesList from './CompaniesList';
import FaeturedCat from './FaeturedCat';
import FeaturedProjects from './FeaturedProjects';
import styles from './home.module.scss';
import HowItWorks from './HowItWorks';
import RecommendedProjects from './RecommendedProjects';
import Stats from './stats';

const Home = () => {
  function renderIcon(step: any) {
    const Com = step.icon;
    return (
      <div className={styles.icon}>
        <Com />
      </div>
    );
  }
  return (
    <>
      <section className={styles.container}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.header}>
              <div className={styles.header_body}>
                <h1 className={styles.title}>Illustration Design</h1>
                <p className={styles.tag_line}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={styles.footer}>
                  <a href='/' className={styles.btn}>
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
      <FeaturedProjects />
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
      <FaeturedCat />

      <RecommendedProjects />
      <CompaniesList />
    </>
  );
};

export default Home;

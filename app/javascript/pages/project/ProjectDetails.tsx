import { InertiaLink } from '@inertiajs/inertia-react';
import { IProject } from 'app/javascript/models/project';
import React, { FC, Suspense } from 'react';
import { classNames } from '../../utils/styles';
import styles from './project-details.module.scss';
import { IoPhonePortraitOutline } from '@react-icons/all-files/io5/IoPhonePortraitOutline';
import { IoDesktopSharp } from '@react-icons/all-files/io5/IoDesktopSharp';
import { IoLogoUsd } from '@react-icons/all-files/io5/IoLogoUsd';
import { IoChatbubblesOutline } from '@react-icons/all-files/io5/IoChatbubblesOutline';
import AppHead from '../../components/AppHead';

const ProjectStats = React.lazy(() => import('./ProjectStats'));

interface Props {
  project: IProject;
}
const ProjectDetails: FC<Props> = ({ project }) => {
  return (
    <>
      <AppHead title='Home'>
        <meta
          name='description'
          content={`Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. View ${project.title}`}
        />
      </AppHead>
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <div className={styles.f_image}>
                <img
                  className={styles.image}
                  src='http://ydirection.com/Fold/assets/images/dead.gif'
                  alt='Feature'
                />
              </div>
            </div>
            <div className={styles.yd_flex_2}>
              <h3 className={styles.subtitle}>{project.category?.name}</h3>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>
              <button className={styles.contribute}>Contribute</button>
            </div>
          </div>
        </div>
      </section>
      <section className={classNames(styles.section, styles.bg_blue)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <div className={styles.flex_content}>
                <h2>Mobile Integration</h2>
                <p>
                  Grow your business with our secure storage, powerful computing, and integrated
                  analytics at affordable price.
                </p>
                <InertiaLink className={classNames(styles.btn_action, styles.btn_alt)} href='#'>
                  Get Started
                </InertiaLink>
              </div>
            </div>
            <div className={styles.yd_flex_2}>
              <div className={styles.flex_main}>
                <div className={styles.flex_sub}>
                  <div className={styles.sub_image}>
                    <IoPhonePortraitOutline size={45} color='#fff' />
                  </div>
                  <div className={styles.sub_text}>
                    <h4>Go Mobile</h4>
                    <p className='d-none d-md-block'>
                      Some lorem ipsum text filler lorem ipsum text
                    </p>
                  </div>
                </div>
                <div className={styles.flex_sub}>
                  <div className={styles.sub_image}>
                    <IoDesktopSharp size={45} color='#fff' />
                  </div>
                  <div className={styles.sub_text}>
                    <h4>Video</h4>
                    <p className='d-none d-md-block'>
                      Some lorem ipsum text filler lorem ipsum text
                    </p>
                  </div>
                </div>
                <div className={styles.flex_sub}>
                  <div className={styles.sub_image}>
                    <IoLogoUsd size={45} color='#fff' />
                  </div>
                  <div className={styles.sub_text}>
                    <h4>Asset Track</h4>
                    <p className='d-none d-md-block'>
                      Some lorem ipsum text filler lorem ipsum text
                    </p>
                  </div>
                </div>
                <div className={styles.flex_sub}>
                  <div className={styles.sub_image}>
                    <IoChatbubblesOutline size={45} color='#fff' />
                  </div>
                  <div className={styles.sub_text}>
                    <h4>Profiling</h4>
                    <p className='d-none d-md-block'>
                      Some lorem ipsum text filler lorem ipsum text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <h3 className={styles.subtitle}>{project.category?.name}</h3>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.description}>{project.details}</p>
              {/* <button className={styles.contribute}>Contribute</button> */}
              <p>The contributions graph</p>
            </div>
            <div className={styles.yd_flex_2}>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectStats />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <div className={styles.yd_flex}>
            <div className={styles.yd_flex_1}>
              <h2 className={styles.title}>Reward options</h2>
              <h3 className={styles.subtitle}>{project.category?.name}</h3>
              <p className={styles.description}>{project.details}</p>
              {/* <button className={styles.contribute}>Contribute</button> */}
              <p>The contributions graph</p>
            </div>
            <div className={styles.yd_flex_2}>form with prefilled data with chosen reward</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
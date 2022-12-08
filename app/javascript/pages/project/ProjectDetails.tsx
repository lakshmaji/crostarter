import { InertiaLink } from '@inertiajs/inertia-react';
import { IProject } from 'app/javascript/models/project';
import React, { FC, Suspense } from 'react';
import { classNames } from '../../utils/styles';
import styles from './project-details.module.scss';

const ProjectStats = React.lazy(() => import('./ProjectStats'));

interface Props {
  project: IProject;
}
const ProjectDetails: FC<Props> = ({ project }) => {
  return (
    <>
      <section>
        <div className={classNames(styles.ft_single, styles.bg_white)}>
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
        </div>
      </section>
      <section>
        <div className={styles.ft_single}>
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
                      <i
                        className={classNames('fa fa-mobile', styles.size_xl)}
                        aria-hidden='true'
                      ></i>
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
                      <i
                        className={classNames('fa fa-video-camera', styles.size_xl)}
                        aria-hidden='true'
                      ></i>
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
                      <i
                        className={classNames('fa fa-map-marker', styles.size_xl)}
                        aria-hidden='true'
                      ></i>
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
                      <i
                        className={classNames('fa fa-comments', styles.size_xl)}
                        aria-hidden='true'
                      ></i>
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
        </div>
      </section>
      <section>
        <div className={classNames(styles.ft_single, styles.bg_white)}>
          <div className={styles.container}>
            <div className={styles.yd_flex}>
              <div className={styles.yd_flex_1}>
                <h3 className={styles.subtitle}>{project.category?.name}</h3>
                <h2 className={styles.title}>title comes here</h2>
                <p className={styles.description}>
                  {project.details}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, sit. At
                  provident veniam maiores, iusto odio minus inventore saepe nesciunt unde
                  aspernatur fugiat, voluptates in obcaecati magni perferendis quisquam tempore.
                </p>
                <button className={styles.contribute}>Contribute</button>
              </div>
              <div className={styles.yd_flex_2}>
                <Suspense fallback={<div>Loading...</div>}>
                  <ProjectStats />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;

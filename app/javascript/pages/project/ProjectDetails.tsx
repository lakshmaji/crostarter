import { InertiaLink } from '@inertiajs/inertia-react';
import React, { Suspense } from 'react';
import { classNames } from '../../utils/styles';
import styles from './project-details.module.scss';

const ProjectStats = React.lazy(() => import('./ProjectStats'));

const ProjectDetails = () => {
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
                <h3 className={styles.subtitle}>category</h3>
                <h2 className={styles.title}>title comes here</h2>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum hic qui
                  laborum repudiandae ipsa porro ab facere, perspiciatis, voluptatibus explicabo
                  praesentium blanditiis. Odit voluptatem porro ullam, numquam expedita ipsa! Nam
                  modi odio earum debitis, voluptatum laborum atque consectetur labore sapiente at?
                  Quam dolorem aut voluptatem sapiente odit laudantium illo veritatis praesentium
                  dolor, debitis adipisci quo qui vitae animi quae. Hic voluptas ad, possimus
                  distinctio esse quas exercitationem vel minima quibusdam molestias nostrum, a
                  incidunt ab sit rerum voluptates aperiam minus sunt distinctio praesentium! Enim
                  corrupti atque odit nostrum architecto reiciendis inventore impedit? Odio
                  provident possimus dolor ea natus sunt officia vel dolores, tempore quae suscipit
                  sed rem maiores esse aut? Cum, assumenda id! Nemo et asperiores laborum laudantium
                  fugit aliquam eaque veritatis.
                </p>
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
                <h3 className={styles.subtitle}>category</h3>
                <h2 className={styles.title}>title comes here</h2>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum hic qui
                  laborum repudiandae ipsa porro ab facere, perspiciatis, voluptatibus explicabo
                  praesentium blanditiis. Odit voluptatem porro ullam, numquam expedita ipsa! Nam
                  modi odio earum debitis, voluptatum laborum atque consectetur labore sapiente at?
                  Quam dolorem aut voluptatem sapiente odit laudantium illo veritatis praesentium
                  dolor, debitis adipisci quo qui vitae animi quae. Hic voluptas ad, possimus
                  distinctio esse quas exercitationem vel minima quibusdam molestias nostrum, a
                  incidunt ab sit rerum voluptates aperiam minus sunt distinctio praesentium! Enim
                  corrupti atque odit nostrum architecto reiciendis inventore impedit? Odio
                  provident possimus dolor ea natus sunt officia vel dolores, tempore quae suscipit
                  sed rem maiores esse aut? Cum, assumenda id! Nemo et asperiores laborum laudantium
                  fugit aliquam eaque veritatis.
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

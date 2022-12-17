import { classNames } from '../../../utils/styles';
import React from 'react';
import styles from './projects.module.scss';
import Banana from './Banana';

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.row, styles.row__top_40)}>
        <div className={styles.col_md_12}>
          <h2 className={styles.row__title}>Projects (7)</h2>
        </div>
      </div>
      <div className={classNames(styles.row, styles.row__top_20)}>
        <div className={styles.col_md_12}>
          <div className={styles.table_container}>
            <table className={styles.table}>
              <thead className={styles.table__thead}>
                <tr>
                  <th className={styles.table__th}>Name</th>
                  <th className={styles.table__th}>Policy</th>
                  <th className={styles.table__th}>Policy status</th>
                  <th className={styles.table__th}>Destination</th>
                  <th className={styles.table__th}>Status</th>
                  <th className={styles.table__th}>Progress</th>
                  <th className={styles.table__th} />
                </tr>
              </thead>
              <tbody className={styles.table__tbody}>
                <tr className={classNames(styles.table_row, styles.table_row__chris)}>
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Christin Ericssen</p>
                      <span className={styles.table_row__small}>CFO</span>
                    </div>
                  </td>
                  <td data-column='Policy' className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$5,000</p>
                      <span className={styles.table_row__small}>Basic Policy</span>
                    </div>
                  </td>
                  <td data-column='Policy status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__green,
                        styles.status,
                      )}
                    >
                      Approved
                    </p>
                  </td>
                  <td data-column='Destination' className={styles.table_row__td}>
                    Huston, US
                  </td>
                  <td data-column='Status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__status,
                        styles.status__green,
                        styles.status,
                      )}
                    >
                      Active
                    </p>
                  </td>
                  <td data-column='Progress' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status__blue,
                        styles.status,
                      )}
                    >
                      On Track
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>
                <tr className={classNames(styles.table_row, styles.table_row__angie)}>
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Angie E. Swift</p>
                      <span className={styles.table_row__small}>Vp of Sales</span>
                    </div>
                  </td>
                  <td data-column='Policy' className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$20,000</p>
                      <span className={styles.table_row__small}>All Inclusive Policy</span>
                    </div>
                  </td>
                  <td data-column='Policy Status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status,
                        styles.status__yellow,
                      )}
                    >
                      Awating Approval
                    </p>
                  </td>
                  <td data-column='Destination' className={styles.table_row__td}>
                    Huston, US
                  </td>
                  <td data-column='Status' className={styles.table_row__td}>
                    <p className={styles.table_row__status}>Waiting</p>
                  </td>
                  <td data-column='Progress' className={styles.table_row__td}>
                    <p className={styles.table_row__progress}>Waiting</p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>

                <tr className={classNames(styles.table_row, styles.table_row__ronald)}>
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Ronals Koeman</p>
                      <span className={styles.table_row__small}>Advisory board</span>
                    </div>
                  </td>
                  <td className={styles.table_row__td}>
                    <div data-column='Policy'>
                      <p className={styles.table_row__policy}>$5,000</p>
                      <span className={styles.table_row__small}>Basic Policy</span>
                    </div>
                  </td>
                  <td data-column='Policy status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__green,
                        styles.status,
                      )}
                    >
                      Approved
                    </p>
                  </td>
                  <td data-column='destination' className={styles.table_row__td}>
                    Huston, US
                  </td>
                  <td data-column='status' className={styles.table_row__td}>
                    <p className={styles.table_row__status}>Canceled</p>
                  </td>
                  <td data-column='pregress' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status__blue,
                        styles.status,
                      )}
                    >
                      Canceled
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>

                <tr
                  className={classNames(
                    styles.table_row,
                    styles.table_row__june,
                    styles.table_row__red,
                  )}
                >
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>June Simmons</p>
                      <span className={styles.table_row__small}>Social content manager</span>
                    </div>
                  </td>
                  <td data-column='Policy' className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$5,000</p>
                      <span className={styles.table_row__small}>Basic Policy</span>
                    </div>
                  </td>
                  <td data-column='Policy status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__red,
                        styles.status,
                      )}
                    >
                      Rejected
                    </p>
                  </td>
                  <td data-column='destination' className={styles.table_row__td}>
                    Huston, US
                  </td>
                  <td data-column='status' className={styles.table_row__td}>
                    <p className={styles.table_row__status}>Rejected</p>
                  </td>
                  <td data-column='progress' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status,
                        styles.status__red,
                      )}
                    >
                      Overdue
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>

                <tr className={classNames(styles.table_row, styles.table_row__ben)}>
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Ben West</p>
                      <span className={styles.table_row__small}>Account manager</span>
                    </div>
                  </td>
                  <td data-column='Policy' className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$25,000</p>
                      <span className={styles.table_row__small}>Basic Policy</span>
                    </div>
                  </td>
                  <td data-column='Policy status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__yellow,
                        styles.status,
                      )}
                    >
                      Awating Approval
                    </p>
                  </td>
                  <td data-column='destination' className={styles.table_row__td}>
                    Boston, US
                  </td>
                  <td data-column='status' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__status,
                        styles.status__green,
                        styles.status,
                      )}
                    >
                      Active
                    </p>
                  </td>
                  <td data-column='progress' className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status__blue,
                        styles.status,
                      )}
                    >
                      On track
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>

                <tr
                  className={classNames(
                    styles.table_row,
                    styles.table_row__red,
                    styles.table_row__natalie,
                  )}
                >
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Natalie Quest</p>
                      <span className={styles.table_row__small}>Social content manager</span>
                    </div>
                  </td>
                  <td className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$30,000</p>
                      <span className={styles.table_row__small}>All Inclusive Policy</span>
                    </div>
                  </td>
                  <td className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__red,
                        styles.status,
                      )}
                    >
                      Rejected
                    </p>
                  </td>
                  <td className={styles.table_row__td}>Huston, US</td>
                  <td className={styles.table_row__td}>
                    <p className={styles.table_row__status}>Rejected</p>
                  </td>
                  <td className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status__red,
                        styles.status,
                      )}
                    >
                      Overdue
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>
                <tr className={classNames(styles.table_row, styles.table_row__thomas)}>
                  <td className={styles.table_row__td}>
                    <div className={styles.table_row__img} />
                    <div className={styles.table_row__info}>
                      <p className={styles.table_row__name}>Thomas Perez</p>
                      <span className={styles.table_row__small}>CEO</span>
                    </div>
                  </td>
                  <td className={styles.table_row__td}>
                    <div>
                      <p className={styles.table_row__policy}>$45,000</p>
                      <span className={styles.table_row__small}>All Inclusive Policy</span>
                    </div>
                  </td>
                  <td className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__p_status,
                        styles.status__green,
                        styles.status,
                      )}
                    >
                      Approved
                    </p>
                  </td>
                  <td className={styles.table_row__td}>New York, US</td>
                  <td className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__status,
                        styles.status,
                        styles.status__green,
                      )}
                    >
                      Active
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <p
                      className={classNames(
                        styles.table_row__progress,
                        styles.status,
                        styles.status__green,
                      )}
                    >
                      Done
                    </p>
                  </td>
                  <td className={styles.table_row__td}>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Edit'
                      version='1.1'
                      className={styles.table_row__edit}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512.001 512.001'
                      style={{ enableBackground: 'new 0 0 512.001 512.001' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M496.063,62.299l_46.396_46.4c_21.2_21.199_55.69_21.198_76.888,0l_18.16,18.161l123.284,123.294l18.16_18.161    C517.311,117.944,517.314,83.55,496.063,62.299z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          <path
                            d='M22.012,376.747L0.251,494.268c_0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512_21.763L22.012,376.747z'
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <polygon
                            points='333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   '
                            style={{ fill: 'rgb(1, 185, 209)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                    <svg
                      data-toggle='tooltip'
                      data-placement='bottom'
                      title='Delete'
                      version='1.1'
                      className={styles.table_row__bin}
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      x='0px'
                      y='0px'
                      viewBox='0 0 512 512'
                      style={{ enableBackground: 'new 0 0 512 512' }}
                      xmlSpace='preserve'
                    >
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M436,60h_90V45c0_24.813_20.187_45_45_45h_90c_24.813,0_45,20.187_45,45v15H76c_24.813,0_45,20.187_45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693_17.594,44.815_40.926c0.004_0.043,0.008_0.086,0.011_0.129L449.817,150H466c8.284,0,15_6.716,15_15v_30    C481,80.187,460.813,60,436,60z M196,45c0_8.271,6.729_15,15_15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c_0.729,7.753_7.142,13.592_14.934,13.592H133.396c_7.792,0_14.204_5.839_14.934_13.592L92.284,150h327.432L393.537,468.408z     M451,120h_15H76H61v_15c0_8.271,6.729_15,15_15h105h150h105c8.271,0,15,6.729,15,15V120z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M256,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C271,186.716,264.284,180,256,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M346,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C361,186.716,354.284,180,346,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g>
                        {' '}
                        <g>
                          {' '}
                          <path
                            d='M166,180c_8.284,0_15,6.716_15,15v212c0,8.284,6.716,15,15,15s15_6.716,15_15V195C181,186.716,174.284,180,166,180z'
                            style={{ fill: 'rgb(158, 171, 180)' }}
                          />{' '}
                        </g>
                      </g>
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                      <g />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <Banana />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import styles from './categories.module.scss';
import { IoTrainOutline } from '@react-icons/all-files/io5/IoTrainOutline';
import { classNames } from '../../../utils/styles';

const SampleNextArrow: FC<any> = (props): JSX.Element => {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classNames(className, styles.arrow_color)}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      role='menu'
      tabIndex={0}
    />
  );
};

const SamplePrevArrow: FC<any> = (props): JSX.Element => {
  const { className, style, onClick } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classNames(className, styles.arrow_color)}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      role='menu'
      tabIndex={0}
    ></div>
  );
};

interface Props {
  // FIXME:
  items: any[];
}
const Categories: FC<Props> = ({ items }) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    className: styles.banana,
    focusOnSelect: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slick_slide}>
        {items.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <IoTrainOutline size={22} className={styles.icon} />
              <div className={styles.text}>{item.name}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Categories;

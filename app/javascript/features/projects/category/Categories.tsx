import React, { FC, useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import styles from './categories.module.scss';
import { IoTrainOutline } from '@react-icons/all-files/io5/IoTrainOutline';
import { classNames } from '../../../utils/styles';
import { ICategory } from '../../../models/category';
import { IoChevronForwardCircleOutline } from '@react-icons/all-files/io5/IoChevronForwardCircleOutline';
import { IoChevronBackCircleOutline } from '@react-icons/all-files/io5/IoChevronBackCircleOutline';

interface Props {
  items: ICategory[];
}
// const SampleNextArrow: FC<any> = (props): JSX.Element => {
//   const { className, style, onClick } = props;
//   return (
//     // eslint-disable-next-line jsx-a11y/click-events-have-key-events
//     <div
//       className={classNames(className, styles.arrow_color)}
//       style={{ ...style, display: 'block' }}
//       onClick={onClick}
//       role='menu'
//       tabIndex={0}
//     />
//   );
// };

// const SamplePrevArrow: FC<any> = (props): JSX.Element => {
//   const { className, style, onClick } = props;
//   return (
//     // eslint-disable-next-line jsx-a11y/click-events-have-key-events
//     <div
//       className={classNames(className, styles.arrow_color)}
//       style={{ ...style, display: 'block' }}
//       onClick={onClick}
//       role='menu'
//       tabIndex={0}
//     ></div>
//   );
// };

// // TODO: use this to get ssr addition
// // https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu
// const Categories: FC<Props> = ({ items }) => {
//   const settings: Settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     centerMode: false,
//     prevArrow: <SamplePrevArrow />,
//     nextArrow: <SampleNextArrow />,
//     className: styles.banana,
//     focusOnSelect: true,
//   };
//   return (
//     <div className={styles.container}>
//       <Slider {...settings} className={styles.slick_slide}>
//         {items.map((item) => {
//           return (
//             <div key={item.id} className={styles.item}>
//               <IoTrainOutline size={22} className={styles.icon} />
//               <div className={styles.text}>{item.name}</div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>
//   );
// };

const Left: FC<{ slide: (v: number) => void }> = ({ slide }) => {
  return (
    <span className={styles.handler}>
      <IoChevronBackCircleOutline className={styles.icon} size={22} onClick={() => slide(-50)} />
    </span>
  );
};

const Right: FC<{ slide: (v: number) => void }> = ({ slide }) => {
  return (
    <span className={styles.handler}>
      <IoChevronForwardCircleOutline className={styles.icon} size={22} onClick={() => slide(50)} />
    </span>
  );
};

const Tag: FC<{ active: boolean; item: ICategory; onClick: (id: number) => void }> = ({
  item,
  onClick,
  active,
}) => {
  return (
    <div
      className={classNames(styles.item, active ? styles.active : '')}
      onClick={() => onClick(+item.id)}
      aria-hidden='true'
    >
      <span className={styles.content}>
        <IoTrainOutline size={22} className={styles.icon} />
        <div className={styles.text}>{item.name}</div>
      </span>
    </div>
  );
};

const Filters = () => {
  return <div className={styles.filters}>Filters</div>;
};

const Categories: FC<Props> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // For detecting start scroll position
  const [scrollX, setScrollX] = useState(0);
  // For detecting end of scrolling
  const [scrollEnd, setScrollEnd] = useState(false);
  const [current, setCurrent] = useState(+items[0].id);

  const choose = (id: number) => {
    setCurrent(id);
  };
  useEffect(() => {
    //Check width of the scrolling
    if (scrollRef.current && scrollRef?.current?.scrollWidth === scrollRef?.current?.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }, []);

  const slide = (to: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += to;
      setScrollX(scrollX + to); // Updates the latest scrolled postion

      //For checking if the scroll has ended
      if (
        Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
        scrollRef.current.offsetWidth
      ) {
        setScrollEnd(true);
      } else {
        setScrollEnd(false);
      }
    }
  };
  return (
    <div className={styles.container}>
      {scrollX !== 0 && <Left slide={slide} />}
      <div className={styles.list} ref={scrollRef}>
        {items.map((item) => {
          return <Tag key={item.id} item={item} onClick={choose} active={current === +item.id} />;
        })}
      </div>
      {!scrollEnd && <Right slide={slide} />}
      <Filters />
    </div>
  );
};

export default Categories;

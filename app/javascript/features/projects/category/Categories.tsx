import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './categories.module.scss';
import { IoTrainOutline } from '@react-icons/all-files/io5/IoTrainOutline';
import { classNames } from '../../../utils/styles';
import { ICategory } from '../../../models/category';
import { IoChevronForwardCircleOutline } from '@react-icons/all-files/io5/IoChevronForwardCircleOutline';
import { IoChevronBackCircleOutline } from '@react-icons/all-files/io5/IoChevronBackCircleOutline';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia, Page, PageProps, RequestPayload } from '@inertiajs/inertia';
import usePrevious from '../../../hooks/usePrevious';
import { deepEqual } from '../../../utils/helpers';

interface Props {
  items: ICategory[];
}

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

interface ProjectsPageProps extends PageProps {
  filters: { category: string };
}

const Categories: FC<Props> = ({ items }) => {
  const { filters } = usePage<Page<ProjectsPageProps>>().props;
  const [values, setValues] = useState({
    category: filters.category || '',
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  // For detecting start scroll position
  const [scrollX, setScrollX] = useState(0);
  // For detecting end of scrolling
  const [scrollEnd, setScrollEnd] = useState(false);
  const [current, setCurrent] = useState<number>();

  const prevValues = usePrevious(values);

  useEffect(() => {
    if (prevValues) {
      // If any changes in filter values, then request for information
      if (!deepEqual(prevValues, values)) {
        const query = values.category ? { category: values.category } : {};
        Inertia.get('projects', query as RequestPayload, {
          replace: true,
          preserveState: true,
        });
      }
    }
  }, [prevValues, values]);

  const choose = (id: number) => {
    setCurrent(id);
    setValues((prev) => ({
      ...prev,
      category: id.toString(),
    }));
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

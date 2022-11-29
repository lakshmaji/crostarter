import React from 'react';
import type { FC } from 'react';

interface Props {
  // FIXME:
  category: any;
}

const Categories: FC<Props> = (props) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Categories;

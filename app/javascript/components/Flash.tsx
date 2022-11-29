import React from 'react';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react';

export const Flash = () => {
  const { flash } = usePage<any>().props;

  return (
    <>
      {flash.message && <div className='alert'>{flash.message}</div>}

      {flash.alert && <div className='alert'>{flash.alert}</div>}
    </>
  );
};

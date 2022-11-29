import React from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { UsePageProps } from '../inertia';
import { Page } from '@inertiajs/inertia';

export const Flash = () => {
  const { flash } = usePage<Page<UsePageProps>>().props;

  return (
    <>
      {flash.message && <div className='alert'>{flash.message}</div>}

      {flash.alert && <div className='alert'>{flash.alert}</div>}
    </>
  );
};

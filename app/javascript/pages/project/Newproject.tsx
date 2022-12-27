import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { ICategory } from '../../models/category';
import React, { FC } from 'react';
import CreateOrEditProject, { FormSubmitData, IProjectFormData } from './CreateOrEditProject';

interface Props {
  errors: Array<Record<string, string>>;
  categories: ICategory[];
}

const NewProject: FC<Props> = ({ errors, categories }) => {
  const defaultValues: IProjectFormData = {
    title: '',
    website: '',
    description: '',
    end_date: '',
    funding_goal: 0,
    details: '',
    category_id: '',
    funded: 0,
    tagline: '',
    rewards_attributes: [],
    picture: undefined,
  };

  const onSubmit = (data: FormSubmitData) => {
    Inertia.post('/projects', {
      project: {
        ...data,
        ...(data.picture?.length && { avatar: data.picture[0] }),
      },
    } as unknown as RequestPayload);
  };

  return (
    <CreateOrEditProject
      defaultValues={defaultValues}
      categories={categories}
      errors={errors}
      onSubmitHandler={onSubmit}
    />
  );
};

export default NewProject;

import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { ICategory } from '../../models/category';
import React, { FC } from 'react';
import CreateOrEditProject, { IProjectFormData } from './CreateOrEditProject';

interface Props {
  errors: Array<Record<string, string>>;
  categories: ICategory[];
}

const NewProject: FC<Props> = ({ errors, categories }) => {
  const defaultValues: IProjectFormData = {
    title: '', // faker.commerce.productName(),
    website: '', // faker.internet.domainName(),
    description: '', // faker.commerce.productDescription(),
    end_date: '',
    funding_goal: 0, // +faker.commerce.price(1000, 12000),
    details: '', // faker.lorem.paragraphs(3),
    category_id: '',
    funded: 0, // +faker.commerce.price(1000, 2000),
    tagline: '', // faker.company.catchPhrase(),
    rewards_attributes: [],
  };

  const onSubmit = (data: RequestPayload) => {
    Inertia.post('/projects', {
      ...data,
    });
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

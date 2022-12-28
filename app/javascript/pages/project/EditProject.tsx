import { IProject } from '../../models/project';
import React, { FC } from 'react';
import { classNames } from '../../utils/styles';
import styles from './edit-project.module.scss';
import AppHead from '../../components/AppHead';
import type {
  FormSubmitData,
  IProjectFormData,
} from '../../features/project/form/CreateOrEditProject';
import { ICategory } from 'app/javascript/models/category';
import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { IReward } from '../../models/reward';

const CreateOrEditProject = React.lazy(
  () => import('../../features/project/form/CreateOrEditProject'),
);

interface Props {
  errors: Array<Record<string, string>>;
  categories: ICategory[];
  project: IProject;
}
const EditProject: FC<Props> = ({ project, errors, categories }) => {
  const defaultValues: IProjectFormData = {
    title: project.title,
    website: project.website,
    description: project.description,
    end_date: project.end_date,
    funding_goal: project.funding_goal,
    details: project.details,
    category_id: project.category_id,
    funded: project.funded,
    tagline: project.website,
    rewards_attributes: project.rewards || [],
    picture: undefined,
  };

  const onSubmit = (data: FormSubmitData) => {
    const rewards = data.rewards_attributes.map((rewardAttr: IReward) => rewardAttr.id);
    const deletedRewards = project.rewards
      ?.filter((r) => !new Set(rewards).has(r.id))
      .map((e) => ({ ...e, _destroy: '1' })) as IReward[];
    const finalRewards = [...data.rewards_attributes, ...deletedRewards];
    Inertia.put(`/projects/${project.id}`, {
      project: {
        ...data,
        rewards_attributes: finalRewards,
        ...(data.picture && { avatar: data.picture[0] }),
      },
    } as unknown as RequestPayload);
  };

  return (
    <>
      <AppHead title='Edit project'>
        <meta
          name='description'
          content={`Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. View ${project.title}`}
        />
      </AppHead>
      <section className={classNames(styles.section)}>
        <CreateOrEditProject
          edit
          defaultValues={defaultValues}
          categories={categories}
          errors={errors}
          onSubmitHandler={onSubmit}
          avatar_url={project.avatar_url}
        />
      </section>
    </>
  );
};

export default EditProject;

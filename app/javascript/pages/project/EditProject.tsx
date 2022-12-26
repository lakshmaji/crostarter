import { IProject } from '../../models/project';
import React, { FC } from 'react';
import { classNames } from '../../utils/styles';
import styles from './project-details.module.scss';
import AppHead from '../../components/AppHead';
import CreateOrEditProject, { IProjectFormData } from './CreateOrEditProject';
import { ICategory } from 'app/javascript/models/category';
import { Inertia, RequestPayload } from '@inertiajs/inertia';

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

  const onSubmit = (data: RequestPayload) => {
    console.log('bello on submit, data', data);

    const rewards = (data as any).project.rewards_attributes.map((e: any) => e.id);
    const deletedRewards = project.rewards
      ?.filter((r) => !new Set(rewards).has(r.id))
      .map((e) => ({ ...e, _destroy: '1' })) as any;
    const finalRewards = [...(data as any).project.rewards_attributes, ...deletedRewards];
    Inertia.put(`/projects/${project.id}`, {
      project: {
        ...(data as any).project,
        rewards_attributes: finalRewards,
        avatar: (data as any).project.picture[0],
      },
    });
  };

  return (
    <>
      <AppHead title='Edit project'>
        <meta
          name='description'
          content={`Crostarter is a blackhole crowd funding application, where you can raise funds, invest in projects. This is a test application. View ${project.title}`}
        />
      </AppHead>
      <section className={classNames(styles.section, styles.bg_white)}>
        <div className={styles.container}>
          <CreateOrEditProject
            edit
            defaultValues={defaultValues}
            categories={categories}
            errors={errors}
            onSubmitHandler={onSubmit}
            avatar_url={project.avatar_url}
          />
        </div>
      </section>
    </>
  );
};

export default EditProject;

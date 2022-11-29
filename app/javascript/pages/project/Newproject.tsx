import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { Category } from '../../models/category';
import { classNames } from '../../utils/styles';
import React, { FC, RefObject, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './new-project.module.scss';
import chroma from 'chroma-js';
import Select, { StylesConfig } from 'react-select';
import { ColourOption, colourOptions } from './data';

const DateInput = React.lazy(() => import('./DateInput'));

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

interface ProjectFormData {
  title: string;
  website: string;
  description: string;
  end_date: string;
  funding_goal: number;
  details: string;
  category_id: string;
  funded?: number;
  category?: Category;
}

interface Props {
  errors: Array<Record<string, string>>;
}

const NewProject: FC<Props> = ({ errors }) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<ProjectFormData>();

  //   const [day, setDay] = React.useState<DayValue>(null);

  const onSubmit = (data: ProjectFormData) => {
    Inertia.post('/projects', { user: data } as unknown as RequestPayload);
  };

  return (
    <div className={styles.container_contact100}>
      <div className={styles.wrap_contact100}>
        <form className={classNames(styles.contact100_form, 'validate-form')}>
          <span className={styles.contact100_form_title}>New Project</span>
          <label className={styles.label_input100} htmlFor='project-title'>
            Project Title
          </label>
          <div className={classNames(styles.wrap_input100, styles.rs1, styles.validate_input)}>
            <input
              id='project-title'
              className={styles.input100}
              type='text'
              name='project-title'
              placeholder='Project title'
            />
            <span className={styles.focus_input100}></span>
          </div>

          <div className={classNames(styles.wrap_input100, styles.rs1, styles.validate_input)}>
            <input className={styles.input100} type='text' name='tag-line' placeholder='tag line' />
            <span className={styles.focus_input100}></span>
          </div>
          <label className={styles.label_input100} htmlFor='website'>
            Website
          </label>
          <div className={classNames(styles.wrap_input100, styles.validateinput)}>
            <input
              id='website'
              className={styles.input100}
              type='text'
              name='website'
              placeholder='Eg. https://www.website.com'
            />
            <span className={styles.focus_input100}></span>
          </div>
          {/* <label className={styles.label_input100} htmlFor='phone'>
            Details
          </label>
          <div className={styles.wrap_input100}>
            <input
              id='phone'
              className={styles.input100}
              type='text'
              name='phone'
              placeholder='Eg. +1 800 000000'
            />
            <span className={styles.focus_input100}></span>
          </div> */}

          <label className={styles.label_input100} htmlFor='goal'>
            Funding Goal
          </label>
          <div className={styles.wrap_input100}>
            <input
              id='goal'
              className={styles.input100}
              type='text'
              name='goal'
              placeholder='Eg. 800,000'
            />
            <span className={styles.focus_input100}></span>
          </div>

          <label className={styles.label_input100} htmlFor='phone'>
            End Date
          </label>
          <div className={styles.wrap_input100}>
            <DateInput />

            <span className={styles.focus_input100}></span>
          </div>

          <label className={styles.label_input100} htmlFor='phone'>
            Category
          </label>
          <div className={styles.wrap_input100}>
            <Select
              closeMenuOnSelect={false}
              defaultValue={[colourOptions[0], colourOptions[1]]}
              isMulti
              options={colourOptions}
              styles={colourStyles}
            />

            {/* <input
              id='phone'
              className={styles.input100}
              type='text'
              name='phone'
              placeholder='Eg. +1 800 000000'
            /> */}
            <span className={styles.focus_input100}></span>
          </div>

          <label className={styles.label_input100} htmlFor='message'>
            Details *
          </label>
          <div className={classNames(styles.wrap_input100, styles.validateinput)}>
            <textarea
              id='message'
              className={styles.input100}
              name='message'
              placeholder='Please enter your comments...'
            ></textarea>
            <span className={styles.focus_input100}></span>
          </div>
          <div className={styles.container_contact100_form_btn}>
            <button className={styles.contact100_form_btn}>
              <span>
                Create
                <i className='zmdi zmdi-arrow-right m-l-8'></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;

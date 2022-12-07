import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { Category } from '../../models/category';
import { classNames } from '../../utils/styles';
import React, { FC, RefObject, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './new-project.module.scss';
import chroma from 'chroma-js';
import Select, { ActionMeta, StylesConfig } from 'react-select';
import { ColourOption, colourOptions, getRandomColor } from './data';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';

const DateInput = React.lazy(() => import('./DateInput'));

const defaultValues: ProjectFormData = {
  title: faker.commerce.productName(),
  website: faker.internet.domainName(),
  description: faker.commerce.productDescription(),
  end_date: '',
  funding_goal: +faker.commerce.price(1000, 12000),
  details: faker.lorem.paragraphs(3),
  category_id: '',
  funded: +faker.commerce.price(1000, 2000),
  tagline: faker.company.catchPhrase(),
};

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
  // category?: Category;
  tagline?: string;
}

interface Props {
  errors: Array<Record<string, string>>;
  categories: Category[];
}

export interface CategoryOption {
  readonly value: string;
  readonly label: string;
}
const NewProject: FC<Props> = ({ errors, categories }) => {
  const [selectedDay, setSelectedDay] = useState<string>();

  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<CategoryOption>();

  useEffect(() => {
    const options = categories.map((category) => ({
      value: category.id,
      label: category.name,
    }));
    setCategoryOptions(options);
  }, [categories]);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const onChooseEndDate = (value: string) => {
    setSelectedDay(value);
  };

  const onChange = (option: CategoryOption | null) => {
    setSelectedCategoryOptions(option as CategoryOption);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
  } = useForm<ProjectFormData>({
    defaultValues,
  });

  //   const [day, setDay] = React.useState<DayValue>(null);

  const onSubmit = (data: ProjectFormData) => {
    Inertia.post('/projects', {
      project: {
        ...data,
        category_id: selectedCategoryOptions?.value,
        end_date: selectedDay,
      },
    } as unknown as RequestPayload);
  };

  return (
    <div className={styles.container_contact100}>
      <div className={styles.wrap_contact100}>
        <form
          className={classNames(styles.contact100_form, 'validate-form')}
          onSubmit={handleSubmit(onSubmit)}
        >
          {JSON.stringify(errors)}
          <span className={styles.contact100_form_title}>New Project</span>
          <label className={styles.label_input100} htmlFor='project-title'>
            Project Title
          </label>
          <div className={classNames(styles.wrap_input100, styles.rs1, styles.validate_input)}>
            <input
              id='project-title'
              className={styles.input100}
              type='text'
              placeholder='Project title'
              {...register('title', { required: 'provide project title' })}
            />
            <span className={styles.focus_input100}></span>
          </div>

          <div className={classNames(styles.wrap_input100, styles.rs1, styles.validate_input)}>
            <input
              className={styles.input100}
              type='text'
              placeholder='tag line'
              {...register('tagline', { required: 'provide tag line' })}
            />
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
              {...register('website', { required: 'provide website' })}
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
              {...register('funding_goal', { required: 'provide goal amount' })}
              placeholder='Eg. 800,000'
            />
            <span className={styles.focus_input100}></span>
          </div>

          <label className={styles.label_input100} htmlFor='phone'>
            End Date
          </label>
          <div className={styles.wrap_input100}>
            <DateInput onChooseEndDate={onChooseEndDate} />

            <span className={styles.focus_input100}></span>
          </div>

          <label className={styles.label_input100} htmlFor='phone'>
            Category
          </label>
          <div className={styles.wrap_input100}>
            <Select
              // closeMenuOnSelect={false}
              options={categoryOptions}
              // styles={colourStyles}
              onChange={onChange}
              defaultValue={selectedCategoryOptions}
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
            Description *
          </label>
          <div className={classNames(styles.wrap_input100, styles.validateinput)}>
            <textarea
              id='message'
              className={styles.input100}
              placeholder='Please enter your comments...'
              {...register('description', { required: 'provide goal amount' })}
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

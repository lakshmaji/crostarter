import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { ICategory } from '../../models/category';
import { classNames } from '../../utils/styles';
import React, { FC, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styles from './new-project.module.scss';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';
import { useEffect } from 'react';
import { ColourOption, getRandomColor } from './data';
import chroma from 'chroma-js';

const DateInput = React.lazy(() => import('./DateInput'));

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
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
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  clearIndicator: (base, state) => ({
    ...base,
    cursor: 'pointer',
    color: state.isFocused ? 'blue' : 'black',
  }),
};

interface IReward {
  title: string;
  description: string;
  amount: number;
}

interface IProjectFormData {
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
  rewards_attributes: IReward[];
}

interface Props {
  errors: Array<Record<string, string>>;
  categories: ICategory[];
}

export interface CategoryOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
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
  const [selectedDay, setSelectedDay] = useState<string>();

  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<CategoryOption>();

  useEffect(() => {
    const options = categories.map(
      (category) =>
        ({
          value: category.id,
          label: category.name,
          color: getRandomColor(),
        } as CategoryOption),
    );
    setCategoryOptions(options);
  }, [categories]);

  const onChooseEndDate = (value: string) => {
    setSelectedDay(value);
  };

  const onChange = (option: SingleValue<CategoryOption> | MultiValue<CategoryOption>): void => {
    setSelectedCategoryOptions(option as CategoryOption);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    control,
  } = useForm<IProjectFormData>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rewards_attributes',
  });
  console.log(formErrors);

  //   const [day, setDay] = React.useState<DayValue>(null);

  const onSubmit = (data: IProjectFormData) => {
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
              styles={colourStyles}
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
          <div className={styles.rewards}>
            {fields.map((item, index) => {
              return (
                <div key={item.id} className={styles.reward}>
                  <div className={styles.wrap_input100}>
                    <input
                      className={styles.input100}
                      placeholder='reward title'
                      {...register(`rewards_attributes.${index}.title`, { required: true })}
                    />
                  </div>
                  <div className={styles.wrap_input100}>
                    <input
                      placeholder='description'
                      className={styles.input100}
                      {...register(`rewards_attributes.${index}.description`, { required: true })}
                    />
                  </div>
                  <div className={styles.wrap_input100}>
                    <input
                      placeholder='reward amount'
                      className={styles.input100}
                      {...register(`rewards_attributes.${index}.amount`, { required: true })}
                    />
                  </div>
                  <button type='button' onClick={() => remove(index)}>
                    Delete
                  </button>
                </div>
              );
            })}
            <button
              type='button'
              onClick={() => {
                append({ title: '', description: '', amount: 0 });
              }}
            >
              Add Reward
            </button>
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
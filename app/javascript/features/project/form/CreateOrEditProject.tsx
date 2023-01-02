import { ICategory } from '../../../models/category';
import { classNames } from '../../../utils/styles';
import React, { FC, useCallback, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styles from './new-project.module.scss';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';
import { useEffect } from 'react';
import { ColourOption, getRandomColor } from '../../../pages/project/data';
import chroma from 'chroma-js';
import useImagePreview from '../../../hooks/useImagePreview';

const DateInput = React.lazy(() => import('./DateInput'));
const DeleteReward: FC<{ idx: number; removeRewardBlock: (idx: number) => void }> = ({
  idx,
  removeRewardBlock,
}) => {
  const deleteRow = useCallback(() => {
    removeRewardBlock(idx);
  }, [idx, removeRewardBlock]);
  return (
    <button type='button' onClick={deleteRow}>
      Delete
    </button>
  );
};
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
  control: (prevStyles) => ({ ...prevStyles, backgroundColor: 'white' }),
  option: (prevStyles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...prevStyles,
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
        ...prevStyles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (prevStyles) => ({ ...prevStyles, ...dot() }),
  placeholder: (prevStyles) => ({ ...prevStyles, ...dot('#ccc') }),
  singleValue: (prevStyles, { data }) => ({ ...prevStyles, ...dot(data.color) }),
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

export interface IProjectFormData {
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
  picture?: FileList;
}

export interface FormSubmitData extends IProjectFormData {
  category_id: string;
  end_date: string;
}

interface Props {
  errors: Array<Record<string, string>>;
  categories: ICategory[];
  defaultValues: IProjectFormData;
  onSubmitHandler: (data: FormSubmitData) => void;
  edit?: boolean;
  avatar_url?: string;
}

export interface CategoryOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

const CreateOrEditProject: FC<Props> = ({
  edit = false,
  errors,
  categories,
  defaultValues,
  onSubmitHandler,
  avatar_url,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>();

  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<CategoryOption>();

  useEffect(() => {
    if (defaultValues.category_id && !selectedCategoryOptions) {
      const cat = categoryOptions.find(
        (c) => c.value.toString() === defaultValues.category_id.toString(),
      );
      setSelectedCategoryOptions(cat);
    }
  }, [categoryOptions, defaultValues.category_id, selectedCategoryOptions]);

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

  let defaultDate;
  if (defaultValues.end_date) {
    const en_date = new Date(defaultValues.end_date);
    defaultDate = {
      year: en_date.getFullYear(),
      month: en_date.getMonth() + 1,
      day: en_date.getDay() + 1,
    };
  } else {
    const en_date = new Date();

    defaultDate = {
      year: en_date.getFullYear(),
      month: en_date.getMonth() + 1,
      day: en_date.getDay() + 1,
    };
  }

  const { register, handleSubmit, control, watch } = useForm<IProjectFormData>({
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rewards_attributes',
  });

  const files = watch('picture');
  const filePreview = useImagePreview(files);

  const onSubmit = (data: IProjectFormData) => {
    onSubmitHandler({
      ...data,
      category_id: selectedCategoryOptions?.value,
      end_date: selectedDay,
    } as FormSubmitData);
  };
  const removeRewardBlock = (index: number) => remove(index);
  const addRewardBlock = () => {
    append({ title: '', description: '', amount: 0 });
  };

  return (
    <div className={styles.container_contact100}>
      <div className={styles.wrap_contact100}>
        <form
          className={classNames(styles.contact100_form, 'validate-form')}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div role='alert'>{JSON.stringify(errors)}</div>
          <span className={styles.contact100_form_title}>
            {edit ? defaultValues.title : 'New Project'}
          </span>

          <label className={styles.label_input100} htmlFor='project-picture'>
            Upload Picture
          </label>
          <div className={classNames(styles.img_preview)}>
            {/* <div  className={styles.img_preview}> */}
            <img src={filePreview ? filePreview : avatar_url} alt={defaultValues.title} />
            {/* </div> */}
            <input
              id='project-picture'
              // className={styles.input100}
              type='file'
              // accept='image/jpeg'
              {...register('picture', { required: 'Upload a picture' })}
            />
            <span className={styles.focus_input100}></span>
          </div>

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
            <DateInput onChooseEndDate={onChooseEndDate} defaultValue={defaultDate} />

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
              value={selectedCategoryOptions}
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
          <div className={styles.rewards} role='list'>
            {fields.map((item, index) => {
              return (
                <div key={item.id} className={styles.reward} role='listitem'>
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
                  <DeleteReward idx={index} removeRewardBlock={removeRewardBlock} />
                </div>
              );
            })}
            <button type='button' onClick={addRewardBlock}>
              Add Reward
            </button>
          </div>
          <div className={styles.container_contact100_form_btn}>
            <button className={styles.contact100_form_btn} type='submit'>
              <span>
                {edit ? 'Update' : 'Create'}
                <i className='zmdi zmdi-arrow-right m-l-8'></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrEditProject;

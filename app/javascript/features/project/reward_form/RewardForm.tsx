import { Inertia, RequestPayload } from '@inertiajs/inertia';
import { IReward } from '../../../models/reward';
import React, { FC, useEffect, useState } from 'react';
import styles from './reward-form.module.scss';

interface Props {
  chosenReward?: IReward;
  projectId: string;
}
const RewardForm: FC<Props> = ({ chosenReward, projectId }) => {
  const [values, setValues] = useState({
    amount: 0,
    description: '',
  });

  useEffect(() => {
    if (chosenReward?.id) {
      setValues((prev) => ({ ...prev, amount: chosenReward.amount }));
    }
  }, [chosenReward]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const reward_amount = chosenReward?.amount || 0;
    const entered_amount = +values.amount;

    if (!chosenReward?.id) {
      return 'some error';
    }

    if (reward_amount > entered_amount) {
      return 'some error';
    }

    const payload: RequestPayload = {
      contribution: {
        reward_id: chosenReward.id,
        amount: entered_amount,
      },
    } as unknown as RequestPayload;
    Inertia.post(`/projects/${projectId}/contributions`, payload);
  }

  return (
    <div className={styles.reward_form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_control}>
          <label className={styles.label} htmlFor='amount'>
            Contribution Amount:
          </label>
          <input
            className={styles.input}
            type='number'
            id='amount'
            value={values.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_control}>
          <label className={styles.label} htmlFor='description'>
            Notes:
          </label>
          <input
            className={styles.input}
            id='description'
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <button className={styles.btn_submit} type='submit'>
          Contribute
        </button>
      </form>
    </div>
  );
};

export default RewardForm;

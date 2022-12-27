import { IProject } from '../../../models/project';
import React, { FC, useState } from 'react';
import { classNames } from '../../../utils/styles';
import styles from './rewards-section.module.scss';
import RewardForm from '../reward_form/RewardForm';
import { IReward } from '../../../models/reward';

interface Props {
  project: IProject;
}
const RewardsSection: FC<Props> = ({ project }) => {
  const [currentReward, setCurrentReward] = useState<IReward>();
  return (
    <section className={classNames(styles.section, styles.bg_blue)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Contribute</h3>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.rewards_wrapper}>
            <div className={styles.rewards_list}>
              {!!project?.rewards?.length &&
                project.rewards.map((reward, i) => {
                  return (
                    <div
                      className={classNames(
                        styles.reward,
                        currentReward?.id === reward.id ? styles.active : '',
                      )}
                      key={reward.id}
                      onClick={() => setCurrentReward(reward)}
                      role='button'
                      tabIndex={i}
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      onKeyDown={() => {}}
                    >
                      <h6 className={styles.title}>{reward.title}</h6>
                      <p className={styles.note}>{reward.description}</p>
                      <div className={styles.amount}>{reward.amount}</div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={styles.contribution}>
            <h6 className={styles.h6}>
              You can choose rewards or can customize contribution amount &#40; The customization
              might not be eligible for rewards. &#41;
            </h6>
            <div className={styles.line} />
            {currentReward && (
              <div className={styles.clear_reward}>
                <p className={styles.clear_text}>Don&apos;t want reward click</p>
                <button className={styles.btn} onClick={() => setCurrentReward(undefined)}>
                  here
                </button>
              </div>
            )}
            <RewardForm chosenReward={currentReward} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;

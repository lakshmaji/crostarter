import React, { FC } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import styles from './project-stats.module.scss';
import { IProject } from '../../../models/project';
import { IReward } from '../../../models/reward';
import { IContribution } from '../../..//models/contribution';

interface IContributionGraph {
  ts: Date;
  goal_amount: number;
  received: number;
  accumulated: number;
  prevAcc: number;
}

const getContributions = (rewards: IReward[]): IContribution[] => {
  return rewards.map((reward) => reward.contributions as IContribution[]).flat();
};
const transform = (project: IProject) => {
  if (!project.rewards) {
    return [];
  }
  const goal_amount = Number(project.funding_goal);
  const contributions: IContributionGraph[] = [];
  let accumulated = 0;
  getContributions(project.rewards).forEach((contribution) => {
    const received = Number(contribution.amount);
    accumulated += received;

    const record = {
      ts: new Date(contribution.created_at),
      goal_amount,
      received,
      accumulated,
      prevAcc: accumulated - received,
    };
    contributions.push(record);
  });
  return contributions;
};

const tune = (project: IProject) => {
  const contributions = transform(project).sort((prev, next) => {
    return new Date(prev.ts).getTime() - new Date(next.ts).getTime();
  });

  return contributions.map((contribution) => {
    const timestamp = new Date(contribution.ts);
    const options: Intl.DateTimeFormatOptions = {
      weekday: undefined,
      year: 'numeric',
      month: 'short',
      day: undefined,
    };

    return {
      ...contribution,
      month: timestamp.toLocaleDateString('en-IN', options),
    };
  });
};

interface Props {
  project: IProject;
}
const ProjectStats: FC<Props> = ({ project }) => {
  const data = tune(project);
  return (
    <div className={styles.container}>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          // width={600}
          height={400}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <ReferenceLine y={4800} label='Goal' stroke='#ea8ed9' strokeDasharray='3 1' />

          <XAxis dataKey='month' />
          <Legend verticalAlign='top' height={36} />

          <YAxis hide></YAxis>
          <Tooltip />
          {/* <Area fillOpacity={1} type='monotone' dataKey='needed' stroke='#11b094' fill='#11b094' /> */}

          <Area
            fillOpacity={1}
            type='monotone'
            dataKey='accumulated'
            stroke='#6660f8'
            fill='#6660f8'
          />
          <Area fillOpacity={1} type='monotone' dataKey='prevAcc' stroke='#e5abdc' fill='#e5abdc' />
          <Area
            fillOpacity={1}
            type='monotone'
            dataKey='received'
            stroke='#63bffc'
            fill='#63bffc'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectStats;

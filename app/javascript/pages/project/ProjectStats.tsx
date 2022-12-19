import { randomDate, randomIntFromInterval } from '../../utils/helpers';
import React from 'react';
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
import styles from './project-details.module.scss';

const EXPECTED = 5000;
const contributions: any[] = [];

let accumulated = 0;
let current = 0;
do {
  const prevAcc = accumulated;
  current += +randomIntFromInterval(10, 500);
  accumulated += current;
  const needed = EXPECTED - accumulated;

  const record = {
    ts: randomDate(new Date(2012, 0, 1), new Date()), // faker.date.betweens('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
    expected: EXPECTED,
    received: current,
    accumulated,
    needed: needed > 0 ? needed : 0,
    prevAcc: prevAcc,
  };
  contributions.push(record);
} while (accumulated <= EXPECTED);

const data = contributions
  .sort(function (a, b) {
    return new Date(a.ts).getTime() - new Date(b.ts).getTime();
  })
  .map((c) => {
    const d = new Date(c.ts[0]);
    const options: Intl.DateTimeFormatOptions = {
      weekday: undefined,
      year: 'numeric',
      month: 'short',
      day: undefined,
    };

    return {
      ...c,
      month: d.toLocaleDateString('en-IN', options),
    };
  });

const ProjectStats = () => {
  return (
    <div className={styles.f_image}>
      <ResponsiveContainer width={600} height='100%'>
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
          <Area fillOpacity={1} type='monotone' dataKey='needed' stroke='#11b094' fill='#11b094' />

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

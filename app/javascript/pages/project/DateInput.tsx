import React, { FC, Suspense, useState } from 'react';
import styles from './new-project.module.scss';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker, { DayValue, DayRange, Day } from '@hassanmojab/react-modern-calendar-datepicker';
import type { RenderInputProps } from '@hassanmojab/react-modern-calendar-datepicker';

interface Props {
  onChooseEndDate: (value: string) => void;
}
const DateInput: FC<Props> = ({ onChooseEndDate }) => {
  const [selectedDay, setSelectedDay] = useState<DayValue>(null);

  const onChange = (value: DayValue) => {
    setSelectedDay(value);
    onChooseEndDate(`${value?.day}/${value?.month}/${value?.year}`);
  };

  const renderCustomInput = ({ ref }: { ref: React.RefObject<any> }) => {
    return (
      <input
        readOnly
        ref={ref}
        placeholder='Select end date'
        value={selectedDay ? `✅ ${selectedDay.day}/${selectedDay.month}/${selectedDay.year}` : ''}
        className={styles.input100}
      />
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DatePicker
        value={selectedDay}
        onChange={onChange}
        renderInput={renderCustomInput} // render a custom input
        shouldHighlightWeekends
      />
    </Suspense>
  );
};

export default DateInput;

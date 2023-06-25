import tw from 'twin.macro';

import DayOfWeek from './day-of-week';
import MonthAndDay from './month-and-day';
import WeekOfYear from './week-of-year';

const Calendar = () => {
  return (
    <Container>
      <DayOfWeek tw={'basis-0 grow-[2]'} />
      <MonthAndDay tw={'grow basis-0'} />
      <WeekOfYear tw={'grow basis-0'} />
    </Container>
  );
};

const Container = tw.div`flex h-full items-center text-xl`;

export default Calendar;

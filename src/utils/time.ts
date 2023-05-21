export const calcClockRotate = (
  hour: number,
  minute: number,
  second: number
) => {
  const hourRotate = (hour % 12) * 30 + minute * 0.5;
  const minuteRotate = minute * 6 + second * 0.1;
  const secondRotate = second * 6;
  return [hourRotate, minuteRotate, secondRotate];
};

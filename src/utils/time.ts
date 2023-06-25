import { ONE_DAY_MS } from '@/utils/constants';

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

// calculate what week of the year 'date' is
export const calcWeek = (date = new Date()) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDayOfYear =
    (date.getTime() - firstDayOfYear.getTime()) / ONE_DAY_MS;
  return Math.ceil((pastDayOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const calcTotalWeek = (date = new Date()) =>
  calcWeek(new Date(date.getFullYear(), 11, 31));

// Lunar Calculation
const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset();

  return time / 86400000 - tzoffset / 1440 + 2440587.5;
};
const LUNAR_MONTH = 29.530588853;
const getLunarAgePercent = (date = new Date()) => {
  return normalize((getJulianDate(date) - 2451550.1) / LUNAR_MONTH);
};
const getLunarAge = (date = new Date()) => {
  const percent = getLunarAgePercent(date);
  return percent * LUNAR_MONTH;
};
const normalize = (value: number) => {
  value = value - Math.floor(value);
  if (value < 0) value = value + 1;
  return value;
};
export const getLunarPhase = (date = new Date()) => {
  const age = getLunarAge(date);
  if (age < 1.84566) return 'NewMoon';
  else if (age < 5.53699) return 'WaxingCrescent';
  else if (age < 9.22831) return 'FirstQuarter';
  else if (age < 12.91963) return 'WaxingGibbous';
  else if (age < 16.61096) return 'FullMoon';
  else if (age < 20.30228) return 'WaningGibbous';
  else if (age < 23.99361) return 'ThirdQuarter';
  else if (age < 27.68493) return 'WaningCrescent';
  return 'NewMoon';
};

// e.g. if in korean, it will give 'Korean Standard Time'
export const getTimezoneName = () => {
  const today = new Date();
  const short = today.toLocaleDateString('en');
  const full = today.toLocaleDateString('en', { timeZoneName: 'long' });

  const shortIndex = full.indexOf(short);

  if (shortIndex >= 0) {
    const trimmed =
      full.substring(0, shortIndex) + full.substring(shortIndex + short.length);

    return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');
  } else {
    return full;
  }
};

// e.g. if in korean, it will give UTC+09:00
export const getUTCOffsetString = (date = new Date()) => {
  const utcOffsetMinutes = date.getTimezoneOffset();

  const hours = Math.abs(Math.floor(utcOffsetMinutes / 60));
  const minutes = Math.abs(utcOffsetMinutes % 60);

  const sign = utcOffsetMinutes >= 0 ? '-' : '+';

  return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

// don't care about 100, 400 year rule
export const calcLeapYear = (date = new Date()) => {
  const year = date.getFullYear();
  return year % 4 || 4;
};

import { PropsWithTw, useReducer } from 'react';
import tw from 'twin.macro';

import useEveryMidnight from '@/hooks/use-every-midnight';

import {
  FirstQuarter,
  FullMoon,
  NewMoon,
  ThirdQuarter,
  WaningCrescent,
  WaningGibbous,
  WaxingCrescent,
  WaxingGibbous,
} from '@/assets/images/moon';
import { MOON_SIZE } from '@/styles/header';
import { getLunarPhase } from '@/utils/time';

const MoonSVG = {
  FullMoon,
  FirstQuarter,
  ThirdQuarter,
  WaxingGibbous,
  NewMoon,
  WaxingCrescent,
  WaningCrescent,
  WaningGibbous,
};

const LunarDisplay = ({ className }: PropsWithTw) => {
  const [, forceRerender] = useReducer((x) => x + 1, 0);
  const lunarPhase = getLunarPhase();
  const MoonImage = MoonSVG[lunarPhase];
  useEveryMidnight(forceRerender);
  return (
    <Container className={className}>
      <MoonImage width={MOON_SIZE} />
    </Container>
  );
};

const Container = tw.div`flex h-full flex-col items-center justify-center`;

export default LunarDisplay;

import styled from '@emotion/styled';
import metadata from 'data/metadata';
import NextImage from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import tw, { css } from 'twin.macro';

import ButtonList from '@/components/common/Header/ButtonList';
import Clock from '@/components/common/Header/Clock';
import ClockButton from '@/components/common/Header/ClockButton';

import { CLOCK_SIZE } from '@/utils/constants';

const HeaderMain = () => {
  const [openClockCollapse, setOpenClockCollapse] = useState(false);
  const [showClock, setShowClock] = useState(true);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const clockTimeout = setTimeout(() => {
      setOpenClockCollapse((opened) => {
        if (!opened) setShowClock(false);
        return opened;
      });
    }, 5000);
    return () => {
      timeout.current && clearTimeout(timeout.current);
      clearTimeout(clockTimeout);
    };
  }, []);

  const collapseHandler = (isOpen: boolean) => {
    setOpenClockCollapse(isOpen);
    timeout.current && clearTimeout(timeout.current);
    if (isOpen) {
      setShowClock(isOpen);
      return;
    } else {
      timeout.current = setTimeout(() => {
        setShowClock(false);
      }, 500);
    }
  };

  return (
    <>
      <Upside>
        <ClockButton onClick={() => collapseHandler(!openClockCollapse)} />
        <Link href={'/'}>
          <NextImage
            src={metadata.images.logo}
            alt={'logo'}
            tw="my-3"
            width={130}
            height={130}
          />
        </Link>
        <ButtonList />
      </Upside>
      <Hr />
      <ClockCollapse open={openClockCollapse}>
        {showClock && <Clock />}
      </ClockCollapse>
    </>
  );
};

const Upside = tw.div`flex w-full items-center justify-between px-10`;

const ClockCollapse = styled.div(({ open }: { open: boolean }) => [
  tw`flex w-full items-center justify-center overflow-hidden bg-orange-100`,
  css`
    transition: height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    height: ${open ? `${CLOCK_SIZE + 40}px` : '0'};
  `,
]);

const Hr = tw.hr`w-full border-black border-t-2`;
export default HeaderMain;

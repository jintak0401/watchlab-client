'use client';

import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import tw, { css, styled } from 'twin.macro';

import ButtonList from '@/components/common/header/button-list';
import ClockButton from '@/components/common/header/clock-button';
import ClockList from '@/components/common/header/clock-list';
import DateDisplay from '@/components/common/header/date-display';

import { CLOCK_COLLAPSE_HEIGHT } from '@/styles/header';

const HeaderMain = () => {
  const [openClockCollapse, setOpenClockCollapse] = useState(false);

  return (
    <>
      <Upside>
        <ClockButton onClick={() => setOpenClockCollapse((prev) => !prev)} />
        <NextLink href={'/'}>
          <NextImage
            src={siteMetadata.images.logo}
            alt={'logo'}
            tw="my-3"
            width={130}
            height={130}
          />
        </NextLink>
        <ButtonList />
      </Upside>
      <Hr />
      <ClockCollapse open={openClockCollapse}>
        <ClockList />
        <DateDisplay />
      </ClockCollapse>
    </>
  );
};

const Upside = tw.div`flex w-full items-center justify-between bg-white px-10`;

const ClockCollapse = styled.div<{ open: boolean }>(({ open }) => [
  tw`flex w-full flex-col items-center justify-center overflow-hidden bg-orange-100`,
  css`
    transition: height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    height: ${open ? `${CLOCK_COLLAPSE_HEIGHT}px` : '0'};
  `,
]);

const Hr = tw.hr`w-full border-black border-t-2`;
export default HeaderMain;

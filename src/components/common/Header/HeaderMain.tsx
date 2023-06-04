import styled from '@emotion/styled';
import metadata from 'data/metadata';
import NextImage from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import tw, { css } from 'twin.macro';

import ButtonList from '@/components/common/Header/ButtonList';
import Clock from '@/components/common/Header/Clock';
import ClockButton from '@/components/common/Header/ClockButton';

import { CLOCK_SIZE } from '@/utils/constants';

const HeaderMain = () => {
  const [openClockCollapse, setOpenClockCollapse] = useState(false);

  return (
    <>
      <Upside>
        <ClockButton onClick={() => setOpenClockCollapse((prev) => !prev)} />
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
        <Clock />
      </ClockCollapse>
    </>
  );
};

const Upside = tw.div`flex w-full items-center justify-between bg-white px-10`;

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

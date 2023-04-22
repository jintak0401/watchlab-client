import styled from '@emotion/styled';
import metadata from 'data/metadata';
import navLinks from 'data/navLinks';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import tw, { css } from 'twin.macro';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import ButtonList from './ButtonList';
import Clock from './Clock';

const CLOCK_SIZE = 150;

const Header = () => {
  const { locale = 'en' } = useRouter();
  const [showClock, setShowClock] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useIntersectionObserver({
    target: navRef,
    onIntersect: ([{ intersectionRatio }]) => {
      setShowNavLogo(intersectionRatio < 1);
    },
  });

  return (
    <>
      <Upside>
        <Clock onClick={() => setShowClock((prev) => !prev)} />
        <Link href={'/'}>
          <NextImage
            src={metadata.images.logo}
            alt={'logo'}
            width={150}
            height={150}
          />
        </Link>
        <ButtonList />
      </Upside>
      <Hr />
      <ClockCollapse open={showClock}>
        <NextImage
          src={metadata.images.logo}
          alt={'clock'}
          width={CLOCK_SIZE}
          height={CLOCK_SIZE}
        />
      </ClockCollapse>
      <Nav ref={navRef}>
        {showNavLogo && (
          <Link href={'/'}>
            <NextImage
              src={metadata.images.logo}
              alt={'logo'}
              width={40}
              height={40}
              tw="absolute left-10 top-1/2 -translate-y-1/2"
            />
          </Link>
        )}
        <ul tw="flex items-center justify-center gap-10">
          {navLinks[locale as keyof typeof navLinks].map(({ name, href }) => (
            <li key={name}>
              <Link tw="font-della text-3xl" href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </>
  );
};

const Upside = tw.div`flex w-full items-center justify-between px-10`;

const ClockCollapse = styled.div(({ open }: { open: boolean }) => [
  tw`flex w-full items-center justify-center overflow-hidden bg-red-200`,
  css`
    transition: height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    height: ${open ? `${CLOCK_SIZE}px` : '0'};
  `,
]);

const Hr = tw.hr`w-full border-black border-t-2`;

const Nav = tw.nav`sticky -top-px w-full bg-white py-3`;

export default Header;

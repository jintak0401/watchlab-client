import navLinks from 'data/navLinks';
import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import tw from 'twin.macro';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const NavBar = () => {
  const [showNavLogo, setShowNavLogo] = useState(false);
  const { locale = 'en' } = useRouter();
  const navRef = useRef<HTMLElement>(null);

  useIntersectionObserver({
    target: navRef,
    onIntersect: ([{ intersectionRatio }]) => {
      setShowNavLogo(intersectionRatio < 1);
    },
  });
  return (
    <Nav ref={navRef}>
      {showNavLogo && (
        <Link href={'/'}>
          <NextImage
            src={siteMetadata.images.logo}
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
            <Link tw="font-della text-2xl" href={href}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = tw.nav`sticky -top-px w-full bg-white py-3`;

export default NavBar;

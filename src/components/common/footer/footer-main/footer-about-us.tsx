import { aboutUsLinks } from 'data/nav-links';
import NextLink from 'next/link';
import tw from 'twin.macro';

import { FooterMainLi } from '@/components/common/footer/footer-main/index';

const FooterAboutUs = () => {
  return (
    <FooterMainLi>
      <NextLink tw={'font-franklin'} href={'/about-us'}>
        About Us
      </NextLink>
      <Ul>
        {aboutUsLinks.map(({ name, href }) => (
          <li key={name}>
            <NextLink tw={'font-franklin text-lg'} href={`/about-us/${href}`}>
              {name}
            </NextLink>
          </li>
        ))}
      </Ul>
    </FooterMainLi>
  );
};

const Ul = tw.ul`ml-3 font-normal`;

export default FooterAboutUs;

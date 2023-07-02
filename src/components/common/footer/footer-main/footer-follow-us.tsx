import siteMetadata from 'data/site-metadata';
import NextLink from 'next/link';
import { IconType } from 'react-icons';
import { GrInstagram, GrPinterest } from 'react-icons/gr';
import tw from 'twin.macro';

import { FooterMainLi } from '@/components/common/footer/footer-main/index';

import { Union } from '@/types';

const SnsIconMap: {
  [key in Union<typeof siteMetadata.sns>]: IconType;
} = {
  instagram: GrInstagram,
  pinterest: GrPinterest,
};
const FooterFollowUs = () => {
  return (
    <FooterMainLi>
      Follow Us
      <Ul>
        {Object.entries(siteMetadata.sns).map(([name, href]) => {
          const SnsIcon = SnsIconMap[name as keyof typeof SnsIconMap];
          return (
            <li tw={'float-left'} key={name}>
              <NextLink href={href} target="_blank">
                <SnsIcon size={50} />
              </NextLink>
            </li>
          );
        })}
      </Ul>
    </FooterMainLi>
  );
};

const Ul = tw.ul`my-2 ml-3 space-x-3`;

export default FooterFollowUs;

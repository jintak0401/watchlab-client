'use client';

import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import { IconType } from 'react-icons';
import { GrInstagram, GrPinterest } from 'react-icons/gr';
import tw, { css, styled } from 'twin.macro';

import FooterAboutUs from '@/components/common/footer/footer-main/footer-about-us';
import FooterFollowUs from '@/components/common/footer/footer-main/footer-follow-us';
import FooterLang from '@/components/common/footer/footer-main/footer-lang';

import { Union } from '@/types';

const SnsIconMap: {
  [key in Union<typeof siteMetadata.sns>]: IconType;
} = {
  instagram: GrInstagram,
  pinterest: GrPinterest,
};

const FooterMain = () => {
  return (
    <Container>
      <NextImage
        tw={'h-fit object-contain'}
        src={'/static/images/common/footer/tmp-logo.png'}
        alt={'logo'}
        width={500}
        height={200}
      />
      <Ul tw={'flex'}>
        <FooterAboutUs />
        <FooterLang />
        <FooterFollowUs />
      </Ul>
    </Container>
  );
};

const Container = styled.div(() => [
  tw`flex w-full gap-x-12 bg-light-gray p-10`,
]);

const Ul = styled.ul(() => [
  tw`flex`,
  css`
    margin-top: 60px;
  `,
]);

export const FooterMainLi = styled.li(() => [
  tw`w-80 font-franklin font-medium text-3xl`,
  css`
    &::before {
      content: '●';
      display: block;
      font-size: 2.5rem;
    }
  `,
]);

export default FooterMain;

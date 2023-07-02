'use client';

import siteMetadata from 'data/site-metadata';
import NextImage from 'next/image';
import NextLink from 'next/link';
import tw, { css, styled } from 'twin.macro';

import useLocale from '@/hooks/use-locale';

import { useTranslation } from '@/i18n/client';
import { FOOTER_LOGO_SIZE, MADE_BY_LOGO_SIZE } from '@/styles/footer';

const Copyright = () => {
  const year = new Date().getFullYear();
  const locale = useLocale();
  const { t } = useTranslation(locale, 'common');

  return (
    <Container>
      <Nav>
        <Ul>
          <Li>
            <Link href={`/about-us/who-we-are`}>who we are</Link>
          </Li>
          <Li>
            <Link href={`/sitemap.xml`}>sitemap</Link>
          </Li>
          <Li>
            <Link href={`/`}>
              <NextImage
                css={[tw`inline-block`]}
                src={siteMetadata.images.logo}
                alt={'logo'}
                width={FOOTER_LOGO_SIZE}
                height={FOOTER_LOGO_SIZE}
              />
            </Link>
          </Li>
          <Li>
            <Link href={`/about-us/terms-and-conditions`}>
              terms and conditions
            </Link>
          </Li>
        </Ul>
      </Nav>
      <div tw={'font-franklin'}>
        {t('footer.copyright.description').replace('%d', year.toString())}
      </div>
      <WebsiteBy>
        <span tw={'font-franklin'}>Website by</span>
        <NextImage
          src={siteMetadata.images.logo}
          alt={'timegambit logo'}
          width={MADE_BY_LOGO_SIZE}
          height={MADE_BY_LOGO_SIZE}
        />
        <span>TIME GAMBIT</span>
      </WebsiteBy>
    </Container>
  );
};

const Container = styled.div(() => [
  tw`relative flex w-full flex-col items-center justify-center gap-y-3 bg-white py-2`,
]);

const Nav = tw.nav`uppercase`;

const Ul = tw.ul`flex items-center justify-center`;

const Li = styled.li(() => [
  tw`inline-block list-none font-franklin`,
  css`
    &:not(:last-child)::after {
      content: '·';
      margin: 7px;
    }
  `,
]);

const Link = styled(NextLink)(() => [tw`font-franklin`]);

const WebsiteBy = tw.div`absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center`;

export default Copyright;

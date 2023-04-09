import metadata from 'data/metadata';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw from 'twin.macro';

import { Cell, Description, Grid, Subtitle, Title } from '@/components/common';
import ManualWrapper from '@/components/manual/Wrapper';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { locale = 'en' } = context;

  const translations = await serverSideTranslations(locale, ['manual']);

  return {
    props: {
      ...translations,
    },
  };
};

const ManualPage = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('manual');
  const links = metadata.manual.links;

  return (
    <ManualWrapper css={{ paddingTop: 200, paddingBottom: 100 }}>
      <ManualHeader>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Description>{t('description')}</Description>
      </ManualHeader>
      <Grid tw="mt-16" row={1} col={4}>
        {links.map((key) => (
          <Cell
            key={key}
            css={{ height: 500 }}
            href={`/manual/${key}`}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            image={'/static/images/manual/sample.png'}
          />
        ))}
      </Grid>
    </ManualWrapper>
  );
};

const ManualHeader = tw.div`flex flex-col items-center justify-center gap-y-8`;

export default ManualPage;

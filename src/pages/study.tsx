import metadata from 'data/metadata';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import 'twin.macro';

import { Description, Grid, Subtitle, Title } from '@/components/common';
import Cell from '@/components/study/Cell';
import StudyWrapper from '@/components/study/Wrapper';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { locale = 'en' } = context;

  const translations = await serverSideTranslations(locale, ['study']);

  return {
    props: {
      ...translations,
    },
  };
};

const StudyPage = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('study');
  const links = metadata.study.links;

  return (
    <StudyWrapper css={{ paddingTop: 200 }}>
      <div tw="flex flex-col items-center justify-center" css={{ rowGap: 30 }}>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Description>{t('description')}</Description>
      </div>
      <Grid css={{ marginTop: 60 }} row={2} col={3}>
        {links.map((key) => (
          <Cell
            key={key}
            href={`/study/${key}`}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            image={'/static/images/study/sample.png'}
          />
        ))}
      </Grid>
    </StudyWrapper>
  );
};

export default StudyPage;

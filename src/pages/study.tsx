import metadata from 'data/metadata';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import tw from 'twin.macro';

import { Cell, Description, Grid, Subtitle, Title } from '@/components/common';
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
    <StudyWrapper css={{ paddingTop: 200, paddingBottom: 100 }}>
      <StudyHeader>
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
        <Description>{t('description')}</Description>
      </StudyHeader>
      <Grid tw="mt-16" row={2} col={3}>
        {links.map((key, idx) => (
          <Cell
            key={key}
            href={`/study/${key}`}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            image={metadata.images.study[idx]}
          />
        ))}
      </Grid>
    </StudyWrapper>
  );
};

const StudyHeader = tw.div`flex flex-col items-center justify-center gap-y-8`;

export default StudyPage;

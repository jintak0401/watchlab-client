import siteMetadata from 'data/site-metadata';

import Cell from '@/components/common/cell';
import Grid from '@/components/common/grid';
import FullBgLayout from '@/components/layouts/full-bg-layout';

import { RootProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';

const StudyPage = async ({ params: { lang } }: RootProps) => {
  const { t } = await useTranslation(lang, 'study');
  const links = siteMetadata.study.links;

  return (
    <FullBgLayout
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      bgImage={'study'}
    >
      <Grid row={2} col={3} style={{ marginTop: 64 }}>
        {links.map((key, idx) => (
          <Cell
            key={key}
            href={`/study/${key}`}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            image={siteMetadata.images.study[idx]}
          />
        ))}
      </Grid>
    </FullBgLayout>
  );
};

export default StudyPage;

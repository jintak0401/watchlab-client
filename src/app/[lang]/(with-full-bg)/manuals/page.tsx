import siteMetadata from 'data/site-metadata';

import Cell from '@/components/common/cell';
import Grid from '@/components/common/grid';
import FullBgLayout from '@/components/layouts/full-bg-layout';

import { OnlyLangProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';

const ManualsPage = async ({ params: { lang } }: OnlyLangProps) => {
  const { t } = await useTranslation(lang, 'manual');
  const links = siteMetadata.manual.links;

  return (
    <FullBgLayout
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      bgImage={'manuals'}
    >
      <Grid row={1} col={4} style={{ marginTop: 64 }}>
        {links.map((key, idx) => (
          <Cell
            key={key}
            style={{ height: 500 }}
            href={`/manual/${key}`}
            title={t(`${key}.title`)}
            description={t(`${key}.description`)}
            image={siteMetadata.images.manuals[idx]}
          />
        ))}
      </Grid>
    </FullBgLayout>
  );
};

export default ManualsPage;

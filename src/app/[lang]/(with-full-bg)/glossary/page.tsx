import Hydration from '@/components/common/hydration';
import Subtitle from '@/components/common/subtitle';
import Title from '@/components/common/title';
import CharPicker from '@/components/glossary/char-picker';
import InputSearch from '@/components/glossary/input-search';

import GlossaryLayout from '@/app/[lang]/(with-full-bg)/glossary/glossary-layout';
import { RootProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';
import { getGlossary } from '@/request/glossary';
import { GLOSSARY_KEY } from '@/utils/constants';

const GlossaryPage = async ({ params: { lang } }: RootProps) => {
  const { t } = await useTranslation(lang, 'glossary');
  const queryKey = [GLOSSARY_KEY, lang];
  const queryFn = () => getGlossary(lang);
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Hydration queryKey={queryKey} queryFn={queryFn}>
        <GlossaryLayout>
          <Title>{t('title')}</Title>
          <Subtitle>{t('subtitle')}</Subtitle>
          <InputSearch />
          <CharPicker />
        </GlossaryLayout>
      </Hydration>
    </>
  );
};
export default GlossaryPage;

import metadata from 'data/metadata';
import { useAtom } from 'jotai';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import tw from 'twin.macro';

import { useGlossaryQuery } from '@/hooks/rq/glossary';

import { glossarySearchAtom } from '@/store/glossary';

const InputSearch = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('glossary');
  const [search, setSearch] = useAtom(glossarySearchAtom);
  const { data: glossaryData } = useGlossaryQuery(locale);

  return (
    <div tw="relative">
      <div tw="absolute inset-y-0 left-0 flex items-center">
        <NextImage
          tw="h-2/3 object-contain"
          src={metadata.images.loupes}
          alt={'loupes'}
          width={100}
          height={100}
        />
      </div>
      <input
        css={[
          tw`h-20 border-white border-y-4 border-x-8 bg-transparent pl-20 text-white text-3xl placeholder-gray-300 outline-none`,
          { width: 1000 },
        ]}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={
          (glossaryData
            ? t('placeholderAfterLoad').replace(
                '%s',
                glossaryData.length.toLocaleString()
              )
            : t('placeholderBeforeLoad')) as string
        }
      />
    </div>
  );
};

export default InputSearch;

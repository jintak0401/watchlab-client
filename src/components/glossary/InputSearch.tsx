import siteMetadata from 'data/site-metadata';
import { useAtom } from 'jotai';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import tw from 'twin.macro';

import { useGlossaryQuery } from '@/hooks/rq/glossary';
import useDebounce from '@/hooks/useDebounce';

import {
  glossaryFilteredWordsAtom,
  glossarySearchAtom,
  glossaryTableAtom,
} from '@/store/glossary';
import { Word } from '@/types';
import { fuzzySearch } from '@/utils/filterWords';

const InputSearch = () => {
  const { locale = 'en' } = useRouter();
  const { t } = useTranslation('glossary');
  const [search, setSearch] = useAtom(glossarySearchAtom);
  const [, setFilteredWords] = useAtom(glossaryFilteredWordsAtom);
  const [, setTableShow] = useAtom(glossaryTableAtom);
  const { data: wordList } = useGlossaryQuery(locale);
  const debounceFilter = useDebounce((inputSearch: string) => {
    if (!wordList) return;
    const words = fuzzySearch<Word>(wordList as Word[], inputSearch, [
      'word',
      'description',
    ]);
    setTableShow(words.length > 0);
    setFilteredWords(words);
  }, 500);

  return (
    <div tw="relative">
      <div tw="absolute inset-y-0 left-0 flex items-center">
        <NextImage
          draggable={false}
          tw="h-2/3 object-contain"
          src={siteMetadata.images.loupes}
          alt={'loupes'}
          width={100}
          height={100}
        />
      </div>
      <input
        css={[
          tw`h-20 border-white border-y-4 border-x-8 bg-transparent pl-20 text-white text-3xl outline-none placeholder:(text-gray-300 italic)`,
          { width: 700 },
        ]}
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          debounceFilter(e.target.value);
        }}
        placeholder={
          (wordList
            ? t('placeholderAfterLoad').replace(
                '%s',
                wordList.length.toLocaleString()
              )
            : t('placeholderBeforeLoad')) as string
        }
      />
    </div>
  );
};

export default InputSearch;

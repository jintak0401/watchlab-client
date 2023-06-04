'use client';

import siteMetadata from 'data/site-metadata';
import { useAtom } from 'jotai';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import tw from 'twin.macro';

import { useGlossaryQuery } from '@/hooks/rq/glossary';

import {
  glossaryCharAtom,
  glossaryFilteredWordsAtom,
  glossarySearchAtom,
  glossaryTableAtom,
} from '@/store/glossary';
import { GlossaryChar, glossaryChars } from '@/types';
import { filterWordsWithStart } from '@/utils/filterWords';

const CharPicker = () => {
  const [selectedChar, setSelectedChar] = useAtom(glossaryCharAtom);
  const [search, setSearch] = useAtom(glossarySearchAtom);
  const [, setTableShow] = useAtom(glossaryTableAtom);
  const ghostFaceRef = useRef<HTMLImageElement | null>(null);
  const alphabetRefs = useRef<{
    [key: GlossaryChar]: HTMLButtonElement | null;
  }>({});

  const { locale = 'en' } = useRouter();
  const { data: wordList } = useGlossaryQuery(locale);
  const [, setFilteredWords] = useAtom(glossaryFilteredWordsAtom);

  const moveGhostFace = (char: GlossaryChar) => {
    const el = alphabetRefs.current[char];
    const ghostFaceEl = ghostFaceRef.current;
    if (el && ghostFaceEl) {
      const elWidth = el.offsetWidth;
      const elLeft = el.offsetLeft;
      const ghostFaceElWidth = ghostFaceEl.offsetWidth;
      const ghostFaceElLeft = ghostFaceEl.offsetLeft;

      const elHeight = el.offsetHeight;
      const elTop = el.offsetTop;
      const ghostFaceElHeight = ghostFaceEl.offsetHeight;
      const ghostFaceElTop = ghostFaceEl.offsetTop;

      ghostFaceEl.style.transform = `translate(${
        elLeft - ghostFaceElLeft + elWidth / 2 - ghostFaceElWidth / 2
      }px, ${
        elTop - ghostFaceElTop + elHeight / 2 - (ghostFaceElHeight * 2) / 3
      }px)`;
    }
  };

  const filterWords = (char: GlossaryChar) => {
    return !wordList ? [] : filterWordsWithStart(wordList, char);
  };

  useEffect(() => {
    const move = (
      el: HTMLButtonElement | null,
      ghostFaceEl: HTMLImageElement | null
    ) => {
      if (!el || !ghostFaceEl) return;
      ghostFaceEl.style.transition = 'transform 0.8s ease-in-out';
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;
      const elLeft = el.offsetLeft;
      const elTop = el.offsetTop;
      const ghostFaceElWidth = ghostFaceEl.offsetWidth;
      const ghostFaceElHeight = ghostFaceEl.offsetHeight;
      ghostFaceEl.style.left = `${
        elLeft + elWidth / 2 - ghostFaceElWidth / 2
      }px`;
      ghostFaceEl.style.top = `${
        elTop + elHeight / 2 - (ghostFaceElHeight * 2) / 3
      }px`;
    };

    const picker = alphabetRefs.current[selectedChar];
    const ghostFace = ghostFaceRef.current;

    const onResize = () => {
      move(picker, ghostFace);
    };

    window.addEventListener('resize', onResize);

    const timeout = setTimeout(() => move(picker, ghostFace), 50);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timeout);
    };
  }, [ghostFaceRef.current, alphabetRefs.current]);

  useEffect(() => {
    if (search && selectedChar !== '@') {
      setSelectedChar('@');
      moveGhostFace('@');
    }
  }, [search]);

  return (
    <div
      css={[
        tw`mt-4 flex flex-row items-center justify-between gap-2 font-cormor text-white text-3xl`,
        { width: 1000 },
      ]}
    >
      <NextImage
        draggable={false}
        ref={ghostFaceRef}
        css={[tw`pointer-events-none absolute`, { left: -100 }]}
        src={siteMetadata.images.ghostFace}
        alt={'ghost-face'}
        width={70}
        height={70}
      />
      {(glossaryChars as GlossaryChar[]).map((char: GlossaryChar) => (
        <button
          tw="block w-full font-inknut leading-none"
          key={char}
          ref={(el) => (alphabetRefs.current[char] = el)}
          onClick={() => {
            setSelectedChar(char);
            setSearch('');
            moveGhostFace(char);
            const words = filterWords(char);
            setFilteredWords(words);
            setTableShow(words.length > 0);
          }}
        >
          {char === '@' ? (
            <NextImage
              draggable={false}
              tw="w-full"
              src={siteMetadata.images.loupes}
              alt={'loupes'}
              width={100}
              height={100}
            />
          ) : (
            char
          )}
        </button>
      ))}
    </div>
  );
};

export default CharPicker;

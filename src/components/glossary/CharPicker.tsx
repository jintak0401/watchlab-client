import { useAtom } from 'jotai';
import NextImage from 'next/image';
import { useEffect, useRef } from 'react';
import tw from 'twin.macro';

import { glossaryCharAtom, glossarySearchAtom } from '@/store/glossary';
import { GlossaryChar, glossaryChars } from '@/types';

const CharPicker = () => {
  const [selectedChar, setSelectedChar] = useAtom(glossaryCharAtom);
  const [search] = useAtom(glossarySearchAtom);
  const ghostFaceRef = useRef<HTMLImageElement | null>(null);
  const alphabetRefs = useRef<{
    [key: GlossaryChar]: HTMLButtonElement | null;
  }>({});

  const moveGhostFace = (char: string) => {
    const el = alphabetRefs.current[char];
    const ghostFaceEl = ghostFaceRef.current;
    if (el && ghostFaceEl) {
      // translate ghost face to the center of the selected char with translate not left
      const elWidth = el.offsetWidth;
      const elLeft = el.offsetLeft;
      const ghostFaceElWidth = ghostFaceEl.offsetWidth;
      const ghostFaceElLeft = ghostFaceEl.offsetLeft;
      ghostFaceEl.style.transform = `translateX(${
        elLeft - ghostFaceElLeft + elWidth / 2 - ghostFaceElWidth / 2
      }px)`;
    }
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

    const timeout = setTimeout(() => move(picker, ghostFace), 10);

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
        tw`flex flex-row items-center justify-between gap-2 text-white text-4xl`,
        { width: 1300 },
      ]}
    >
      <NextImage
        ref={ghostFaceRef}
        css={[tw`pointer-events-none absolute`, { left: -100 }]}
        src={'/static/images/glossary/ghost-face.webp'}
        alt={'ghost-face'}
        width={100}
        height={100}
      />
      {(glossaryChars as GlossaryChar[]).map((char: GlossaryChar, idx) => (
        <button
          tw="block w-full"
          key={char}
          ref={(el) => (alphabetRefs.current[char] = el)}
          onClick={() => {
            setSelectedChar(char);
            moveGhostFace(char);
          }}
        >
          {char === '@' ? (
            <NextImage
              tw="w-full"
              src={'/static/images/glossary/loupes.webp'}
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

import metadata from 'data/metadata';
import NextImage from 'next/image';
import { useTheme } from 'next-themes';
import { PropsWithTw, useEffect, useState } from 'react';
import 'twin.macro';

const ThemeSwitch = ({ ...rest }: PropsWithTw) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      tw="ml-1 mr-1 rounded p-1 sm:ml-4"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
      {...rest}
    >
      <NextImage
        src={
          mounted && (theme === 'dark' || resolvedTheme === 'dark')
            ? metadata.images.dark
            : metadata.images.light
        }
        alt={'dark mode'}
        width={50}
        height={50}
      />
    </button>
  );
};

export default ThemeSwitch;

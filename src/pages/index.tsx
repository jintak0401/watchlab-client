import Link from 'next/link';
import tw, { css } from 'twin.macro';

import ThemeSwitch from '@/components/common/ThemeSwitch';

const App = () => {
  return (
    <div
      css={[
        tw`flex h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-900`,
        css`
          transition: background-color 0.5s ease-in-out;
        `,
      ]}
    >
      <ThemeSwitch tw="fixed top-10 right-10" />
      <div tw="flex flex-col gap-y-3">
        <Link
          href="/glossary"
          tw="rounded-md bg-gray-200 px-4 py-2 text-center font-cormor font-bold text-2xl text-gray-900 hover:bg-gray-300"
        >
          Go To Glossary
        </Link>
        <Link
          href="/study"
          tw="rounded-md bg-gray-200 px-4 py-2 text-center font-cormor font-bold text-2xl text-gray-900 hover:bg-gray-300"
        >
          Go To Study
        </Link>
      </div>
    </div>
  );
};
export default App;

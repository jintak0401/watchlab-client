import { useAtom } from 'jotai';
import Link from 'next/link';
import tw from 'twin.macro';

import { Button, Logo } from '@/components';

import { countAtom, countStorageAtom } from '@/store/countStore';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex h-screen flex-col items-center justify-center`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
};

const App = () => {
  const [count, setCount] = useAtom(countAtom);
  const [_count, _setCount] = useAtom(countStorageAtom);
  const onClick = (value: number) => () => {
    setCount(value);
    _setCount(value);
  };

  return (
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex h-full flex-col justify-center gap-y-5">
        <h1 tw="text-center font-bold text-4xl">memory: {count}</h1>
        <h1 tw="text-center font-bold text-4xl">localStorage: {_count}</h1>
        <Button onClick={onClick(count + 1)} variant="primary">
          increment
        </Button>
        <Button onClick={onClick(count - 1)} variant="secondary">
          decrement
        </Button>
        <Button onClick={onClick(0)} isSmall>
          reset
        </Button>
      </div>
      <Link href={'/glossary'}>이동</Link>
      <Logo />
    </div>
  );
};
export default App;

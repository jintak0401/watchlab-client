import { useAtom } from 'jotai';
import tw from 'twin.macro';

import { Button, Logo } from '@/components';

import { countAtom, countStorageAtom } from '@/store/countStore';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
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
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <h1 tw="text-4xl font-bold text-center">memory: {count}</h1>
        <h1 tw="text-4xl font-bold text-center">localStorage: {_count}</h1>
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
      <Logo />
    </div>
  );
};
export default App;

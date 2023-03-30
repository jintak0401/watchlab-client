import Link from 'next/link';
import 'twin.macro';

const App = () => {
  return (
    <div tw="flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <Link
        href="/glossary"
        tw="rounded-md bg-gray-200 px-4 py-2 font-cormor font-bold text-2xl text-gray-900 hover:bg-gray-300"
      >
        Go To Glossary
      </Link>
    </div>
  );
};
export default App;

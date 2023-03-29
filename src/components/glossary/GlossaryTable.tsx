import { useAtom } from 'jotai';
import tw from 'twin.macro';

import { glossaryTableAtom } from '@/store/glossary';

import Table from './Table/Table';

const GlossaryTable = () => {
  const [tableShow] = useAtom(glossaryTableAtom);
  return (
    <Table
      css={[
        tw`absolute top-full bg-white`,
        {
          width: 1000,
          height: 500,
        },
        tableShow && {
          transition: 'top 0.8s ease-in-out',
          top: '50vh',
        },
      ]}
    />
  );
};

export default GlossaryTable;

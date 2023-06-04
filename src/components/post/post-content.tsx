'use client';

import parse from 'html-react-parser';
import tw from 'twin.macro';

import { replaceNode } from '@/utils/html-next-parser';

interface Props {
  content: string;
}

const PostContent = ({ content }: Props) => {
  return (
    <div
      className={'unreset'}
      css={[
        tw`mx-auto mt-10 flex flex-col items-center justify-center bg-white px-7 leading-[1.4]`,
        { width: 1800 },
      ]}
    >
      {parse(content, replaceNode)}
    </div>
  );
};

export default PostContent;

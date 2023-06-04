'use client';

import { QueryKey, useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';
import tw from 'twin.macro';

import { TLang } from '@/i18n/settings';
import { getPost } from '@/request/post';
import { replaceNode } from '@/utils/htmlNextParser';

interface Props {
  queryKey: QueryKey;
}

const PostContent = ({ queryKey }: Props) => {
  const [_, lang, slug] = queryKey;
  const { data } = useQuery(queryKey, () =>
    getPost(slug as string, lang as TLang)
  );
  return (
    <div
      className={'unreset'}
      css={[
        tw`mx-auto mt-10 flex flex-col items-center justify-center bg-white px-7 leading-[1.4]`,
        { width: 1800 },
      ]}
    >
      {parse(data?.content ?? '', replaceNode)}
    </div>
  );
};

export default PostContent;

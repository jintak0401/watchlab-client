import siteMetadata from 'data/site-metadata';
import process from 'process';

import { Post } from '@/types';

const postReqUrl = (postSlug: string, locale: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/post/${postSlug}`;
};

export const getPost = async (
  postSlug: string,
  locale = 'en'
): Promise<Post> => {
  const url = postReqUrl(postSlug, locale);
  const res = await fetch(url, {
    method: 'GET',
    next: {
      revalidate: siteMetadata.revalidate,
    },
  });
  return res.json();
};

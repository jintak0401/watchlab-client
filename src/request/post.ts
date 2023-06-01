import _axios from '@/request/instance';
import { Post } from '@/types';

const postReqUrl = (postSlug: string, locale: string) => {
  return `/${locale}/post/${postSlug}`;
};

export const getPost = async (postSlug: string, locale = 'en') => {
  const url = postReqUrl(postSlug, locale);
  const res = await _axios.get<Post>(url);
  return res?.data;
};

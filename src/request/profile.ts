import { Profile } from '@/types';

import _axios from './instance';

const profileReqUrl = (locale: string) => {
  return `/${locale}/profile`;
};

export const getProfile = async (locale: string) => {
  const url = profileReqUrl(locale);
  const res = await _axios.get<Profile[]>(url);
  return res?.data;
};

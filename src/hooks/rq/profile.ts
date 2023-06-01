import { useQuery } from '@tanstack/react-query';

import { getProfile } from '@/request/profile';
import { Profile } from '@/types';
import { PROFILE_KEY } from '@/utils/constants';

export const getProfileKey = (locale: string) => [PROFILE_KEY, locale];

export const useProfileQuery = (locale: string) =>
  useQuery<Profile[]>(getProfileKey(locale), async () => getProfile(locale));

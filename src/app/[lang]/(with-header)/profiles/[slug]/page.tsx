import Hydration from '@/components/common/hydration';
import PostContent from '@/components/post/post-content';
import ProfileChain from '@/components/profile/profile-chain';

import { languages, TLang } from '@/i18n/settings';
import { getPost } from '@/request/post';
import { getProfile } from '@/request/profile';
import { PROFILE_KEY } from '@/utils/constants';

interface Props {
  params: {
    lang: TLang;
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return (
    await Promise.all(
      languages.map(async (lang) => {
        const profiles = await getProfile(lang);
        return profiles.map(({ postSlug: slug }) => ({
          lang,
          slug,
        }));
      })
    )
  ).flat();
};

const ProfilePostPage = async ({ params: { lang, slug } }: Props) => {
  const queryKey = [PROFILE_KEY, lang];
  const queryFn = () => getProfile(lang);

  const post = await getPost(`profiles/${slug}`, lang);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Hydration queryKey={queryKey} queryFn={queryFn}>
        <ProfileChain />
        <PostContent content={post.content} />
      </Hydration>
    </>
  );
};

export default ProfilePostPage;

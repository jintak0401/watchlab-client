import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import tw from 'twin.macro';
import 'twin.macro';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import PostContent from '@/components/post/PostContent';
import ProfileChain from '@/components/profile/ProfileChain';

import { getPost } from '@/request/post';
import { getProfile } from '@/request/profile';
import { PROFILE_KEY } from '@/utils/constants';

export const getStaticPaths: GetStaticPaths = async ({ locales = ['en'] }) => {
  const paths = (
    await Promise.all(
      locales.map(async (locale) => {
        const profiles = await getProfile(locale);
        return profiles.map(({ postSlug: slug }) => ({
          params: {
            slug: slug.split('/')[1],
          },
          locale,
        }));
      })
    )
  ).flat();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string;
  const { locale = 'en' } = context;
  const queryClient = new QueryClient();
  const [post] = await Promise.all([
    getPost(`profiles/${slug}`, locale),
    queryClient.prefetchQuery([PROFILE_KEY, locale], () => getProfile(locale)),
  ]);

  return {
    props: {
      post,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

const ProfilePostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DefaultLayout>
      <ProfileChain />
      <hr css={[tw`mx-auto border-black border-t-2`, { width: 1700 }]} />
      <PostContent content={post.content} />
    </DefaultLayout>
  );
};

export default ProfilePostPage;

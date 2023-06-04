import siteMetadata from 'data/site-metadata';
import * as process from 'process';

const profileReqUrl = (locale: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/${locale}/profile`;
};

export const getProfile = async (locale: string) => {
  const url = profileReqUrl(locale);
  const res = await fetch(url, {
    method: 'GET',
    next: {
      revalidate: siteMetadata.revalidate,
    },
  });
  return res.json();
};

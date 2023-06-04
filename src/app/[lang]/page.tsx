import { Locale } from '~/i18n-config';

const RootPage = ({ params: lang }: { params: { lang: Locale } }) => {
  return <div>lang: {`${lang}`}</div>;
};

export default RootPage;

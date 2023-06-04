import { RootProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';

const ProfilesLayout = async ({ params: { lang }, children }: RootProps) => {
  const { t } = await useTranslation(lang, 'profile');
  return (
    <div>
      <span>{t('title')}</span>
      {children}
    </div>
  );
};

export default ProfilesLayout;

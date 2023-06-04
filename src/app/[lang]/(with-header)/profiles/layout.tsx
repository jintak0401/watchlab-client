import WithThumbnailLayout from '@/components/layouts/with-thumbnail-layout';

import { RootProps } from '@/app/[lang]/layout';
import { useTranslation } from '@/i18n';

const ProfilesLayout = async ({ params: { lang }, children }: RootProps) => {
  const { t } = await useTranslation(lang, 'profile');
  return (
    <WithThumbnailLayout
      title={t('title')}
      subtitle={t('subtitle')}
      thumbnail={'profiles'}
    >
      {children}
    </WithThumbnailLayout>
  );
};

export default ProfilesLayout;

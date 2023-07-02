'use client';

import tw, { css, styled } from 'twin.macro';

import useLocale from '@/hooks/use-locale';

import InputMail from '@/components/common/footer/mail-subscribe/input-mail';

import { useTranslation } from '@/i18n/client';

const MailSubscribe = () => {
  const locale = useLocale();
  const { t } = useTranslation(locale, 'common');
  return (
    <Container>
      <Background>
        <h4 tw={'font-franklin font-semibold text-white text-4xl'}>
          {t('footer.subscribe.title')}
        </h4>
        <InputMail />
        <p
          css={[
            tw`text-center font-franklin text-white italic`,
            css`
              width: 800px;
            `,
          ]}
        >
          {t('footer.subscribe.description')}
        </p>
      </Background>
    </Container>
  );
};

const Container = styled.div(() => [
  tw`bg-mail`,
  css`
    height: 230px;
  `,
]);

const Background = styled.div(() => [
  tw`flex h-full flex-col items-center justify-center gap-y-3 bg-mail-register bg-center bg-no-repeat`,
  css`
    background-size: auto 100%;
  `,
]);

export default MailSubscribe;

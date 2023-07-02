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
        <h4 tw={'font-franklin font-semibold text-white text-5xl'}>
          {t('footer.subscribe.title')}
        </h4>
        <InputMail />
        <p
          css={[
            tw`text-center font-franklin text-white text-2xl italic`,
            css`
              width: 1000px;
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
    height: 350px;
  `,
]);

const Background = styled.div(() => [
  tw`flex h-full flex-col items-center justify-evenly bg-mail-register bg-center bg-no-repeat`,
  css`
    background-size: auto 100%;
  `,
]);

export default MailSubscribe;

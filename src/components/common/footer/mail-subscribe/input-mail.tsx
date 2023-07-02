import { FormEvent, useState } from 'react';
import tw, { css, styled } from 'twin.macro';

import useLocale from '@/hooks/use-locale';

import { useTranslation } from '@/i18n/client';

interface Props {
  className?: string;
}

const InputMail = ({ className }: Props) => {
  const locale = useLocale();
  const { t } = useTranslation(locale, 'common');
  const [email, setEmail] = useState('');
  const [clicked, setClicked] = useState(false);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };
  return (
    <Form className={className} onSubmit={onSubmitHandler}>
      <Input
        type="email"
        placeholder={t('footer.subscribe.placeholder') ?? ''}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <SubmitButton css={[clicked && tw`animate-scale`]} type={'submit'}>
        REGISTER
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form(() => [
  tw`relative w-72`,
  css`
    width: 750px;
    height: 50px;
  `,
]);

const Input = tw.input`h-full w-full border-2 border-white bg-transparent px-3 text-2xl text-white outline-none placeholder:italic`;

const SubmitButton = tw.button`absolute right-2 top-3 z-20 inline-block rounded-sm bg-white! py-0.5 px-1.5`;

export default InputMail;

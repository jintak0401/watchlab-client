'use client';

import tw, { styled } from 'twin.macro';

const Title = styled.h1(() => [
  tw`font-bold font-crimson text-white text-6xl`,
  tw`leading-none`,
]);

export default Title;

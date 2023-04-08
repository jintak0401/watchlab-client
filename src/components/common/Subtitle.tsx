import styled from '@emotion/styled';
import tw, { css } from 'twin.macro';

const Subtitle = styled.h2(() => [
  tw`font-crimson text-white italic leading-none`,
  css`
    font-size: 40px;
  `,
]);

export default Subtitle;

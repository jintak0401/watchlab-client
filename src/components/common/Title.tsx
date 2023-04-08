import styled from '@emotion/styled';
import tw, { css } from 'twin.macro';

const Title = styled.h1(() => [
  tw`font-crimson font-bold text-white leading-none`,
  css`
    font-size: 100px;
  `,
]);

export default Title;

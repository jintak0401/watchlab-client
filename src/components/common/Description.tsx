import styled from '@emotion/styled';
import tw, { css } from 'twin.macro';

const Description = styled.div(() => [
  tw`text-center font-normal text-white leading-10`,
  css`
    width: 1110px;
    font-size: 30px;
  `,
]);

export default Description;

import styled from '@emotion/styled';
import tw from 'twin.macro';

const Subtitle = styled.h2(() => [
  tw`font-crimson text-white italic leading-7`,
  { fontSize: 40 },
]);

export default Subtitle;

import tw from 'twin.macro';

import Clock from './clock';

const ClockList = () => {
  return (
    <Container>
      <div>1</div>
      <Clock />
      <div>3</div>
    </Container>
  );
};

const Container = tw.div`flex items-center justify-center`;

export default ClockList;

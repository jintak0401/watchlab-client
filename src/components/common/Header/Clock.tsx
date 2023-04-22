import tw from 'twin.macro';
import 'twin.macro';

interface Props {
  onClick: () => void;
}

const Clock = ({ onClick }: Props) => {
  return <Button onClick={onClick}>clock</Button>;
};

const Button = tw.button`flex h-20 w-20 items-start justify-center bg-red-200`;

export default Clock;

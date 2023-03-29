import { ForwardedRef, forwardRef, PropsWithTwChildren } from 'react';
import 'twin.macro';

const Table = (
  { children, ...rest }: PropsWithTwChildren,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <div ref={ref} tw="relative overflow-x-auto" {...rest}>
      <table tw="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default forwardRef(Table);

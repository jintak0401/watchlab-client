import { PropsWithTwChildren } from 'react';

const Table = ({ children, ...rest }: PropsWithTwChildren) => {
  return <table {...rest}>{children}</table>;
};

export default Table;

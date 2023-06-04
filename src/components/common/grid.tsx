'use client';

import { PropsWithTwChildren } from 'react';

interface Props extends PropsWithTwChildren {
  row: number;
  col: number;
  gapX?: number;
  gapY?: number;
}

const Grid = ({
  children,
  className,
  row,
  col,
  gapX = 30,
  gapY = 30,
}: Props) => {
  return (
    <div
      className={className}
      css={[
        {
          display: 'grid',
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`,
          gap: `${gapY}px ${gapX}px`,
        },
      ]}
    >
      {children}
    </div>
  );
};

export default Grid;

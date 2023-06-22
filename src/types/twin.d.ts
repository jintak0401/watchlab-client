import { DOMAttributes, ReactNode } from 'react';
import styledImport, { css as cssImport, CSSProp } from 'styled-components';
import 'twin.macro';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }

  type PropsWithTw = {
    tw?: string;
    css?: CSSProp;
    className?: string;
  };

  type PropsWithTwChildren = PropsWithTw & { children: ReactNode };
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes extends DOMAttributes {
      key?: string | number;
      as?: string | Element;
    }
  }
}

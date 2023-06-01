import { Comment, DOMNode, Element } from 'html-react-parser';
import NextImage from 'next/image';

const string2css = (str?: string) => {
  if (!str) return {};
  const cssJson = `{"${str
    .replace(/; /g, '", "')
    .replace(/: /g, '": "')
    .replace(';', '')}"}`;

  const obj = JSON.parse(cssJson);

  const keyValues = Object.keys(obj).map((key) => {
    const camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
    return { [camelCased]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};

export const replaceNode = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.name === 'img') {
      const {
        attribs: { width, height, alt, src, style },
      } = domNode;
      return (
        <NextImage
          src={src}
          alt={alt ?? 'post image'}
          width={Number(width) || 640}
          height={Number(height) || 640}
          style={{ width, height, ...string2css(style) }}
        />
      );
    } else if (
      domNode instanceof Comment &&
      (domNode?.data || '').includes('pagebreak')
    ) {
      return <div className="pagebreak" />;
    }
  },
};

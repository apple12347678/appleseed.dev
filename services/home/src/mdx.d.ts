declare module '@mdx-js/react' {
  import * as React from 'react';

  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'del'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
    | 'Root'
    | 'Avatar'
    | 'Profile'
    | 'Updated';
  export type Components = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in ComponentType]?: React.ComponentType<any>;
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  // eslint-disable-next-line react/prefer-stateless-function,@typescript-eslint/naming-convention
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module '*.mdx' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

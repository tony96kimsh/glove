// src/mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import Mermaid from './MermaidRenderer';

export const mdxComponents: MDXComponents = {
  pre: (props) => <>{props.children}</>, // <pre> 제거
  code: (props) => {
    if (props.className === 'language-mermaid') {
      return <Mermaid chart={props.children as string} />;
    }
    return <code {...props} />;
  },
};
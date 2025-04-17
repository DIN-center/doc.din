// Create this new file to declare module types

// Docusaurus modules
declare module '@docusaurus/Link';
declare module '@theme/Heading';
declare module '@docusaurus/useDocusaurusContext';
declare module '@theme/Layout';
declare module '@site/*';

// CSS modules
declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

// SVG imports
declare module '*.svg' {
  import React from 'react';
  const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

// Fix JSX namespace issues
declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
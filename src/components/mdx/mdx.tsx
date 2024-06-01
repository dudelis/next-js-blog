import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export const mdxComponents: MDXComponents = {
  pre: ({ children }) => <pre className='font-mono text-lg bg-primary text-foreground flex p-4 overflow-auto max-w-full mb-6 w-full'>{children}</pre>,
  code: ({ children }) => <code className='m-0 text-sm break-words'>{children}</code>
}

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     // Allows customizing built-in components, e.g. to add styling.
//     h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
//     img: (props) => (
//       <Image
//         sizes="100vw"
//         style={{ width: '100%', height: 'auto' }}
//         {...(props as ImageProps)}
//       />
//     ),
//     ...components,
//   }
// }
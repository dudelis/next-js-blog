import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'

let components = {
  pre: ({ children, className }) => {
    console.log(args);
    return <pre className={className}>{children}</pre>
  }

}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
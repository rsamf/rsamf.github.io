import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Note: ({ children }: { children: React.ReactNode }) => {
      return (
        <div className="my-8 rounded-xl bg-zinc-100 px-5 py-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
          {children}
        </div>
      )
    },
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
  }
}
}

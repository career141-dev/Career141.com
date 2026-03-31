import { notFound } from 'next/navigation'
import blogsData from '@/data/blogs.json'
import { BlogPostContent } from './BlogPostContent'

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'unordered-list' | 'image'
  text?: string
  items?: string[]
  src?: string
  alt?: string
}

interface Blog {
  slug: string
  title: string
  category: string
  thumbnail: string
  author: string
  date: string
  content: ContentBlock[]
  images: string[]
}

export function generateStaticParams() {
  return blogsData.blogs.map((blog) => {
    const slugParts = blog.slug.split('/')
    return {
      slug: slugParts[slugParts.length - 1],
    }
  })
}

export default function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  return <BlogPostContentWrapper {...props} />
}

async function BlogPostContentWrapper(props: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await props.params
  const slug = resolvedParams.slug
  
  const blog = blogsData.blogs.find((b) => b.slug === slug || b.slug.endsWith('/' + slug)) as Blog | undefined

  if (!blog) {
    notFound()
  }

  return <BlogPostContent blog={blog} />
}

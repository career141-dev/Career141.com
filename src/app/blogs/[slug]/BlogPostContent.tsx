'use client'

import { Navbar } from '@/components/common/Navbar'
import { withBasePath } from '@/lib/assetPath'
import { LinkedinIcon, FacebookIcon, Twitter } from 'lucide-react'

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

export function BlogPostContent({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      
      <section className="w-full h-[50vh] md:h-[60vh] relative">
        <img
          src={withBasePath(blog.thumbnail)}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-sm font-bold mb-2" style={{ fontFamily: '"Quicksand", Sans-serif' }}>
            {blog.category}
          </p>
          <h1 style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '3em', lineHeight: '1.2em', color: '#FFFFFF', fontWeight: 700 }} className="mb-2">
            {blog.title}
          </h1>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-[800px] mx-auto px-4 flex justify-between items-center">
          <div style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1em', color: '#626262' }}>
            <div className="flex gap-8">
              <div>
                <p className="font-bold">Authored by</p>
                <p className="font-bold" style={{ color: '#11593F' }}>{blog.author}</p>
              </div>
              <div>
                <p className="font-bold">Published</p>
                <p className="font-bold" style={{ color: '#11593F' }}>{blog.date}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#" className="text-gray-500 hover:text-[#37A65E]">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#37A65E]">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#37A65E]">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[800px] mx-auto px-4">
        <hr className="border-t border-gray-300 my-4" />
      </div>

      <section className="w-full py-8 md:py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="prose max-w-none">
            {blog.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2 
                    key={index} 
                    style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.5em', fontWeight: 700, color: '#161618', marginTop: '2em', marginBottom: '0.5em' }}
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'unordered-list') {
                return (
                  <ul 
                    key={index}
                    style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.1em', lineHeight: '1.8', color: '#161618', marginBottom: '1.5em', paddingLeft: '1.5em', listStyleType: 'circle' }}
                  >
                    {block.items?.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5em' }}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'image' && block.src) {
                return (
                  <div key={index} className="my-8">
                    <img
                      src={withBasePath(block.src)}
                      alt={block.alt || 'Blog image'}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                )
              }
              return (
                <p 
                  key={index} 
                  style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.1em', lineHeight: '1.8', color: '#161618', marginBottom: '1.5em' }}
                >
                  {block.text}
                </p>
              )
            })}
          </div>

          {blog.images && blog.images.length > 1 && (
            <div className="mt-12">
              <h3 style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.3em', fontWeight: 700, color: '#626262', marginBottom: '1em' }}>
                Related Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blog.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={withBasePath(image)}
                    alt={`Related image ${index + 1}`}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

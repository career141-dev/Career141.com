'use client'

import { useState, useRef } from 'react'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { BlogCard } from '@/components/common/BlogCard/BlogCard'
import { withBasePath } from '@/lib/assetPath'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import blogsData from '@/data/blogs.json'

export default function BlogsPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const blogs = blogsData.blogs
  const scrollAmount = 320

  const scrollLeft = () => {
    if (carouselRef.current) {
      const { scrollLeft: sl } = carouselRef.current
      if (sl <= 0) {
        carouselRef.current.scrollTo({ left: carouselRef.current.scrollWidth / 2, behavior: 'instant' })
      }
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const { scrollLeft: sl, scrollWidth, clientWidth } = carouselRef.current
      if (sl >= scrollWidth - clientWidth - 10) {
        carouselRef.current.scrollTo({ left: scrollWidth / 2 - clientWidth, behavior: 'instant' })
      }
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const loopedBlogs = [...blogs, ...blogs]

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      <section className="w-full py-12 md:py-16 lg:py-24 bg-white min-h-[80vh] flex items-center justify-center relative">
        <img
          src={withBasePath('/images/blogs/Rectangle 1083.png')}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-[360px] md:top-[380px] w-[90%] md:w-[80%] h-auto object-contain z-0"
        />
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 relative z-10">
            <div className="text-left hidden md:block mt-25" style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '2em', fontWeight: 700, color: '#626262' }}>
              Featured
            </div>
            <div className="max-w-[1200px] mx-auto px-2 md:px-4 text-center pt-8 md:pt-16 w-full">
          <h1 style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.8em', fontWeight: 600, color: '#37A65E' }}>
            Blogs
          </h1>
          <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-base md:text-xl">
            Latest Insights, Trends and Career Advice from Career141
          </p>
          <a href="/blogs/executive-search-what-really-is-it/" className="block">
            <div className="mx-auto mt-8 md:mt-10 bg-white rounded-[30px] md:rounded-[50px] border border-gray-300 flex flex-col md:flex-row items-stretch justify-between max-w-5xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-left p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-center">
                <p className="[font-family:'Quicksand',Sans-serif] text-[#531590] text-sm md:text-base font-bold mb-3">Blog</p>
                <p style={{ fontFamily: '"Quicksand", Sans-serif', fontSize: '1.5em', lineHeight: '1.4em', color: '#626262', fontWeight: 700 }}>Executive Search - What really is it?</p>
              </div>
              <div className="w-full md:w-1/2 h-auto overflow-hidden">
                <img
                  src={withBasePath('/images/blogs/c1-1-scaled.webp')}
                  alt=""
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </a>

          </div>
          </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory justify-start md:justify-center pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {loopedBlogs.map((blog, index) => (
                <BlogCard
                  key={`${blog.slug}-${index}`}
                  slug={blog.slug}
                  title={blog.title}
                  category={blog.category}
                  thumbnail={blog.thumbnail}
                />
              ))}
            </div>
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-[-30px] bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 hidden md:block"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-[30px] bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-50 hidden md:block"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      <MeetingSchedulerSubsection />

      <CompanyFooter />
    </main>
  )
}

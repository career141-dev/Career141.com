'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/common/Navbar'
import { withBasePath } from '@/lib/assetPath'
import eventsData from '@/data/events.json'
import { HeroCarousel } from './HeroCarousel'

const heroEventSlugs = ['womens-day-and-iftar', '2024-new-year-meet-up', 'careerday-sliit', 'people-summit-2025-slasscom']

const galleryImages = eventsData.events
  .filter(event => !heroEventSlugs.includes(event.slug))
  .map(event => ({ image: event.thumbnail || event.images[0], name: event.name, slug: event.slug }))
  .reverse()

export default function EventsPage() {
  const [hoveredGallery, setHoveredGallery] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      <section className="relative w-full bg-white pb-5 overflow-hidden">
        <div className="relative w-full pt-4">
          <img
            src={withBasePath('/images/events/hero.png')}
            alt="Events Hero"
            className="w-full h-auto object-cover md:object-fill"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-[5%] md:pl-[10%]">
            <div className="relative flex items-center justify-start">
              <img
                src={withBasePath('/images/Vector 20.svg')}
                alt=""
                className="w-full max-w-[600px] md:max-w-[800px] h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-start pl-[30px] md:pl-[60px] pt-[10px]">
                <h1 className="[font-family:'Quicksand',Sans-serif] text-white text-[1.5em] md:text-[2.4em] font-normal leading-[1.4em] text-left">
                  <span className="text-[#CBFC06]">Discover</span>, Engage & <span className="text-[#CBFC06] font-bold"><br />Stay Informed</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroCarousel />

      <section className="w-full py-16 md:py-24 bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="[font-family:'Nordeco',Sans-serif] text-[#000000] text-2xl md:text-4xl text-left mb-8">
            Event <span className="text-[#006763] font-bold">Gallery</span>
          </h2>
          
          <div className="flex flex-col gap-8 md:gap-12">
            {galleryImages.map((item, index) => (
              <div 
                key={index} 
                className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden group"
                onMouseEnter={() => setHoveredGallery(index)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img
                  src={withBasePath(item.image)}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500 ease-in-out"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(17,89,63,0.74) 0%, rgba(17,89,63,0) 60%)',
                    opacity: hoveredGallery === index ? 1 : 0,
                    transform: hoveredGallery === index ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-2xl flex flex-col items-start justify-center pl-8 md:pl-16 transition-all duration-500 ease-in-out"
                  style={{ 
                    opacity: hoveredGallery === index ? 1 : 0,
                    transform: hoveredGallery === index ? 'translateX(0)' : 'translateX(-50px)'
                  }}
                >
                  <p className="[font-family:'Quicksand',Sans-serif] text-white text-xl md:text-2xl font-bold text-left px-4 mb-2">
                    {item.name}
                  </p>
                  <Link href={`/events/${item.slug}`} className="[font-family:'Quicksand',Sans-serif] text-white text-sm ml-4 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#006763] transition-colors inline-block">
                    View Event
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

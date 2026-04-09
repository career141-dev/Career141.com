import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { withBasePath } from '@/lib/assetPath'
import eventsData from '@/data/events.json'
import { EventCarousel } from './EventCarousel'
import { ImageViewer } from './ImageViewer'

export function generateStaticParams() {
  return eventsData.events.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  // Guard against placeholder/template slugs being treated as real pages.
  if (!slug || slug.includes('[') || slug.includes(']')) {
    notFound()
  }

  const eventData = eventsData.events.find(e => e.slug === slug)

  if (!eventData) {
    notFound()
  }

  const heroImage = eventData.thumbnail || eventData.images[0]

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      
      <section className="relative w-full bg-white pb-5 overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] pt-4">
          <img
            src={withBasePath(heroImage)}
            alt={eventData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-start pl-[5%] md:pl-[10%]">
            <div className="relative flex items-center justify-start">
              <img
                src={withBasePath('/images/Vector 20.svg')}
                alt=""
                className="w-full max-w-[600px] md:max-w-[800px] h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-start pl-[30px] md:pl-[60px] pt-[10px]">
                <h1 className="[font-family:'Quicksand',Sans-serif] text-white text-[1.5em] md:text-[2.4em] font-normal leading-[1.4em] text-left">
                  <span className="text-[#CBFC06]">{eventData.name}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <Link href="/events" className="[font-family:'Quicksand',Sans-serif] text-[#006763] text-sm mb-6 inline-block hover:underline">
            ← Back to Events
          </Link>
          
          <ImageViewer images={eventData.images} />
        </div>
      </section>

      <EventCarousel events={eventsData.events} currentSlug={slug} />
      
      <div className="pt-10">
        <MeetingSchedulerSubsection />
      </div>
      
      <CompanyFooter />
    </main>
  )
}

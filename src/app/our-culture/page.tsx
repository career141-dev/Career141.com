'use client'

import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { withBasePath } from '@/lib/assetPath'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const boxDescriptions = [
  "We celebrate individuality and encourage you to thrive as your authentic self. Your unique perspectives and talents are valued and appreciated here.",
  "We listen attentively to understand your needs, aspirations, and concerns. Your voice matters and shapes our approach to serving you.",
  "You have the power to choose your own path. We provide the resources and opportunities to help you build your dream team.",
  "Discover your strengths, potential, and career direction through our comprehensive assessment and guidance programs.",
  "Your hard work and achievements deserve recognition. We celebrate milestones and accomplishments every step of the way.",
  "Join a team that invests in your professional growth. We provide training, mentorship, and career advancement opportunities."
]

const employeeStories = [
  {
    name: "Nuha Iqbarek",
    designation: "Senior Executive - Talent Acquisition",
    title: "A Meaningful Journey",
    story: "It's been just over two months since I joined Career141, and it's been such a meaningful journey so far. I've gained hands-on experience in talent acquisition from understanding diverse roles and industries to confidently engaging with professionals and candidates. It's helped me sharpen my communication, time management, and sourcing skills. What truly stands out is the supportive culture and the inspiring team that constantly motivates me to grow."
  },
  {
    name: "Umar Ahamad",
    designation: "Senior Executive - Talent Acquisition",
    title: "A True Learning Hub",
    story: "Working at Career141 as a Senior Executive – Talent Acquisition has been nothing short of inspiring. I consider this place a true learning hub where every day brings new opportunities for growth. What makes it even more special is the constant mentorship and guidance from Mr. Azeem. Working alongside such a great mentor has helped me grow both professionally and personally."
  },
  {
    name: "Rakshana Aswer",
    designation: "Executive - Operations",
    title: "Growth and Gratitude",
    story: "Alhamdulillah for every step, every test, and every opening that brought me to where I am today. My time at Career141 has been a path of learning, challenges, and beautiful growth and I'm truly grateful to be part of a place that values not just performance, but people. With the guidance of Allah and the constant encouragement from my Career141 Team, I continue this journey with renewed purpose and deep motivation to give my best, In Sha Allah."
  }
]

export default function OurCulturePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const schedulerRef = useRef<HTMLDivElement>(null)

  const scrollToScheduler = () => {
    schedulerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % employeeStories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + employeeStories.length) % employeeStories.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % employeeStories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-white m-0 p-0">
      <Navbar bgColor="#0F221B" />
      <section className="relative w-full bg-white pb-5 overflow-hidden">
        <div className="relative w-full pt-16 md:pt-4">
          <img
            src={withBasePath('/images/Culture/Group 3584.png')}
            alt="Our Culture Hero"
            className="hidden md:block w-full h-auto object-cover md:object-fill"
          />
          <div className="block md:hidden overflow-hidden relative">
            <img
              src={withBasePath('/images/Culture/Group 3584.png')}
              alt="Our Culture Hero"
              className="w-full h-auto"
              style={{ minWidth: '200vw' }}
            />
          </div>
          <img
            src={withBasePath('/images/Culture/Vector 335.svg')}
            alt=""
            className="hidden md:block absolute top-[70px] right-0 z-10 w-2/4 h-auto"
          />
          <div className="md:absolute md:top-30 md:right-20 md:z-20 md:w-[40%] md:flex md:flex-col md:gap-4 md:p-6 block px-4 py-4">
            <div className="md:flex md:flex-col md:items-start md:justify-center md:gap-1 md:mt-22 md:ml-20 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={withBasePath('/images/Culture/g1.svg')}
                  alt=""
                  className="w-5 md:w-10 h-5 md:h-10"
                />
                <span className="[font-family:'Quicksand',Sans-serif] text-[#11593f] text-xs md:text-[27px]">
                  Our Culture
                </span>
              </div>
              <span className="[font-family:'Nordeco',Sans-serif] text-[#000000] text-sm md:text-[2.8em] font-normal leading-[1.2em]">
                Growth, Performance <br className="hidden md:block" />And Collaboration
              </span>
            </div>
            <div className="md:flex md:flex-col md:items-end md:gap-2 md:mt-2">
              <p className="[font-family:'Quicksand',Sans-serif] text-[#000000] text-xs md:text-sm md:max-w-[300px] text-left md:text-right mb-3">
                Welcome to Career141, where we pride ourselves on cultivating a dynamic and inclusive environment.
              </p>
              <button onClick={scrollToScheduler} className="bg-[#11593f] text-white [font-family:'Quicksand',Sans-serif] text-xs md:text-lg px-4 md:px-10 py-2 md:py-4 rounded-full whitespace-nowrap w-fit font-semibold hover:bg-[#0d4a32] transition-colors">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="[font-family:'Nordeco',Sans-serif] text-[#000000] text-2xl md:text-4xl text-left mb-2">
            How we <span className="text-[#006763] font-bold">differentiate</span>
          </h2>
          <div className="w-24 h-1 bg-[#006763] mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="grid grid-cols-1 gap-4">
            {[
              'Enjoy being you',
              'We hear you',
              'Pick your team',
              'Explore your self',
              'Be Recognized',
              'Growth with us'
            ].map((title, index) => (
                <div 
                  key={index}
                  className={`rounded-xl p-4 flex flex-col ${expandedIndex === index ? 'bg-gradient-to-r from-[#07B174] to-[#01C5C4]' : 'bg-gradient-to-r from-[#E2FEFE] to-[#E3F9EB]'}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`[font-family:'Quicksand',Sans-serif] text-left text-base md:text-lg font-bold ${expandedIndex === index ? 'text-white' : 'text-black'}`}>
                      {title}
                    </h3>
                    <button 
                      onClick={() => handleToggle(index)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold ${expandedIndex === index ? 'bg-white text-[#07B174]' : 'bg-[#006763] text-white'}`}
                    >
                      {expandedIndex === index ? '−' : '+'}
                    </button>
                  </div>
                  {expandedIndex === index && (
                    <p className="[font-family:'Quicksand',Sans-serif] text-white text-sm mt-3 text-left">
                      {boxDescriptions[index]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <img 
              src={withBasePath('/images/Culture/Image differentiate.svg')} 
              alt="How we differentiate" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={withBasePath('/images/Culture/beautiful-city.png')} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <h2 className="[font-family:'Nordeco',Sans-serif] text-white text-2xl md:text-4xl text-center mb-12">
            Stories from our team
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {employeeStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
                      <h3 className="[font-family:'Quicksand',Sans-serif] text-[#006763] text-xl md:text-2xl font-bold text-center mb-4">
                        {story.title}
                      </h3>
                      <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-center text-sm md:text-base mb-6">
                        {story.story}
                      </p>
                      <div className="text-center">
                        <p className="[font-family:'Quicksand',Sans-serif] text-black font-bold">
                          {story.name}
                        </p>
                        <p className="[font-family:'Quicksand',Sans-serif] text-gray-500 text-sm">
                          {story.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              ‹
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl"
            >
              ›
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {employeeStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              '/images/Culture/galery/13765835_1120768357979477_1455198802458033557_o-2.webp',
              '/images/Culture/galery/Rectangle-2207.webp',
              '/images/Culture/galery/Rectangle-2208.webp',
              '/images/Culture/galery/Rectangle-2209.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-04-02-at-4.59-2.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-27-at-7.14-2.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-28-at-2.14-7.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-28-at-2.14-8.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-28-at-2.14-9.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-28-at-3.28-2.webp',
              '/images/Culture/galery/WhatsApp-Image-2024-05-28-at-4.22-2.webp',
            ].map((img, index) => (
              <div key={index} className="break-inside-avoid">
                <img 
                  src={withBasePath(img)} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-24 relative">
        <div className="w-full flex justify-center relative">
          <img 
            src={withBasePath('/images/Culture/hexigon.png')} 
            alt="Hexigon" 
            className="h-auto max-w-full w-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-[200%] -translate-y-[250%] px-2 md:px-0">
            <h2 className="[font-family:'Quicksand',Sans-serif] text-sm md:text-xl lg:text-[2em] font-light uppercase leading-[1.4] text-center" style={{ color: '#444444' }}>
              Enjoy our <span style={{ color: '#37A65E', fontWeight: 'bold' }}>benefits</span> & <br className="hidden md:block" /> <span style={{ color: '#37A65E', fontWeight: 'bold' }}>grow with us</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={withBasePath('/images/Culture/Frame-2442-1024x437.webp')} 
                alt="Work with us" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="[font-family:'Quicksand',Sans-serif] text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
                Work with us and make a difference
              </h2>
              <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-sm md:text-base mb-6">
                With us you'll have the opportunity to work with industry leaders, embrace cutting-edge technologies, and develop expertise across diverse fields. We offer you the unique opportunity to collaborate with some of the world's leading MNCs and conglomerates. Joining our team means working alongside top industry professionals and contributing to impactful projects that shape the future of global business. Join us and let's shape the future together.
              </p>
              <Link href="/premium-jobs" className="bg-[#37A65E] text-white [font-family:'Quicksand',Sans-serif] px-8 py-3 rounded-full font-semibold hover:bg-[#2d8a4d] transition-colors inline-block">
                View all job opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-24 bg-white">
        <div className="w-full relative">
          <img 
            src={withBasePath('/images/Culture/big tube.svg')} 
            alt="Career pathways" 
            className="w-full h-auto"
          />
          <div className="absolute top-[-30%] left-0 w-full h-full flex flex-col md:flex-row items-end p-4 md:p-16 pb-8 md:pb-24">
            <div className="md:w-1/2 md:pr-4 ml-20 md:ml-100">
              <h2 className="[font-family:'Quicksand',Sans-serif] text-base md:text-2xl lg:text-3xl font-bold text-black mb-1 md:mb-2">
                We offer <span style={{ color: '#01C5C4' }}>clear<br className="hidden md:block" />career pathways</span> <br className="hidden md:block" /> to ensure fair and <br className="hidden md:block" /> equal opportunities <br className="hidden md:block" />for <span style={{ color: '#01C5C4' }}>our people</span>
              </h2>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-xs md:text-base mb-1 md:mb-2">
                Our dedication to equitable growth ensures that everyone has the support and resources needed to reach their full potential. Join us, and embark on a rewarding career path where your growth and success are our top priorities.
              </p>
              <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-xs md:text-base">
                At Career141, we are committed to providing clear career development pathways that ensure fair and equal opportunities for all our team members. We believe in fostering an environment where every individual can thrive, grow, and achieve their professional aspirations. Through structured mentorship programs, continuous learning initiatives, and transparent advancement criteria, we empower our employees to take charge of their career journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-white">
        <div className="w-full relative">
          <img 
            src={withBasePath('/images/Culture/Frame-2417-2048x1318.webp')} 
            alt="Career Development" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-4 left-4 md:bottom-12 md:left-16">
            <h2 className="[font-family:'Quicksand',Sans-serif] text-lg md:text-2xl lg:text-[2.6em] font-normal leading-[1.2em]">
              <span style={{ color: '#444444' }}>Career</span> <span style={{ fontWeight: 'bold', color: '#11593F' }}>DEVELOPMENT</span>
            </h2>
          </div>
        </div>
      </section>

      <div ref={schedulerRef}>
        <MeetingSchedulerSubsection />
      </div>

      <CompanyFooter />
    </main>
  )
}

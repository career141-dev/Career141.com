'use client'

import { Navbar } from '@/components/common/Navbar'
import { CompanyFooter } from '@/components/common'
import { MeetingSchedulerSubsection } from '@/components/home/sections/MeetingSchedulerSubsection'
import { InfiniteCarousel } from '@/components/culture/InfiniteCarousel'
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
  const [isMobile, setIsMobile] = useState(false)
  const schedulerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToScheduler = () => {
    schedulerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
            <div className="md:flex md:flex-col md:items-start md:justify-center md:gap-1 md:mt-22 md:ml-36 mb-0">
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
              <span style={{ fontFamily: "'Nordeco', Sans-serif" }} className="text-[#000000] text-sm md:text-[2.8em] font-normal leading-[1.2em] mb-0 block">
                Growth, Performance <br className="hidden md:block" />And Collaboration
              </span>
            </div>
            <div className="md:flex md:flex-col md:items-end md:gap-2 md:mt-2">
              <p className="[font-family:'Quicksand',Sans-serif] text-[#000000] text-sm md:text-base md:max-w-[300px] text-left md:text-right mb-3 mt-4">
                Welcome to Career141, where we pride ourselves on cultivating a dynamic and inclusive environment.
              </p>
              <button onClick={scrollToScheduler} className="bg-gradient-to-r from-[#37A65E] to-[#11593F] text-white [font-family:'Quicksand',Sans-serif] text-[0.9em] font-medium px-10 py-1.5 rounded-[10px] whitespace-nowrap w-fit border-none hover:opacity-90 transition-opacity">
                Join Our Team
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
                <div key={index} className="mb-4">
                  <div 
                    className={`rounded-xl p-4 flex flex-col transition-colors ${expandedIndex === index ? 'bg-gradient-to-r from-[#07B174] to-[#01C5C4]' : 'bg-gradient-to-r from-[#E2FEFE] to-[#E3F9EB]'}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`[font-family:'Quicksand',Sans-serif] text-left text-base md:text-lg font-bold ${expandedIndex === index ? 'text-white' : 'text-black'}`}>
                        {title}
                      </h3>
                      <button 
                        onClick={() => handleToggle(index)}
                        className={`text-2xl font-bold ${expandedIndex === index ? 'text-white' : 'text-[#006763]'}`}
                      >
                        {expandedIndex === index ? '−' : '+'}
                      </button>
                    </div>
                  </div>
                  {expandedIndex === index && (
                    <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-sm mt-2 text-left px-2">
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

      <section className="w-full py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={withBasePath('/images/Culture/team-background.webp')} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <InfiniteCarousel isMobile={isMobile} />
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

      <section className="w-full py-16 md:py-24 relative">
        <div className="w-full relative">
          <img 
            src={withBasePath('/images/Culture/big tube.png')} 
            alt="Work with us" 
            className="hidden md:block w-full h-auto"
          />
          <div className="block md:hidden w-full px-4 py-8">
            <h2 className="mb-4 text-xl font-bold" style={{ fontFamily: "'Quicksand', Sans-serif", fontWeight: 700, lineHeight: '1.2em', color: '#11593F' }}>
              Work with us and make a <b>difference</b>
            </h2>
            <img 
              src={withBasePath('/images/Culture/people.png')} 
              alt="Work with us" 
              className="w-full h-auto mb-4"
            />
            <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-sm mb-4">
              With us you'll have the opportunity to work with industry leaders, embrace cutting-edge technologies, and develop expertise across diverse fields. We offer you the unique opportunity to collaborate with some of the world's leading MNCs and conglomerates. Joining our team means working alongside top industry professionals and contributing to impactful projects that shape the future of global business. Join us and let's shape the future together.
            </p>
            <Link href="/premium-jobs" className="bg-[#37A65E] text-white [font-family:'Quicksand',Sans-serif] px-8 py-3 rounded-full font-semibold hover:bg-[#2d8a4d] transition-colors inline-block">
              View all job opportunities
            </Link>
          </div>
          <div className="absolute inset-0 hidden md:flex items-center p-8 md:p-16 lg:p-24">
            <div className="w-1/2 flex flex-col items-center">
              <h2 className="mb-4 text-xl md:text-2xl lg:text-[2.4em] text-center" style={{ fontFamily: "'Quicksand', Sans-serif", fontWeight: 400, lineHeight: '1.2em', color: '#11593F' }}>
                Work with us and make a <b>difference</b>
              </h2>
              <img 
                src={withBasePath('/images/Culture/people.png')} 
                alt="Work with us" 
                className="w-full max-w-[1000px] h-auto mt-20 mr-20"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <p className="[font-family:'Quicksand',Sans-serif] text-gray-600 text-sm md:text-base mb-4">
                With us you'll have the opportunity to work with industry leaders, embrace cutting-edge technologies, and develop expertise across diverse fields. We offer you the unique opportunity to collaborate with some of the world's leading MNCs and conglomerates. Joining our team means working alongside top industry professionals and contributing to impactful projects that shape the future of global business. Join us and let's shape the future together.
              </p>
              <Link href="/premium-jobs" className="bg-[#37A65E] text-white [font-family:'Quicksand',Sans-serif] px-6 py-3 rounded-full font-semibold hover:bg-[#2d8a4d] transition-colors inline-block w-max">
                View all job opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-24 relative">
        <div className="w-full relative">
          <img 
            src={withBasePath('/images/Culture/Group 3587.png')} 
            alt="Career pathways" 
            className="hidden md:block w-full h-auto"
          />
          <div className="block md:hidden p-6">
            <h2 className="[font-family:'Quicksand',Sans-serif] font-normal text-black mb-3 text-xl">
              We offer <span style={{ color: '#01C5C4' }}><b>clear</b> <b>career pathways</b></span> to ensure fair and equal opportunities for <span style={{ color: '#01C5C4' }}><b>our people</b></span>
            </h2>
            <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-xs mb-2">
              Our dedication to equitable growth ensures that everyone has the support and resources needed to reach their full potential. Join us, and embark on a rewarding career path where your growth and success are our top priorities.
            </p>
            <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-xs">
              At Career141, we are committed to providing clear career development pathways that ensure fair and equal opportunities for all our team members. We believe in fostering an environment where every individual can thrive, grow, and achieve their professional aspirations. Through structured mentorship programs, continuous learning initiatives, and transparent advancement criteria, we empower our employees to take charge of their career journeys.
            </p>
          </div>
          <div className="absolute inset-0 hidden md:flex flex-col md:flex-row items-center justify-center p-4 md:p-16">
            <div className="md:w-1/2 md:pr-8 flex flex-col items-center md:items-center justify-center">
              <h2 className="[font-family:'Quicksand',Sans-serif] font-normal text-black mb-1 md:mb-2" style={{ fontSize: '38px' }}>
                We offer <span style={{ color: '#01C5C4' }}><b>clear</b><br className="hidden md:block" /><b>career pathways</b></span> <br className="hidden md:block" /> to ensure fair and <br className="hidden md:block" /> equal opportunities <br className="hidden md:block" />for <span style={{ color: '#01C5C4' }}><b>our people</b></span>
              </h2>
            </div>
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-center mt-4 md:mt-0">
              <p className="[font-family:'Quicksand',Sans-serif] text-gray-700 text-xs md:text-base mb-1 md:mb-2">
                Our dedication to equitable growth ensures that everyone has the support and resources needed to reach their full potential. Join us, and embark on a rewarding career path where your growth and success are our top priorities.
              </p>
              <br></br>
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

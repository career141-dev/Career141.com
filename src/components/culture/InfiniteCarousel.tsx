'use client'

import { useState, useEffect, useRef } from 'react'
import { withBasePath } from '@/lib/assetPath'

const images = [
  '/images/Culture/carousel/Frame-2633.webp',
  '/images/Culture/carousel/Frame-2629.webp',
  '/images/Culture/carousel/Frame-2630.webp',
  '/images/Culture/carousel/Frame-2631.webp',
  '/images/Culture/carousel/Frame-2632.webp',
]

interface InfiniteCarouselProps {
  autoPlayInterval?: number
  isMobile: boolean
}

export function InfiniteCarousel({ autoPlayInterval = 4000, isMobile }: InfiniteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
  const isDragging = useRef(false)
  const totalImages = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      goNext()
    }, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlayInterval])

  const goNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('next')
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages)
      setDirection(null)
      setIsAnimating(false)
    }, 500)
  }

  const goPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('prev')
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
      setDirection(null)
      setIsAnimating(false)
    }, 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    touchStartX.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    const diff = touchStartX.current - e.clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  const handleMouseLeave = () => {
    isDragging.current = false
  }

  const getCardStyle = (position: 'left' | 'center' | 'right') => {
    const isNext = direction === 'next'
    const isPrev = direction === 'prev'

    const cardWidth = isMobile ? 300 : 460
    const cardHeight = isMobile ? 480 : 620
    const sideOffset = isMobile ? 220 : 580
    const depthOffset = isMobile ? 120 : 180

    if (isNext) {
      if (position === 'left') {
        return {
          transform: `translateX(0) translateZ(0px) rotateY(0deg)`,
          zIndex: 15,
        }
      }
      if (position === 'center') {
        return {
          transform: `translateX(${sideOffset}px) translateZ(-${depthOffset}px) rotateY(-20deg)`,
          zIndex: 5,
        }
      }
      if (position === 'right') {
        return {
          transform: `translateX(-${sideOffset * 2}px) translateZ(-${depthOffset * 2}px) rotateY(30deg)`,
          zIndex: 1,
          opacity: 0,
        }
      }
    }

    if (isPrev) {
      if (position === 'left') {
        return {
          transform: `translateX(${sideOffset * 2}px) translateZ(-${depthOffset * 2}px) rotateY(-30deg)`,
          zIndex: 1,
          opacity: 0,
        }
      }
      if (position === 'center') {
        return {
          transform: `translateX(-${sideOffset}px) translateZ(-${depthOffset}px) rotateY(20deg)`,
          zIndex: 5,
        }
      }
      if (position === 'right') {
        return {
          transform: `translateX(0) translateZ(0px) rotateY(0deg)`,
          zIndex: 15,
        }
      }
    }

    if (position === 'left') {
      return {
        transform: `translateX(-${sideOffset}px) translateZ(-${depthOffset}px) rotateY(20deg)`,
        zIndex: 5,
      }
    }
    if (position === 'center') {
      return {
        transform: 'translateX(0) translateZ(0px) rotateY(0deg)',
        zIndex: 10,
      }
    }
    if (position === 'right') {
      return {
        transform: `translateX(${sideOffset}px) translateZ(-${depthOffset}px) rotateY(-20deg)`,
        zIndex: 5,
      }
    }
  }

  const getVisibleItems = () => {
    const prev = (currentIndex - 1 + totalImages) % totalImages
    const next = (currentIndex + 1) % totalImages
    return [
      { index: prev, position: 'left' as const },
      { index: currentIndex, position: 'center' as const },
      { index: next, position: 'right' as const },
    ]
  }

  const visibleItems = getVisibleItems()

  return (
    <div className="relative w-full">
      <h2 
        className="text-center mb-8"
        style={{ 
          fontFamily: '"Quicksand", Sans-serif',
          fontSize: '2.2 em',
          fontWeight: 400,
          lineHeight: '1.2em',
          color: '#ffffff'
        }}
      >
        Stories from <span style={{ color: '#37A65E' }}><b> our team</b></span>
      </h2>
      <div 
        className="relative h-[550px] md:h-[780px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1400px', perspectiveOrigin: 'center center' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleItems.map((item, idx) => {
          const baseStyle = getCardStyle(item.position)
          
          return (
            <div
              key={`${item.index}-${idx}`}
              className="absolute transition-all duration-500 ease-in-out flex items-center justify-center"
              style={{
                width: isMobile ? '300px' : '460px',
                height: isMobile ? '480px' : '620px',
                ...baseStyle,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-white rounded-2xl p-3 shadow-lg w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src={withBasePath(images[item.index])} 
                  alt={`Carousel ${item.index + 1}`} 
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

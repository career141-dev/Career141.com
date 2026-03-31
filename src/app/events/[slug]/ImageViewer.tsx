'use client'

import { useState, useEffect, useCallback } from 'react'
import { withBasePath } from '@/lib/assetPath'

interface ImageViewerProps {
  images: string[]
  initialIndex?: number
}

export function ImageViewer({ images, initialIndex = 0 }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isOpen, setIsOpen] = useState(false)

  const openViewer = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeViewer = () => {
    setIsOpen(false)
  }

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') closeViewer()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, goToPrevious, goToNext])

  if (!isOpen) {
    return (
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openViewer(index)}
          >
            <img
              src={withBasePath(img)}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={closeViewer}
        className="absolute top-4 right-4 text-white text-4xl font-light hover:text-[#CBFC06] transition-colors z-50"
      >
        &times;
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white text-5xl font-light hover:text-[#CBFC06] transition-colors p-4"
      >
        &#8249;
      </button>

      <div className="max-w-[90vw] max-h-[90vh]">
        <img
          src={withBasePath(images[currentIndex])}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>

      <button
        onClick={goToNext}
        className="absolute right-4 text-white text-5xl font-light hover:text-[#CBFC06] transition-colors p-4"
      >
        &#8250;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm [font-family:'Quicksand',Sans-serif]">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

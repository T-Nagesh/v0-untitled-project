"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface MouseFollowingPhotoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  heroRef?: React.RefObject<HTMLElement>
}

export function MouseFollowingPhoto({ src, alt, width, height, className = "", heroRef }: MouseFollowingPhotoProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInHero, setIsInHero] = useState(false)
  const [heroBounds, setHeroBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const photoSize = { width: 256, height: 256 } // Approximate size of the photo (md:w-64 md:h-64)

  // Track the last 5 mouse positions for the trail effect
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ])

  // Update hero bounds on resize and scroll
  useEffect(() => {
    const updateBounds = () => {
      if (heroRef?.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setHeroBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)
    window.addEventListener("scroll", updateBounds)
    return () => {
      window.removeEventListener("resize", updateBounds)
      window.removeEventListener("scroll", updateBounds)
    }
  }, [heroRef])

  // Handle text color change when photo is over text
  useEffect(() => {
    if (!isInHero || !heroRef?.current) return

    // Function to check if photo overlaps with an element
    const isOverlapping = (element: Element) => {
      const rect = element.getBoundingClientRect()

      // Calculate photo bounds (centered on mouse position)
      const photoLeft = mousePosition.x - photoSize.width / 2
      const photoRight = mousePosition.x + photoSize.width / 2
      const photoTop = mousePosition.y - photoSize.height / 2
      const photoBottom = mousePosition.y + photoSize.height / 2

      // Check for overlap
      return !(photoRight < rect.left || photoLeft > rect.right || photoBottom < rect.top || photoTop > rect.bottom)
    }

    // Find all text elements in the hero section
    const textElements = heroRef.current.querySelectorAll("h1, p")

    // Check each text element for overlap
    textElements.forEach((element) => {
      if (isOverlapping(element)) {
        // Add green text class with !important to override any existing styles
        element.setAttribute("style", "color: #22c55e !important; transition: color 0.3s ease;")
      } else {
        // Remove the style attribute to revert to original color
        element.removeAttribute("style")
      }
    })

    // Cleanup function to remove all green text styles when component unmounts
    return () => {
      textElements.forEach((element) => {
        element.removeAttribute("style")
      })
    }
  }, [mousePosition, isInHero, heroRef, photoSize.width, photoSize.height])

  // Track mouse position and update trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is within hero section
      if (heroBounds.width === 0 || heroBounds.height === 0) return

      const mouseInHero =
        e.clientX >= heroBounds.left &&
        e.clientX <= heroBounds.left + heroBounds.width &&
        e.clientY >= heroBounds.top &&
        e.clientY <= heroBounds.top + heroBounds.height

      setIsInHero(mouseInHero)

      // Update current mouse position
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      }

      setMousePosition(newPosition)

      // Update trail positions
      setTrailPositions((prevPositions) => {
        // Add current position to the beginning and remove the last one
        return [newPosition, ...prevPositions.slice(0, 4)]
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [heroBounds])

  if (!isInHero) return null

  // Define opacity levels for the trail
  const trailOpacities = [1, 0.8, 0.6, 0.4, 0.2]

  return (
    <>
      {/* Render the trail (in reverse order so the most transparent is rendered first) */}
      {trailPositions.map((position, index) => {
        // Skip the first position (index 0) as it will be the main photo
        if (index === 0) return null

        return (
          <motion.div
            key={`trail-${index}`}
            className={`fixed pointer-events-none ${className}`}
            style={{
              left: 0,
              top: 0,
              transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
              opacity: trailOpacities[index],
              zIndex: 10 - index, // Ensure proper stacking
            }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-2 border-green-400">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent mix-blend-overlay z-10"></div>
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={width}
                height={height}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-green-400"></div>
            </div>
          </motion.div>
        )
      })}

      {/* Main photo (current position) */}
      <motion.div
        className={`fixed pointer-events-none ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
          zIndex: 15, // Ensure main photo is on top
        }}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-2 border-green-400">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent mix-blend-overlay z-10"></div>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></div>
          <div className="absolute top-0 right-0 w-1 h-full bg-green-400"></div>
        </div>
      </motion.div>
    </>
  )
}

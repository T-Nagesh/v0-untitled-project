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

  // Track mouse position
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

      // Update mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [heroBounds])

  if (!isInHero) return null

  return (
    <motion.div
      className={`fixed pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        left: 0,
        top: 0,
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
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
}

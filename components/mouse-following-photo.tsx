"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"

interface MouseFollowingPhotoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function MouseFollowingPhoto({ src, alt, width, height, className = "" }: MouseFollowingPhotoProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerBounds, setContainerBounds] = useState({ left: 0, top: 0, width: 0, height: 0 })

  // Motion values for smooth animation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother, slightly delayed following
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 }) // Increased stiffness, reduced damping
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 })

  // Transform the spring values to increase movement range (much more noticeable movement)
  const transformX = useTransform(springX, [-500, 500], [-50, 50]) // Increased from ±15 to ±50
  const transformY = useTransform(springY, [-500, 500], [-50, 50])

  // Update container bounds on resize
  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)
    return () => window.removeEventListener("resize", updateBounds)
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to container
      const x = e.clientX - containerBounds.left
      const y = e.clientY - containerBounds.top

      setMousePosition({ x, y })

      // Update motion values
      mouseX.set(x - containerBounds.width / 2)
      mouseY.set(y - containerBounds.height / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [containerBounds, mouseX, mouseY])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        style={{
          x: transformX,
          y: transformY,
        }}
        className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-2 border-green-400"
      >
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
      </motion.div>
    </div>
  )
}

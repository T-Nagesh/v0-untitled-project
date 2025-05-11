"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FragmentedPhotoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function FragmentedPhoto({ src, alt, width, height, className = "" }: FragmentedPhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 })
  const [mouseDirection, setMouseDirection] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Grid configuration
  const gridSize = { cols: 10, rows: 10 }
  const fragments = Array.from({ length: gridSize.rows * gridSize.cols })

  // Track mouse position and calculate direction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Calculate mouse direction
        const dirX = x - prevMousePosition.x
        const dirY = y - prevMousePosition.y

        // Update states
        setPrevMousePosition({ x, y })
        setMousePosition({ x, y })
        setMouseDirection({
          x: dirX !== 0 ? Math.sign(dirX) : 0,
          y: dirY !== 0 ? Math.sign(dirY) : 0,
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMouseMove)
    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter)
      containerRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseenter", handleMouseEnter)
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [prevMousePosition])

  return (
    <div ref={containerRef} className={`relative w-48 h-48 md:w-64 md:h-64 overflow-visible ${className}`}>
      {/* Border frame */}
      <div className="absolute inset-0 border-2 border-green-400 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-green-400"></div>
      </div>

      {/* Image fragments */}
      <div className="relative w-full h-full">
        {fragments.map((_, index) => {
          const row = Math.floor(index / gridSize.cols)
          const col = index % gridSize.cols

          // Calculate position and size of each fragment
          const fragmentWidth = 100 / gridSize.cols
          const fragmentHeight = 100 / gridSize.rows
          const x = col * fragmentWidth
          const y = row * fragmentHeight

          // Calculate distance from mouse as a factor for animation intensity
          const centerX = x + fragmentWidth / 2
          const centerY = y + fragmentHeight / 2
          const mouseX = (mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100
          const mouseY = (mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100
          const distanceFromMouse = Math.sqrt(Math.pow(centerX - mouseX, 2) + Math.pow(centerY - mouseY, 2))

          // Closer fragments move more dramatically
          const maxDistance = Math.sqrt(Math.pow(100, 2) + Math.pow(100, 2))
          const distanceFactor = 1 - Math.min(distanceFromMouse / maxDistance, 1)

          // Calculate movement direction and intensity
          const moveIntensity = isHovering ? 30 * distanceFactor : 0
          const moveX = mouseDirection.x * moveIntensity
          const moveY = mouseDirection.y * moveIntensity

          // Calculate rotation based on mouse direction
          const rotateIntensity = isHovering ? 15 * distanceFactor : 0
          const rotateX = mouseDirection.y * rotateIntensity
          const rotateY = -mouseDirection.x * rotateIntensity

          return (
            <motion.div
              key={index}
              className="absolute overflow-hidden"
              style={{
                width: `${fragmentWidth}%`,
                height: `${fragmentHeight}%`,
                left: `${x}%`,
                top: `${y}%`,
                zIndex: isHovering ? 10 : 1,
              }}
              animate={{
                x: moveX,
                y: moveY,
                rotateX: rotateX,
                rotateY: rotateY,
                scale: isHovering ? 1 + distanceFactor * 0.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5 + distanceFactor * 0.5,
              }}
            >
              <div
                className="w-[1000%] h-[1000%] absolute"
                style={{
                  left: `${-col * 100}%`,
                  top: `${-row * 100}%`,
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
    </div>
  )
}

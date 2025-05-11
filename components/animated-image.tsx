"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function AnimatedImage({ src, alt, width, height, className, priority }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        className="w-full h-auto"
      />
    </motion.div>
  )
}

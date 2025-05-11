"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProjectImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
  className?: string
  containerClassName?: string
}

export function ProjectImage({
  src,
  alt,
  width = 1200,
  height = 800,
  caption,
  className,
  containerClassName,
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <figure className={cn("relative", containerClassName)}>
      <div className={cn("overflow-hidden", className)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-auto transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {caption && <figcaption className="text-sm text-neutral-400 mt-2">{caption}</figcaption>}
    </figure>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/projects-data"
import { AsciiBackground } from "@/components/ascii-background"
import { MouseFollowingPhoto } from "@/components/mouse-following-photo"

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const projects = getAllProjects().filter((project) => project.slug !== "3d-printed-watercolor-box")
  const heroRef = useRef<HTMLDivElement>(null)
  const [showPhoto, setShowPhoto] = useState(true)
  const [isMouseInHero, setIsMouseInHero] = useState(false)

  // Handle scroll to hide photo when scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setShowPhoto(heroBottom > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track mouse entering and leaving hero section
  useEffect(() => {
    const handleMouseEnter = () => setIsMouseInHero(true)
    const handleMouseLeave = () => setIsMouseInHero(false)

    if (heroRef.current) {
      heroRef.current.addEventListener("mouseenter", handleMouseEnter)
      heroRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener("mouseenter", handleMouseEnter)
        heroRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="relative">
      <AsciiBackground />

      <section
        ref={heroRef}
        className={`bg-neutral-900 bg-opacity-80 relative z-10 overflow-hidden ${isMouseInHero && showPhoto ? "cursor-none" : ""}`}
      >
        <div className="container mx-auto relative z-20">
          <motion.div
            className="max-w-2xl py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">
              Design Research at the Intersection of Nature & Technology
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8">
              I am a multifaceted designer with a diverse skill set, specializing in product design, systems design,
              visualisation, research, AI, and industrial design. I work with multiple international stakeholders to
              craft innovative and sustainable solutions.
            </p>
            <p className="text-lg md:text-xl text-neutral-400">
              I actively contribute to research in industry, academia and government policy and help synergise these
              multiple stakeholders. I experiment with AI technology and additive manufacturing to create bespoke
              designs. I am eager to connect, learn, and contribute to innovative design projects. Let's explore
              opportunities together!
            </p>
          </motion.div>
        </div>

        {showPhoto && (
          <MouseFollowingPhoto
            src="/images/profile.jpg"
            alt="Tejaswini Nagesh"
            width={400}
            height={400}
            heroRef={heroRef}
          />
        )}
      </section>

      <section className="py-20 bg-black bg-opacity-90 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-16 text-white">Selected Projects</h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className={`md:col-span-5 order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={project.mainImage || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={`md:col-span-7 order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-green-400 transition-colors">
                          {project.title}
                        </h3>
                        {project.subtitle && <p className="text-lg text-neutral-400">{project.subtitle}</p>}
                      </div>

                      <p className="text-neutral-300">{project.fullDescription}</p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-neutral-400">
                        <div>
                          <p className="font-medium text-white">Year</p>
                          <p>{project.year}</p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Client</p>
                          <p>{project.client}</p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Role</p>
                          <p>{project.role}</p>
                        </div>
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group"
                      >
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

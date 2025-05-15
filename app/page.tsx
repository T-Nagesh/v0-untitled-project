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
import { ExperimentalCanvas } from "@/components/experimental-canvas"

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
      <ExperimentalCanvas />

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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-blue-500">
              Experimental Design at the Intersection of Systems & Making
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8">
              I am an experimental designer who thrives at the intersection of systems thinking, industrial design, and
              digital fabrication. My approach combines rigorous research methodologies with hands-on prototyping to
              create tangible solutions for complex problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-2 text-blue-500">Systems Thinking</h3>
                <p className="text-sm text-neutral-300">
                  Mapping complex relationships and identifying leverage points for meaningful intervention
                </p>
              </div>
              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-2 text-blue-500">Design Research</h3>
                <p className="text-sm text-neutral-300">
                  Uncovering insights through participatory methods and contextual inquiry
                </p>
              </div>
              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-2 text-blue-500">Industrial Design</h3>
                <p className="text-sm text-neutral-300">
                  Crafting physical solutions through iterative prototyping and digital fabrication
                </p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-neutral-400">
              I actively experiment with emerging technologies and materials to push the boundaries of what's possible.
              My work spans from speculative design explorations to practical implementations across industry, academia,
              and policy.
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-blue-500">Selected Projects</h2>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700 border-blue-500/30">
                Systems Design
              </Badge>
              <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700 border-blue-500/30">
                Experimental
              </Badge>
              <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700 border-blue-500/30">
                Making
              </Badge>
            </div>
          </div>

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
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-blue-500 group-hover:text-orange-500 transition-colors">
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
                        className="inline-flex items-center text-blue-500 hover:text-orange-500 transition-colors group"
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

      <section className="py-20 bg-neutral-900 bg-opacity-80 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-8 text-blue-500">Experimental Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Iterative Making</h3>
              <p className="text-neutral-300 mb-6">
                I believe in thinking through making. My process involves rapid prototyping, material exploration, and
                hands-on experimentation to discover unexpected solutions and refine ideas through tangible feedback.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">3D Printing</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Digital Fabrication</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Physical Computing</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Material Studies</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Systems Perspective</h3>
              <p className="text-neutral-300 mb-6">
                I approach complex problems by mapping relationships, identifying patterns, and finding leverage points
                where small interventions can create significant impact. This systems-oriented approach helps me design
                holistic solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Stakeholder Mapping</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Causal Loop Diagrams</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Scenario Planning</p>
                </div>
                <div className="bg-black/30 p-3 border border-blue-500/20">
                  <p className="text-sm text-neutral-400">Transition Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/experiments"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-blue-500 text-black hover:bg-orange-500 transition-colors"
            >
              Explore My Experiments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

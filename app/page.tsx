"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getAllProjects } from "@/lib/projects-data"

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const projects = getAllProjects()

  return (
    <div>
      <section className="py-20 md:py-32 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              className="md:order-2 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-2 border-green-400">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent mix-blend-overlay z-10"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Tejaswini Nagesh"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-green-400"></div>
              </div>
            </motion.div>

            <motion.div
              className="max-w-2xl md:order-1"
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
        </div>
      </section>

      <section className="py-20 bg-black">
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

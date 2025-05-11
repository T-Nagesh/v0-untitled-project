"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getAllProjects } from "@/lib/projects-data"

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const projects = getAllProjects()

  return (
    <div>
      <section className="py-20 md:py-32 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-white">
              Design Research at the Intersection of Nature & Technology
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-8">
              I've been lucky enough to work with creatures big and small, from short workshops to systemic change, and
              from the real-time to speculative.
            </p>
            <p className="text-lg md:text-xl text-neutral-400">
              Now, I'm eager for projects that can broaden my curiosity and bring a deeper sense of purpose to my
              practice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block group"
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-square overflow-hidden mb-4 max-w-[240px]">
                    <Image
                      src={project.mainImage || "/placeholder.svg"}
                      alt={project.title}
                      width={240}
                      height={240}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold tracking-tight group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-neutral-400 mt-1">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

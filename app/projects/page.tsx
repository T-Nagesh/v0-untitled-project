"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      slug: "on-the-right-track",
      title: "ON THE RIGHT TRACK",
      description: "Mitigating elephant-train collisions in India",
      image: "/images/project-track.jpg",
    },
    {
      slug: "loopholes",
      title: "LOOPHOLES",
      description: "Toolkit for sustainable transitions in fashion companies",
      image: "/images/project-loopholes.jpg",
    },
    {
      slug: "river-of-possibilities",
      title: "RIVER OF POSSIBILITIES",
      description: "Exploring sustainable water management solutions",
      image: "/images/project-river.jpg",
    },
    {
      slug: "what-is-it-like-to-be-an-ant",
      title: "WHAT IS IT LIKE TO BE AN ANT?",
      description: "Workshop on how to think like an ant",
      image: "/images/project-ant.jpg",
    },
    {
      slug: "canopy-collective",
      title: "CANOPY COLLECTIVE",
      description: "Interdisciplinary collaboration for nature conservation",
      image: "/images/project-canopy.jpg",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-green-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="aspect-square relative overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight group-hover:text-green-400 transition-colors mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-400">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

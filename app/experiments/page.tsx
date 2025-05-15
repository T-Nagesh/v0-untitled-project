"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { getAllExperiments } from "@/lib/experiments-data"

export default function ExperimentsPage() {
  const experiments = getAllExperiments()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-blue-500">Experiments & Making</h1>
        <p className="text-lg text-neutral-400 mb-6">
          A collection of experimental projects, material explorations, and fabrication experiments that showcase my
          hands-on approach to design and problem-solving.
        </p>
        <p className="text-neutral-300 mb-12">
          I believe that experimentation is essential to innovation. These projects represent my ongoing exploration of
          materials, techniques, and ideas—often starting with a simple question: "What if?" Through making and testing,
          I discover unexpected possibilities and develop new approaches to design challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${experiment.slug}`}>
                <div className="relative aspect-square overflow-hidden mb-4 border border-neutral-800 group-hover:border-orange-500 transition-colors">
                  <Image
                    src={experiment.image || "/placeholder.svg"}
                    alt={experiment.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-xl font-bold group-hover:text-orange-500 transition-colors mb-2">
                  {experiment.title}
                </h2>
                <p className="text-sm text-neutral-400 mb-3">{experiment.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experiment.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-orange-500 group-hover:text-orange-400 transition-colors">
                  <span>View experiment</span>
                  <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

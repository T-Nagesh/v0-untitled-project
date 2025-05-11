"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

// This would normally come from a CMS or database
const projects = [
  {
    slug: "on-the-right-track",
    title: "ON THE RIGHT TRACK",
    description: "Mitigating elephant-train collisions in India",
    fullDescription:
      "A collaborative project with wildlife conservationists and Indian Railways to develop solutions that reduce elephant-train collisions. The work included field research, stakeholder interviews, and the design of both technological and behavioral interventions to protect these magnificent creatures.",
    image: "/images/project-track.jpg",
    year: "2023",
    client: "World Wildlife Fund (WWF)",
    role: "Lead Design Researcher",
  },
  {
    slug: "loopholes",
    title: "LOOPHOLES",
    description: "Toolkit for sustainable transitions in fashion companies",
    fullDescription:
      "A comprehensive toolkit designed to help fashion companies identify and leverage loopholes in their existing systems to transition towards more sustainable practices. This project involved extensive research with industry stakeholders and resulted in practical tools that companies can implement immediately.",
    image: "/images/project-loopholes.jpg",
    year: "2022",
    client: "Fashion Sustainability Initiative",
    role: "Design Strategist",
  },
  {
    slug: "river-of-possibilities",
    title: "RIVER OF POSSIBILITIES",
    description: "Exploring sustainable water management solutions",
    fullDescription:
      "A speculative design project that envisions future scenarios for sustainable water management. Through a series of visualizations, prototypes, and participatory workshops, this project explores innovative approaches to water conservation, distribution, and ecosystem health.",
    image: "/images/project-river.jpg",
    year: "2023",
    client: "Environmental Research Institute",
    role: "Design Researcher & Illustrator",
  },
  {
    slug: "what-is-it-like-to-be-an-ant",
    title: "WHAT IS IT LIKE TO BE AN ANT?",
    description: "Workshop on how to think like an ant",
    fullDescription:
      "An innovative workshop series that encourages participants to adopt the perspective of ants to understand complex systems, collective intelligence, and sustainable resource management. The workshop has been conducted with diverse audiences from schoolchildren to corporate executives.",
    image: "/images/project-ant.jpg",
    year: "2021",
    client: "Science Education Foundation",
    role: "Workshop Designer & Facilitator",
  },
  {
    slug: "canopy-collective",
    title: "CANOPY COLLECTIVE",
    description: "Interdisciplinary collaboration for nature conservation",
    fullDescription:
      "A platform that brings together designers, scientists, policymakers, and local communities to collaborate on nature conservation projects. The collective focuses on creating holistic solutions that address ecological challenges while considering social and economic factors.",
    image: "/images/project-canopy.jpg",
    year: "2022",
    client: "Conservation Alliance",
    role: "Co-founder & Design Lead",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug) || projects[0]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium hover:text-green-400 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all projects
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{project.title}</h1>
          <p className="text-lg text-neutral-400 mb-8">{project.description}</p>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Year</h3>
              <p className="text-sm">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Client</h3>
              <p className="text-sm">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest mb-2">Role</h3>
              <p className="text-sm">{project.role}</p>
            </div>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>{project.fullDescription}</p>

            <h2>Challenge</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>

            <h2>Approach</h2>
            <p>
              Our approach combined field research, stakeholder interviews, and collaborative design workshops to
              develop solutions that address the root causes of the problem while being practical to implement.
            </p>

            <h2>Outcome</h2>
            <p>
              The project resulted in a comprehensive set of tools and strategies that have been adopted by multiple
              organizations. Early results show a significant improvement in the target metrics and positive feedback
              from all stakeholders involved.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="max-w-[320px]">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={320}
              height={320}
              className="object-cover"
            />
          </div>

          <div className="aspect-video relative bg-neutral-800 max-w-[320px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-neutral-400 text-xs">Additional project image</p>
            </div>
          </div>

          <div className="aspect-video relative bg-neutral-800 max-w-[320px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-neutral-400 text-xs">Additional project image</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

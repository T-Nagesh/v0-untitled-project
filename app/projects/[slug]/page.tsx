"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { getProjectBySlug } from "@/lib/projects-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { ProjectImage } from "@/components/project-image"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium hover:text-orange-500 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-blue-500">{project.title}</h1>
          {project.subtitle && <h2 className="text-xl md:text-2xl text-neutral-400 mb-6">{project.subtitle}</h2>}
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

          {project.website && (
            <Button
              asChild
              variant="outline"
              className="rounded-none border-orange-500 text-orange-500 hover:bg-orange-500/10"
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Website <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </header>

        {project.sections &&
          project.sections.map((section, index) => (
            <section key={index} className="mb-16">
              <h2 className="text-2xl font-bold tracking-tighter mb-6 text-blue-500">{section.title}</h2>

              {Array.isArray(section.content) ? (
                <ul className="space-y-4 mb-8">
                  {section.content.map((paragraph, i) => (
                    <li key={i} className="text-neutral-300">
                      • {paragraph}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-300 mb-8">{section.content}</p>
              )}

              {section.images && section.images.length > 0 && (
                <div className="grid grid-cols-1 gap-8 mt-8">
                  {section.images.map((image, i) => (
                    <ProjectImage
                      key={i}
                      src={image.url || "/placeholder.svg"}
                      alt={image.alt}
                      width={image.width || 1200}
                      height={image.height || 800}
                      caption={image.caption}
                      className={image.className}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}

        {project.collaborators && project.collaborators.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold tracking-tighter mb-6 text-blue-500">Collaborators</h2>
            <div className="flex flex-wrap gap-4">
              {project.collaborators.map((collaborator, index) => (
                <Badge key={index} className="bg-neutral-800 hover:bg-neutral-700">
                  {collaborator}
                </Badge>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  )
}

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md dark:border-stone-800">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-stone-100 dark:bg-stone-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
        >
          View Project <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}

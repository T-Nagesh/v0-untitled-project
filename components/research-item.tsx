import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ResearchItemProps {
  title: string
  journal: string
  year: string
  link: string
}

export default function ResearchItem({ title, journal, year, link }: ResearchItemProps) {
  return (
    <div className="p-6 border rounded-md hover:bg-stone-50 dark:border-stone-800 dark:hover:bg-stone-900 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {journal} • {year}
          </p>
        </div>
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-500 dark:hover:text-green-400 shrink-0"
        >
          Read Paper <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

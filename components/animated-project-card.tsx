"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedProjectCardProps {
  title: string
  image: string
  description: string
  color: string
  index: number
}

export function AnimatedProjectCard({ title, image, description, color, index }: AnimatedProjectCardProps) {
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -10 }}
    >
      <Link href={`/projects/${slug}`}>
        <Card className={`overflow-hidden border-0 transition-all hover:shadow-lg ${color}`}>
          <motion.div
            className="aspect-square relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>
          <CardContent className="p-4">
            <motion.h3
              className="font-medium mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {description}
            </motion.p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

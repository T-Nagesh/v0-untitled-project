"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ProjectImage } from "@/components/project-image"

export default function WatercolorBoxProject() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <Link
        href="/experiments"
        className="inline-flex items-center gap-2 text-sm font-medium hover:text-orange-500 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to experiments
      </Link>

      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-blue-500">
            3D Printed Watercolor Box
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            A quick experiment with dual-color 3D printing to make a portable watercolor palette.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
              3D Printing
            </Badge>
            <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
              Art Tools
            </Badge>
            <Badge variant="outline" className="bg-neutral-800 hover:bg-neutral-700">
              Making
            </Badge>
          </div>
        </header>

        <section className="mb-12">
          <ProjectImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250427_145750.jpg-ljP3xXt91raxHmuM39vBJTv2OgmaHa.jpeg"
            alt="3D printed watercolor box with palette and patterned lid"
            width={1200}
            height={800}
            caption="The finished palette by the water."
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tighter mb-6 text-blue-500">The Experiment</h2>
          <p className="text-neutral-300 mb-6">
            Wanted to see if I could make a functional watercolor palette on my 3D printer using yellow PLA and black
            TPU. The wavy pattern was just for fun.
          </p>
          <p className="text-neutral-300">Machine used: Creality Neo Max</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tighter mb-6 text-blue-500">Printing Process</h2>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-2">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/printer-ybcYje0DKiQZa4slux9SKYlol14jwM.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-neutral-400 mb-6">Printing in action.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tighter mb-6 text-blue-500">Palette in the Wild</h2>
          <p className="text-neutral-300 mb-6">Taking it out for some sketching sessions.</p>

          <div className="grid grid-cols-1 gap-8">
            <ProjectImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250427_174840.jpg-HNaNgDJRegSnKkySCQd8wioUEQnnfg.jpeg"
              alt="3D printed watercolor palette open on a sketchbook in the grass"
              width={1200}
              height={800}
              caption="Quick tree sketch in the park."
            />

            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-2">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250317_093030-SOKgFKSkswEGBRYp8MqslOxZ0mcABX.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-neutral-400">Testing it out.</p>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

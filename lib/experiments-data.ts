export interface Experiment {
  slug: string
  title: string
  description: string
  image: string
  year: string
  tags: string[]
}

export const experiments: Experiment[] = [
  {
    slug: "3d-printed-watercolor-box",
    title: "3D Printed Watercolor Box",
    description:
      "A fun experiment with dual-color 3D printing to create a portable watercolor palette with a cool wavy pattern.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250427_145750.jpg-ljP3xXt91raxHmuM39vBJTv2OgmaHa.jpeg",
    year: "2024",
    tags: ["3D Printing", "Art Tools", "Making"],
  },
  // Add more experiments here in the future
]

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((experiment) => experiment.slug === slug)
}

export function getAllExperiments(): Experiment[] {
  return experiments
}

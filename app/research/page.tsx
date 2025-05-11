"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ResearchPage() {
  const publications = [
    {
      title: "The Impact of Participatory Design on Wildlife Conservation Efforts",
      journal: "Journal of Sustainable Design",
      year: "2023",
      link: "#",
    },
    {
      title: "Technological Interventions in Biodiversity Monitoring: A Systematic Review",
      journal: "Conservation Technology",
      year: "2022",
      link: "#",
    },
    {
      title: "User-Centered Design Approaches for Environmental Education Tools",
      journal: "Design Studies",
      year: "2021",
      link: "#",
    },
    {
      title: "Speculative Design for Wildlife Conservation: Case Studies and Methods",
      journal: "Design and Nature",
      year: "2022",
      link: "#",
    },
    {
      title: "Visual Communication Strategies for Environmental Awareness",
      journal: "Visual Communication Quarterly",
      year: "2020",
      link: "#",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Research</h1>

        <p className="text-lg mb-12 text-neutral-300">
          My research focuses on the intersection of design, technology, and environmental conservation. Below are
          selected publications and ongoing research projects.
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-bold tracking-tighter mb-6">Publications</h2>
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-neutral-800 pb-6">
                  <h3 className="text-base font-medium mb-2">{pub.title}</h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    {pub.journal} • {pub.year}
                  </p>
                  <Link href={pub.link} className="text-xs font-medium hover:text-green-400 transition-colors">
                    Read Paper →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tighter mb-6">Current Research</h2>
            <div className="space-y-8">
              <div className="border-b border-neutral-800 pb-6">
                <h3 className="text-base font-medium mb-2">Design Methods for Community-Led Conservation</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Ongoing research into participatory design approaches that empower local communities to lead
                  conservation efforts.
                </p>
              </div>

              <div className="border-b border-neutral-800 pb-6">
                <h3 className="text-base font-medium mb-2">Technology Ethics in Wildlife Monitoring</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  Exploring the ethical implications of using advanced technologies for wildlife monitoring and
                  conservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

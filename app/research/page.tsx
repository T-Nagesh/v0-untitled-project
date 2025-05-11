"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function ResearchPage() {
  const publications = [
    {
      title: "The Field Manual for Managing Human-Elephant Conflict",
      authors: "Project Elephant, WWF India",
      year: "2022",
      description:
        "Designed and compiled the official field manual in collaboration with WWF India, endorsed by the Ministry of Environment, Government of India. This comprehensive guide addresses human-elephant conflict management strategies and is currently being translated into multiple languages.",
      link: "https://www.wwfindia.org/?22302/Field-Manual-for-Managing-Human-Elephant-Conflicts",
    },
    {
      title: "Elefence Manual: A Guide to Non-lethal Electric Fencing for Crop Protection",
      authors: "Rucha Bhave, Tejaswini Nagesh, David Smith, Hiten Baishya, Divya Ramesh, N. Mohan Raj, Nitin Sekar",
      year: "2023",
      description:
        "A manual providing practical guidelines for setting up non-lethal electric fences to mitigate human-elephant conflicts, published by WWF-India.",
      link: "https://www.wwfindia.org/?21522/The-Ele-fence-Manual",
    },
    {
      title: "Using Design Methods to Prevent Train-Elephant Collisions in India",
      authors:
        "Tejaswini Nagesh, Praveen Nahar, Hiten Baishya, David Smith, Priya Joshi, Anil Singh, Mohammed N. Shaikh, Nitin Sekar",
      year: "2021",
      description: "",
      link: "https://rsdsymposium.org/the-jumbo-problem/",
    },
    {
      title: "Fabrication of Fixture for Concentric Foam Filling of Tubes",
      authors: "Sachin B.G., Shreyas H.S., Smriti Sreedhar, Tejaswini Nagesh, Suman Bhargav S.P.",
      year: "2016",
      description:
        "Published in the International Journal of Research in Engineering and Technology, detailing the fabrication process for a fixture used in concentric foam filling of tubes.",
      link: "https://www.researchgate.net/publication/316681843_Fabrication_of_fixture_for_concentric_foam_filling_of_tubes",
    },
  ]

  const currentResearch = [
    {
      title: "Ethical Hacking & Dark Patterns in Policy Design",
      description:
        "Exploring how dark patterns and ethical hacking methodologies can be used to test and strengthen policy robustness, particularly in environmental and conservation frameworks.",
    },
    {
      title: "AI-Facilitated Design Ideation",
      description:
        "Investigating how artificial intelligence can enhance creative ideation processes in design, with a focus on sustainable innovation and conservation-oriented solutions.",
    },
    {
      title: "Data-Driven More-Than-Human Urban Ecosystems",
      description:
        "Researching how environmental data can empower individuals to take charge of their surroundings and contribute to building more-than-human ecosystems in urban spaces.",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">Research</h1>

        <p className="text-lg mb-12 text-neutral-300">
          My research focuses on the intersection of design, technology, and environmental conservation. Below are my
          published works and ongoing research projects.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-bold tracking-tighter mb-6 text-green-400 flex items-center">
              <span className="inline-block w-4 h-0.5 bg-green-400 mr-2"></span>
              Publications
              <span className="inline-block w-4 h-0.5 bg-green-400 ml-2"></span>
            </h2>
            <div className="space-y-10">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-green-400/30 pl-4 hover:border-green-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-base font-medium mb-2">{pub.title}</h3>
                  <p className="text-sm text-neutral-400 mb-2">
                    {pub.authors} • {pub.year}
                  </p>
                  {pub.description && <p className="text-sm text-neutral-300 mb-3">{pub.description}</p>}
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-green-400 hover:text-green-300 transition-colors"
                  >
                    Read Publication <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tighter mb-6 text-green-400 flex items-center">
              <span className="inline-block w-4 h-0.5 bg-green-400 mr-2"></span>
              Ongoing Research Initiatives
              <span className="inline-block w-4 h-0.5 bg-green-400 ml-2"></span>
            </h2>
            <div className="space-y-8">
              {currentResearch.map((research, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-green-400/30 pl-4 hover:border-green-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  <h3 className="text-base font-medium mb-2">{research.title}</h3>
                  <p className="text-sm text-neutral-300">{research.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tighter mb-6 text-green-400 flex items-center">
              <span className="inline-block w-4 h-0.5 bg-green-400 mr-2"></span>
              Research Interests
              <span className="inline-block w-4 h-0.5 bg-green-400 ml-2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-black/30 p-4 border border-green-400/20 hover:border-green-400/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-base font-medium mb-3 text-green-400">Conservation Design</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                  <li>Human-wildlife conflict mitigation</li>
                  <li>Participatory design for conservation</li>
                  <li>Design interventions for biodiversity</li>
                  <li>Sustainable infrastructure design</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-black/30 p-4 border border-green-400/20 hover:border-green-400/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-base font-medium mb-3 text-green-400">Technology & Ethics</h3>
                <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                  <li>Ethical technology deployment in conservation</li>
                  <li>AI and machine learning for wildlife monitoring</li>
                  <li>Data visualization for environmental advocacy</li>
                  <li>Sustainable technology design</li>
                </ul>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  )
}

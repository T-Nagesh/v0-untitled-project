"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12 md:py-20"
    >
      <div className="max-w-3xl">
        <header className="mb-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
          <div className="relative w-48 h-48 overflow-hidden border-2 border-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-overlay z-10"></div>
            <Image
              src="/images/profile.jpg"
              alt="Tejaswini Nagesh"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-blue-500"></div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-blue-500">Tejaswini Nagesh</h1>
            <p className="text-neutral-300 mb-4">
              Experimental designer with expertise in systems thinking, design research, and industrial design. I
              combine analytical frameworks with hands-on making to create innovative solutions for complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-neutral-400 text-sm">
              <a href="mailto:tejnagesh@gmail.com" className="hover:text-orange-500 transition-colors">
                tejnagesh@gmail.com
              </a>
            </div>
            <div className="mt-4 inline-block">
              <span className="font-mono text-xs border border-blue-500 px-2 py-1 text-blue-500">
                Design Researcher & Maker
              </span>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter mb-6 text-blue-500 flex items-center">
            <span className="inline-block w-4 h-0.5 bg-blue-500 mr-2"></span>
            Approach & Philosophy
            <span className="inline-block w-4 h-0.5 bg-blue-500 ml-2"></span>
          </h2>

          <div className="space-y-6">
            <p className="text-neutral-300">
              My work is driven by a deep curiosity and experimental mindset. I believe in learning through making,
              testing ideas through rapid prototyping, and embracing an iterative approach to design. By combining
              systems thinking with hands-on fabrication, I create solutions that address both immediate needs and
              systemic challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-3 text-blue-500">Experimental Process</h3>
                <p className="text-sm text-neutral-300">
                  I embrace uncertainty and use experimentation as a tool for discovery. My process involves rapid
                  prototyping, material exploration, and iterative testing to uncover unexpected solutions.
                </p>
              </div>

              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-3 text-blue-500">Systems Perspective</h3>
                <p className="text-sm text-neutral-300">
                  I approach complex problems by mapping relationships, identifying patterns, and finding leverage
                  points where small interventions can create significant impact.
                </p>
              </div>

              <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
                <h3 className="text-base font-medium mb-3 text-blue-500">Making & Fabrication</h3>
                <p className="text-sm text-neutral-300">
                  With a background in industrial design and mechanical engineering, I bring ideas to life through
                  digital fabrication, physical prototyping, and material exploration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter mb-6 text-blue-500 flex items-center">
            <span className="inline-block w-4 h-0.5 bg-blue-500 mr-2"></span>
            Experience
            <span className="inline-block w-4 h-0.5 bg-blue-500 ml-2"></span>
          </h2>

          <div className="space-y-10">
            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-base font-medium">Amsterdam Fashion Institute | Researcher</h3>
                <span className="text-sm text-neutral-400">June 2024 – Present | Amsterdam, NL</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>
                  Led the Loopholes Toolkit initiative under the EU Horizons Project, producing 400+ toolkits to support
                  sustainable transitions in the fashion industry.
                </li>
                <li>
                  Designed and maintained a GitHub repository to improve accessibility and usability of toolkit
                  resources.
                </li>
                <li>
                  Developed certification courses on sustainable business practices to help organizations implement
                  long-term environmental strategies.
                </li>
                <li>
                  Trained AI models to integrate with the Loopholes Toolkit, refining research insights for real-world
                  application.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-base font-medium">Digital Society School | Design Researcher, Trainee</h3>
                <span className="text-sm text-neutral-400">Feb 2024 – June 2024 | Amsterdam, NL</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>
                  EU Horizon project, developing a Toolkit for sustainable transitions in the textile industry by 2030.
                </li>
                <li>
                  Studied the product development and production processes for toolkit design, focusing on ecological,
                  social, and economic sustainability using SCRUM and AGILE processes.
                </li>
                <li>
                  Collaborated with a multicultural and multidisciplinary team and successfully managed the project.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-base font-medium">WWF | Design Researcher</h3>
                <span className="text-sm text-neutral-400">November 2020 – December 2023 | Tezpur, IN</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>
                  Led user research to develop site-specific solutions for 165km of high-risk railway sections, using
                  qualitative research (stakeholder interviews, field studies) and quantitative analysis (collision
                  data, landscape factors) to mitigate train-elephant conflicts.
                </li>
                <li>
                  Collaborated with Indian Railways, the third largest railway network in the world, to integrate
                  sustainable solutions into linear infrastructure, ensuring data-driven decision making.
                </li>
                <li>
                  Designed and implemented communication strategies to enhance stakeholder engagement, drive community
                  adoption, and facilitate long-term behavioral change for conflict mitigation measures.
                </li>
                <li>
                  Co-authored, designed and published an official guideline document in collaboration with WWF and the
                  India Forest Department, distributed in 3 different languages across multiple states in India, with
                  1,000+ copies distributed to promote human-elephant conflict mitigation strategies.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-base font-medium">Cardiac Design Labs | Product Designer</h3>
                <span className="text-sm text-neutral-400">April 2020 – November 2020 | Bangalore, IN</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>
                  Designed a patented wearable technology for vital signs monitoring, including a patented device
                  critical for COVID-19 patient care during staff shortages.
                </li>
                <li>
                  Led user testing and wearability adaptations, ensuring functionality, usability, and comfort for
                  extended patient use.
                </li>
                <li>
                  Developed usage models and service solutions tailored to pandemic-related challenges through market
                  research and patient feedback.
                </li>
                <li>
                  Secured funding from the India Startup Fund, instrumental in developing and deploying 100 wearable
                  units for COVID-19 patient monitoring in hospitals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter mb-6 text-blue-500 flex items-center">
            <span className="inline-block w-4 h-0.5 bg-blue-500 mr-2"></span>
            Education
            <span className="inline-block w-4 h-0.5 bg-blue-500 ml-2"></span>
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-base font-medium">Masters in Design</h3>
                <span className="text-sm text-neutral-400">2020</span>
              </div>
              <p className="text-sm font-medium mb-1">National Institute of Design | Ahmedabad, IN</p>
              <p className="text-sm text-neutral-300">Industrial Design</p>
            </div>

            <div className="border-l-2 border-blue-500/30 pl-4 hover:border-orange-500 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="text-base font-medium">Bachelors in Engineering</h3>
                <span className="text-sm text-neutral-400">2020</span>
              </div>
              <p className="text-sm font-medium mb-1">V.T.U | Ahmedabad, IN</p>
              <p className="text-sm text-neutral-300">Mechanical Engineering</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold tracking-tighter mb-6 text-blue-500 flex items-center">
            <span className="inline-block w-4 h-0.5 bg-blue-500 mr-2"></span>
            Skills
            <span className="inline-block w-4 h-0.5 bg-blue-500 ml-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
              <h3 className="text-base font-medium mb-4 text-blue-500">Design & Research</h3>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>User Research (Qualitative & Quantitative)</li>
                <li>Systems Mapping & Causal Loop Diagrams</li>
                <li>Participatory Design & Co-creation</li>
                <li>Speculative Design & Future Scenarios</li>
                <li>Design Thinking & Workshop Facilitation</li>
                <li>Service Design & Experience Mapping</li>
                <li>Data Analysis & Visualization</li>
                <li>Agile & Scrum Methodologies</li>
              </ul>
            </div>

            <div className="bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
              <h3 className="text-base font-medium mb-4 text-blue-500">Making & Technical</h3>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-300">
                <li>3D Modeling & CAD (Fusion 360, SolidWorks)</li>
                <li>Digital Fabrication (3D Printing, Laser Cutting)</li>
                <li>Physical Prototyping & Model Making</li>
                <li>Material Exploration & Testing</li>
                <li>Electronics & Physical Computing (Arduino)</li>
                <li>Mechanical Design & Engineering</li>
                <li>Sustainable Materials & Circular Design</li>
                <li>Visualization & Rendering</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-black/30 p-4 border border-blue-500/20 hover:border-orange-500/50 transition-colors">
            <h3 className="text-base font-medium mb-4 text-blue-500">Tools & Software</h3>
            <div className="text-sm text-neutral-300 space-y-1">
              <p className="font-mono">
                <span className="text-blue-500">$</span> Fusion 360 • SolidWorks • Rhino • Adobe Creative Suite • Figma
                • Miro • QGIS • Processing • Arduino • Raspberry Pi • Git/Github • UserZoom • Lookback • OptimalWorkshop
                • Dovetail • Excel • PowerBI • Tableau
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold tracking-tighter mb-6 text-blue-500 flex items-center">
            <span className="inline-block w-4 h-0.5 bg-blue-500 mr-2"></span>
            Links
            <span className="inline-block w-4 h-0.5 bg-blue-500 ml-2"></span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href="https://tokaydesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:text-orange-500 transition-colors group"
            >
              <span className="font-mono">
                <span className="text-blue-500 group-hover:mr-1 transition-all">→</span> tokaydesigns.com
              </span>
            </a>

            <a
              href="https://github.com/T-Nagesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:text-orange-500 transition-colors group"
            >
              <span className="font-mono">
                <span className="text-blue-500 group-hover:mr-1 transition-all">→</span> github.com/T-Nagesh
              </span>
            </a>

            <a
              href="https://linkedin.com/in/tejnagesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:text-orange-500 transition-colors group"
            >
              <span className="font-mono">
                <span className="text-blue-500 group-hover:mr-1 transition-all">→</span> linkedin.com/in/tejnagesh
              </span>
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

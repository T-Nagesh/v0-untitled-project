export interface ProjectImage {
  url: string
  alt: string
  caption?: string
  width?: number
  height?: number
  className?: string
}

export interface ProjectSection {
  title: string
  content: string | string[]
  images?: ProjectImage[]
}

export interface Project {
  slug: string
  title: string
  subtitle?: string
  description: string
  fullDescription: string
  mainImage: string
  year: string
  client: string
  role: string
  tags: string[]
  website?: string
  sections?: ProjectSection[]
  collaborators?: string[]
}

export const projects: Project[] = [
  {
    slug: "loopholes",
    title: "LOOPHOLES",
    subtitle: "for change",
    description: "Toolkit for sustainable transitions in fashion companies",
    fullDescription:
      "A comprehensive toolkit designed to help fashion companies identify and leverage loopholes in their existing systems to transition towards more sustainable practices. This project involved extensive research with industry stakeholders and resulted in practical tools that companies can implement immediately.",
    mainImage: "/images/project-loopholes.jpg", // Reverted to original
    year: "2024-2025",
    client: "EU Horizon Project, Amsterdam University of Applied Sciences",
    role: "Design Researcher & Workshop Facilitator",
    tags: ["Systems Design", "Policy", "Service Design", "Sustainability", "Toolkit"],
    website: "https://circular.loopholes.net/",
    sections: [
      {
        title: "Overview",
        content:
          "The textile industry is under pressure to meet sustainability goals amid complex supply chains and evolving EU regulations. Yet many companies still tackle these issues in isolation. This toolkit addresses that gap with a systems thinking approach connecting data, stakeholders, materials, and business strategy to support better decisions and sustainable innovation.",
        images: [
          {
            url: "/images/loopholes-hero.jpeg",
            alt: "Loopholes for change - Fashion model in a desert-like setting with textile waste",
            caption: "Loopholes for change - Addressing sustainability in the fashion industry",
            width: 1000,
            height: 600,
          },
        ],
      },
      {
        title: "The Brief",
        content:
          "To develop effective methods that help companies adopt systems thinking—particularly in relation to data, stakeholders, materials, and business operations—while ensuring alignment with current and emerging EU sustainability policies.",
        images: [
          {
            url: "/images/loopholes-brief.png",
            alt: "The brief and methods used in the Loopholes project",
            caption: "Development approach and research methods",
            width: 800,
            height: 500,
            className: "max-w-2xl mx-auto",
          },
        ],
      },
      {
        title: "Methods",
        content: [
          "Secondary Research: Reviewed EU sustainability policies (current and upcoming), explored tools that support systems thinking, analyzed documentation from previous versions of the toolkit, and studied product lifecycle mapping approaches.",
          "Primary Research: Conducted qualitative interviews with representatives from companies including 7weaves, H+M, Zara, Sting, and Dungse.",
          "Play Testing: Tested the toolkit in various configurations and role-played as companies interviewed to evaluate usability and relevance.",
          "Toolkit Components: Outlined the essential elements of the toolkit, including the canvases required, duration of each session, modes of engagement, and possible configurations for use.",
          "Stakeholder & System Mapping: Mapped stakeholders and activities from four key perspectives: Data, Stakeholders, Materials, and Business.",
        ],
      },
      {
        title: "Synthesis & Results",
        content:
          "The canvases serve as a guide to facilitate systems thinking and, over time, enable systemic innovation. Through our research, we identified the importance of starting each session by evaluating a company's current position or defining a potential direction for a new venture. This approach helps clarify the company's unique value proposition (USP) and strategic goals, setting a clear foundation for applying systems thinking within the broader sustainability context.",
        images: [
          {
            url: "/images/loopholes-synthesis.png",
            alt: "Synthesis and results of the Loopholes project showing the four canvases",
            caption: "The four canvases that make up the Loopholes toolkit",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Canvas System",
        content: [
          "Data Canvas: Enables smarter decisions by connecting insights across the product lifecycle. Maps key data points, links data to decisions and actions, and supports continuous improvement.",
          "Stakeholder Canvas: Supports innovation by focusing on the people in the system. Maps key stakeholders, highlights roles and relationships, and informs people-centered decisions.",
          "Material Canvas: Encourages innovation in design and production. Focuses on physical products and processes, inspires new materials and technologies, and supports sustainable and future-ready choices.",
          "Business Canvas: Connects all perspectives to assess viability. Evaluates product-market fit, aligns with sustainability goals, and ties data, materials, and stakeholders into the business model.",
        ],
      },
      {
        title: "Iteration & User Manual",
        content:
          "We ran multiple sessions during and after development to refine the toolkit. Key improvements included adding prompts to clarify policy implications at the right stages and making the User Manual more visual and detailed. Emerging from the need to make systems thinking accessible and actionable, the manual provides structured guidance on how to engage with the toolkit and the canvases, helps navigate different modes of use, and adapt the toolkit to varying business contexts.",
        images: [
          {
            url: "/images/loopholes-iteration.png",
            alt: "Iteration and user manual development",
            caption: "Iteration process and user manual development",
            width: 800,
            height: 500,
            className: "max-w-2xl mx-auto",
          },
        ],
      },
      {
        title: "Implementation",
        content:
          "Loopholes is a Transitions Roadmap toolkit designed to help companies and students adopt systemic innovation, digital transformation, and circular business strategies. It enables users to identify skill gaps, explore data interoperability, develop roadmaps for digital technology adoption, and evaluate sustainable business opportunities.",
        images: [
          {
            url: "/images/loopholes-implementation.jpeg",
            alt: "Implementation timeline and workshops",
            caption: "Implementation timeline and workshop activities from February 2024 to February 2025",
            width: 800,
            height: 500,
            className: "max-w-2xl mx-auto",
          },
        ],
      },
    ],
    collaborators: [
      "Amsterdam University of Applied Sciences",
      "Amsterdam Fashion Institute (AMFI)",
      "Transitions",
      "Digital Society School",
      "EU Horizon Project",
    ],
  },
  {
    slug: "on-the-right-track",
    title: "ON THE RIGHT TRACK",
    subtitle: "Mitigating elephant-train collisions across Assam, India",
    description: "Mitigating elephant-train collisions in India",
    fullDescription:
      "A collaborative project with wildlife conservationists and Indian Railways to develop solutions that reduce elephant-train collisions. The work included field research, stakeholder interviews, and the design of both technological and behavioral interventions to protect these magnificent creatures.",
    mainImage: "/images/project-track.jpg", // Reverted to original
    year: "2020-2023",
    client: "World Wildlife Fund (WWF)",
    role: "Lead Design Researcher",
    tags: ["Wildlife Conservation", "Systems Thinking", "Participatory Design", "Research"],
    sections: [
      {
        title: "Overview",
        content:
          "Train-elephant collisions are one of the leading causes of human-induced elephant deaths in India. This project was a collaborative effort between WWF-India, the Assam Forest Department, and Indian Railways to explore ways to mitigate these collisions using a design-led approach. By combining field insights with systemic thinking, the project aimed to develop practical, context-sensitive interventions that prioritize both wildlife conservation and railway safety.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio6-bK8FlE9Lcad19r0k7TbRZ0fYG63DsE.png",
            alt: "On the Right Track - Mitigating elephant-train collisions across Assam, India",
            caption: "A collaborative effort to reduce elephant-train collisions in Assam",
            width: 1000,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Approach & Design Frameworks",
        content:
          "This project was grounded in a multidisciplinary design approach, drawing from key frameworks to guide both process and perspective:",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio8-1yZ9eAaMldpQ5wtDc8oEOMSxhICdjX.png",
            alt: "Design frameworks and approaches used in the project",
            caption: "Systems thinking, more-than-human design, and participatory design frameworks guided the project",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Systems Thinking",
        content:
          "To map and understand the interconnected dynamics between elephants, railways, ecosystems, and local communities.",
      },
      {
        title: "More-Than-Human Design",
        content: "To center elephant agency and behavior as active participants in the design process.",
      },
      {
        title: "Participatory Design",
        content: "To co-create with conservationists, ecologists, railway personnel, and local stakeholders.",
      },
      {
        title: "Methods",
        content: "The research employed multiple methods to gather comprehensive data and insights:",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio8-1yZ9eAaMldpQ5wtDc8oEOMSxhICdjX.png",
            alt: "Research methods used in the project",
            caption: "Context exploration through site visits, case studies, and camera trapping",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Context & Exploration",
        content: [
          "Site visits: Field visits were conducted periodically along a 165 km railway stretch to understand the terrain, elephant movement patterns, and features that contribute to collision risk. These were collaborative surveys with forest and railway officials.",
          "Case studies and desk research: Analyzed past elephant-train collision incidents to understand contributing factors and validate field assumptions. Combined archival data with site visits and on-ground interviews.",
          "Camera trapping and observational studies: To complement anecdotal insights and fill data gaps on elephant behavior, we deployed camera traps over two years along a 165 km stretch. Thirty cameras were installed at locations identified by local stakeholders as high-frequency crossing points.",
        ],
      },
      {
        title: "Participatory Engagement",
        content:
          "Facilitated workshops and co-creative sessions with ecologists, forest officials, railway staff, and local communities to exchange knowledge, surface ground realities, and collaboratively develop context-sensitive solutions.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio9-lpkaFqdC1D3EuYWaI6XkN06QtyMR9Y.png",
            alt: "Participatory engagement with stakeholders",
            caption: "Workshops and surveys with local stakeholders to understand the problem and develop solutions",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Sensemaking & Design",
        content:
          "Data mapping and system mapping exercises mapped all collected data across four key drivers of train-elephant collisions: limited visibility for loco pilots (due to fog, curves, etc.), lack of timely information on elephant movement, elephants crossing tracks, and elephants not perceiving trains as a threat or being unable to escape. This helped structure the problem systemically and identify leverage points for intervention.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio10.png-KAa8qaGSrQ0M7CUFdlVWUId2BrqeVb.jpeg",
            alt: "Data mapping and system mapping exercises",
            caption:
              "Mapping data onto land use/land cover maps and identifying critical sections for elephant movement",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Synthesis & Ideation",
        content:
          "The process began by identifying and structuring the key factors contributing to train-elephant collisions. Building on this foundation, we ideated a range of potential interventions aimed at mitigating these impacts. Each proposed measure was assessed through a review of evidence from similar contexts, allowing us to draw insights from existing practices and adapt them to the specific conditions of the project site.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio11.png-ntxt1jkMGanjLZ9VctzXeqDuldFmiV.jpeg",
            alt: "Synthesis and ideation process",
            caption: "Ideation of practical, place-specific interventions using sticky notes to organize ideas",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Testing & Implementation",
        content:
          "A range of interventions were piloted to address key factors contributing to train-elephant collisions. Lighting along tracks to improve visibility was first tested at a single location to determine appropriate height, ensure compliance with railway safety regulations, and was later piloted over a 2 km stretch. It is currently being monitored for efficacy.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio12.png-cFcHfuhzrsUjGfcRHytpQpK4XHZ0NT.jpeg",
            alt: "Testing and implementation of interventions",
            caption: "Testing illumination with lights at key locations to improve visibility for train operators",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Design Adaptation",
        content:
          "More complex solutions, like underpasses, were inspired by African wildlife infrastructure and adapted to suit the height and behavior of Indian elephants. But the presentation was visualized to make is easier for decision makers to understand and evaluate.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio13-nZgsjHc8UGx7RL2B5ulzoTmMeCihzS.png",
            alt: "Design adaptation for elephant pathways",
            caption: "Structural pathways across railway tracks for elephants, including underpasses and overpasses",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      {
        title: "Learnings from Pilots",
        content:
          "Not all pilots proved successful. An attempt to enhance the perceived speed of trains using reflective lights — modeled on a human-safety intervention from Mumbai — was ineffective in this context, offering key learnings for future designs. One of the most impactful insights came from observing elephants' difficulty navigating steep slopes. This led to the creation of gradual slopes at common crossing points — a simple intervention later implemented by the Forest Department after many discussion and evaluation sessions, with successful adoption by elephants choosing these path of least resistance.",
      },
      {
        title: "Decision-Making Tool",
        content:
          "Through a series of small-scale experiments and continuous feedback from both the Railways and Forest Department, two key needs emerged: a way to assess risk levels at specific sites, and a structured method to guide context-sensitive decision-making. This became especially relevant when the Ministry of Environment announced plans to build 100 underpasses or overpasses across India, but lacked a tool to help prioritize locations. In response, we developed a decision-making tool rooted in our site-specific interventions. Using spatial mapping and contextual factors, the tool not only supports local planning but also offers a replicable framework to guide interventions across diverse landscapes — helping scale the process while staying grounded in on-the-ground realities.",
        images: [
          {
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio14-xIYj1qF0WlCLW2n8PNDTCxXXPrD8cT.png",
            alt: "Decision-making tool for implementation and planning",
            caption: "Tool for prioritization, risk mapping, and site-specific intervention planning",
            width: 900,
            height: 600,
            className: "max-w-3xl mx-auto",
          },
        ],
      },
      // Removed the fabricated "Impact" section
    ],
    collaborators: [
      "World Wildlife Fund (WWF) India",
      "Assam Forest Department",
      "Indian Railways",
      "Local communities in Assam",
      "Phillips Lighting Solutions",
    ],
  },
  {
    slug: "river-of-possibilities",
    title: "RIVER OF POSSIBILITIES",
    description: "Exploring sustainable water management solutions",
    fullDescription:
      "A speculative design project that envisions future scenarios for sustainable water management. Through a series of visualizations, prototypes, and participatory workshops, this project explores innovative approaches to water conservation, distribution, and ecosystem health.",
    mainImage: "/images/project-river.jpg",
    year: "2023",
    client: "Environmental Research Institute",
    role: "Design Researcher & Illustrator",
    tags: ["Speculative Design", "Sustainability", "Water Management"],
  },
  {
    slug: "what-is-it-like-to-be-an-ant",
    title: "WHAT IS IT LIKE TO BE AN ANT?",
    description: "Workshop on how to think like an ant",
    fullDescription:
      "An innovative workshop series that encourages participants to adopt the perspective of ants to understand complex systems, collective intelligence, and sustainable resource management. The workshop has been conducted with diverse audiences from schoolchildren to corporate executives.",
    mainImage: "/images/project-ant.jpg",
    year: "2021",
    client: "Science Education Foundation",
    role: "Workshop Designer & Facilitator",
    tags: ["Workshop", "Systems Thinking", "Education"],
  },
  {
    slug: "canopy-collective",
    title: "CANOPY COLLECTIVE",
    description: "Interdisciplinary collaboration for nature conservation",
    fullDescription:
      "A platform that brings together designers, scientists, policymakers, and local communities to collaborate on nature conservation projects. The collective focuses on creating holistic solutions that address ecological challenges while considering social and economic factors.",
    mainImage: "/images/project-canopy.jpg",
    year: "2022",
    client: "Conservation Alliance",
    role: "Co-founder & Design Lead",
    tags: ["Collaboration", "Conservation", "Community Engagement"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

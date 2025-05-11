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
    mainImage: "/images/project-loopholes.jpg",
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
    description: "Mitigating elephant-train collisions in India",
    fullDescription:
      "A collaborative project with wildlife conservationists and Indian Railways to develop solutions that reduce elephant-train collisions. The work included field research, stakeholder interviews, and the design of both technological and behavioral interventions to protect these magnificent creatures.",
    mainImage: "/images/project-track.jpg",
    year: "2023",
    client: "World Wildlife Fund (WWF)",
    role: "Lead Design Researcher",
    tags: ["Wildlife Conservation", "Research", "Stakeholder Engagement"],
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

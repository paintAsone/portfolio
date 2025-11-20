import Chip from "../components/Chip";
import type { ProjectDetail } from "../types/projects.type";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Projects() {
  const projects: ProjectDetail[] = [
    {
      title: "EDC Management System",
      description: [
        "Developed a fully responsive web application using React.js +TypeScript for the bank EDC management system.",
        "Utilized internal shared components and developed new reusable UI components to improve maintainability.",
        "Built a dynamic EDC editing form that adapts to backend configurations, allowing fields to be enabled/disabled, validated with regex, and assigned min-max rules directly from the backend. Eliminating the need for hard-coded logic.",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Git"],
      href: "#project-edc-management",
    },
    {
      title: "Safe Deposit Box Management System",
      description: [
        "Built a responsive web application using React.js + TypeScript for the safe deposit box management system.",
        "Translated business requirements into clear user flows using Figma for alignment with SA and BA teams.",
        "Implemented a centralized context management system to store API data once and reuse it across multiple steps within a single user flow, significantly reducing redundant API calls and improving performance.",
      ],

      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "Git"],
      href: "#project-safe-deposit-box-management",
    },
    {
      title: "Employee Management System",
      description: [
        "Developed a responsive internal platform using Next.js + TypeScript for employee information management and IDP workflows.",
        "Created and maintained Storybook to document and showcase UI components for easier review, reuse, and system-wide consistency.",
        "Implemented a file upload feature supporting drag & drop and direct file browsing for enhanced usability.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Git",
        "TanStack Query",
      ],
      href: "#project-employee-management",
    },
    {
      title: "Namjai",
      description: [
        "Led and supported the frontend team to ensure efficient collaboration and consistent coding practices.",
        "Collected and analyzed client requirements, then translated them into detailed UI designs using Figma.",
        "Developed form-related features with validation using Zod, improving data accuracy and user experience.",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Git"],
      href: "#project-namjai",
    },
  ];
  return (
    <RevealOnScroll>
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Feature Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:[0_2px_8px_rgba(59,130,2246,0.2)] transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                {typeof project.description === "string" ? (
                  <p className="text-gray-400 mb-3">{project.description}</p>
                ) : (
                  <ul className="list-disc list-inside text-gray-300">
                    {project.description.map((desc, index) => {
                      return <li key={index}>{desc}</li>;
                    })}
                  </ul>
                )}
              </div>

              <div>
                <div className="flex gap-2 pt-6">
                  {project.technologies.map((tech, key) => (
                    <Chip text={tech} key={key} />
                  ))}
                </div>
                <div className="flex justify-between items-center pt-6">
                  <a
                    href={project.href}
                    className="text-blue-500 hover:text-blue-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </RevealOnScroll>
  );
}

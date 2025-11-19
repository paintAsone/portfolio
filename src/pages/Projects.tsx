import React from "react";
import Chip from "../components/Chip";
import type { ProjectDetail } from "../types/projects.type";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Projects() {
  const projects: ProjectDetail[] = [
    {
      title: "EDC Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamviverra rutrum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Git"],
      href: "#project-edc-management",
    },
    {
      title: "Safe Deposit Box Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamviverra rutrum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Redux", "Git"],
      href: "#project-safe-deposit-box-management",
    },
    {
      title: "Employee Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamviverra rutrum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiamviverra rutrum vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:[0_2px_8px_rgba(59,130,2246,0.2)] transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex gap-2">
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
          ))}
        </div>
      </section>
    </RevealOnScroll>
  );
}

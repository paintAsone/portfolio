import React from "react";
import Chip from "../components/Chip";
import RevealOnScroll from "../components/RevealOnScroll";

export default function About() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "Git",
    "TanStack Query",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              1.7 years of experience in Frontend Development. Worked closely
              with SA, BA, Designer.
            </p>
            {/* <p className="font-semibold">
            Passionate. Eager to learn. Team Player.
          </p> */}

            <div className="grid grid-cols-1 md:grid-cols-1 w-[60%]">
              <div className="rounded-xl transition-all">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, key) => (
                    <Chip text={skill} key={key} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="rounded-xl transition-all">
                <h3 className="text-xl font-bold mb-4">💼 Experiences</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>Software Engineer (Frontend)</strong> - Aware
                    Technology Solution (2024 - Present)
                  </li>
                  <li>
                    <strong>Frontend Developer & UX/UI Internship</strong> -
                    Manao Software (2023-2023)
                  </li>
                </ul>
              </div>
              <div className="rounded-xl transition-all pt-6">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    <strong>First Honor with Computer Engineering</strong> -
                    Chiang Mai University
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

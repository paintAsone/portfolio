import React from "react";
import NavigateButton from "../components/buttons/NavigateButton";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Home() {
  return (
    <RevealOnScroll>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Natkamonlak Intaramanon (Paint)
          </h1>

          <p className="text-gray-400 text-xl">
            I'm a passionate software developer specializing in building web
            applications using React.js, Next.js with TypeScript.
          </p>

          <div className="flex justify-center items-center space-x-4 py-6">
            <NavigateButton href="#projects" text="View Projects" />
            <NavigateButton
              href="#contact"
              text="Let's Connect!"
              className="border border-blue-500/50 text-blue-500 bg-transparent hover:bg-blue-500/10"
            />
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}

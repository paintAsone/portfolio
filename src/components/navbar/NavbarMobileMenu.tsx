import React from "react";
import NavbarMenu from "./NavbarMenu";

type NavbarMobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function NavbarMobileMenu({
  menuOpen,
  setMenuOpen,
}: NavbarMobileMenuProps) {
  return (
    <div
      className={`fixed left-0 top-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
    ${
      menuOpen
        ? "h-screen opacity-100 pointer-everts-auto"
        : "h-0  hidden pointer-everts-none"
    }`}
    >
      <button
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
      >
        &times;
      </button>
      <div className="flex flex-col items-left space-x-8 text-2xl font-semibold text-white transform-colors *:border-b-2 *:border-white/10 *:mb-6 *:w-full">
        <NavbarMenu
          href="#home"
          name="Home"
          onClick={() => setMenuOpen(false)}
          className={`${
            menuOpen ? "opacity-100 translate-y-0" : "hidden translate-y-5"
          }`}
        />
        <NavbarMenu
          href="#about"
          name="About Me"
          onClick={() => setMenuOpen(false)}
          className={`${
            menuOpen ? "opacity-100 translate-y-0" : "hidden translate-y-5"
          }`}
        />
        <NavbarMenu
          href="#projects"
          name="Projects"
          onClick={() => setMenuOpen(false)}
          className={`${
            menuOpen ? "opacity-100 translate-y-0" : "hidden translate-y-5"
          }`}
        />
        <NavbarMenu
          href="#contact"
          name="Contact"
          onClick={() => setMenuOpen(false)}
          className={`${
            menuOpen ? "opacity-100 translate-y-0" : "hidden translate-y-5"
          }`}
        />
      </div>
    </div>
  );
}

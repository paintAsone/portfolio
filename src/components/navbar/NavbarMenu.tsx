import React from "react";

type NavbarMenuProps = {
  href: string;
  name: string;
  className?: string;
  onClick?: () => void;
};
export default function NavbarMenu({
  href,
  name,
  className,
  onClick,
}: NavbarMenuProps) {
  return (
    <a
      href={href}
      className={
        `text-gray-300 hover:text-white transition-colors` +
        (className ? `${className}` : "")
      }
      onClick={onClick}
    >
      {name}
    </a>
  );
}

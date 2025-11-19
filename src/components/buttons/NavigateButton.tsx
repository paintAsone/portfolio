type NavigateButtonProps = {
  href: string;
  text: string;
  className?: string;
};
export default function NavigateButton({
  href,
  text,
  className,
}: NavigateButtonProps) {
  return (
    <a
      href={href}
      className={`bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ${
        className ? className : ""
      }`}
    >
      {text}
    </a>
  );
}

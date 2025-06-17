import { FC } from "react";

export const TextLink: FC<{ children: string; to: string }> = ({
  children,
  to,
}) => {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="relative underline underline-offset-8 decoration-dotted"
    >
      {/* Hover text */}
      <span className="absolute font-semibold opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-100">
        {children}
      </span>
      {/* Normal text */}
      <span className="transition-opacity duration-200 ease-in-out hover:opacity-0">
        {children}
      </span>
    </a>
  );
};

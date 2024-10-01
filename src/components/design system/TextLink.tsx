import { FC, ReactNode } from "react";

export const TextLink: FC<{ children: string; to: string }> = ({
  children,
  to,
}) => {
  return (
    <a
      href={to}
      target="_blank"
      className="underline underline-offset-8 decoration-dotted hover:font-semibold"
    >
      {children}
    </a>
  );
};
